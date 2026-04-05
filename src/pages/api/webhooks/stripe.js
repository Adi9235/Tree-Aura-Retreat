import { buffer } from 'micro';
import Stripe from 'stripe';
import dbConnect from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const bookingId = session.metadata.bookingId;

        try {
            await dbConnect();
            await Booking.findByIdAndUpdate(bookingId, { status: 'confirmed' });
            console.log(`Booking ${bookingId} confirmed`);
        } catch (err) {
            console.error('Error updating booking:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    res.status(200).json({ received: true });
}
