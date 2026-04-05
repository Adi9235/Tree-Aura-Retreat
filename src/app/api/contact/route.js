import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 1. Define Transporter Outside (Persistent Connection Pool)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    pool: true, // Reuse connections for speed
    maxConnections: 3,
    maxMessages: 100,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Prepare Emails
        const ownerMailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: `Inquiry: ${name} - Tree Aura`,
            html: `<h3>New Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        };

        const visitorMailOptions = {
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: 'We Received Your Message - Tree Aura Retreat',
            html: `<h3>Hi ${name},</h3><p>Thank you for reaching out! We have received your inquiry and will get back to you shortly.</p><br/><p>Warm regards,<br/><strong>Tree Aura Team</strong></p>`,
        };

        // 3. TRIGGER EMAILS IN BACKGROUND (NON-BLOCKING)
        // We do NOT 'await' these here so we can respond to the user INSTANTLY.
        // The server will finish sending these after the response is sent.
        transporter.sendMail(ownerMailOptions).catch(err => console.error('Owner Mail Error:', err));
        transporter.sendMail(visitorMailOptions).catch(err => console.error('Visitor Mail Error:', err));

        // 4. Return Success Immediately
        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
