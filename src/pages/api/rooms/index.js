import dbConnect from '../../../lib/mongodb';
import Room from '../../../models/Room';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        await dbConnect();
        const rooms = await Room.find({});
        res.status(200).json({ success: true, data: rooms });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
