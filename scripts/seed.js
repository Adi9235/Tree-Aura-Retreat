const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// We can't use ES import here easily without enabling modules for this script, 
// so we'll just require necessary parts or copy the schema definition for the seed script.
// To keep it simple for the seed script, I'll redefine the schema here briefly or use dynamic import.
// Using a standalone connection logic for the seed script.

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please provide MONGODB_URI in .env.local');
    process.exit(1);
}

const RoomSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    capacity: Number,
    imageUrl: String,
    amenities: [String],
}, { timestamps: true });

const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

const seedRooms = [
    {
        name: 'Ocean/Pool View Suite',
        description: 'A luxurious suite with a stunning view of the ocean and pool.',
        price: 3200,
        capacity: 2,
        imageUrl: '/images/ocean-suite.jpg', // Placeholder
        amenities: ['Ocean View', 'King Bed', 'Free Wi-Fi', 'Air Conditioning'],
    },
    {
        name: 'Garden View Deluxe',
        description: 'Relax in our serene garden view rooms.',
        price: 2600,
        capacity: 2,
        imageUrl: '/images/garden-deluxe.jpg', // Placeholder
        amenities: ['Garden View', 'Queen Bed', 'Private Balcony', 'Tea/Coffee Maker'],
    },
];

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing rooms
        await Room.deleteMany({});
        console.log('Cleared existing rooms');

        // Insert new rooms
        await Room.insertMany(seedRooms);
        console.log('Seeded rooms successfully');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
