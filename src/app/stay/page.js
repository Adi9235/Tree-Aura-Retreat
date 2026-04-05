"use client";
import React, { useState } from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import GridGallery from '../../components/GridGallery';

const roomsData = [
    {
        _id: 'room-deluxe',
        name: 'Deluxe Room',
        description: 'Experience unparalleled luxury and comfort in our Deluxe Room. Designed as a spacious sanctuary, it features elegant decor and a private balcony with breathtaking views. Perfect for a peaceful retreat away from the daily bustle, ensuring a truly premium stay.',
        price: '5999',
        images: [
            '/images/Deluxe-Room-1.JPG', 
            '/images/Deluxe-Room-2.JPG', 
            '/images/Deluxe-Bathroom.JPG',
            '/images/Deluxe-Room-balcony.JPG', 
        ],
        amenities: [
            'Private Balcony',
            'Air Conditioner',
            'TV',
            'Hot/Cold Water',
            'King Size Double Ded with Premium Bedding',
            'Wardrobe and Luggage Space',
            'Free Wifi',
            'Attached Private Bathroom'
            
        ]
    },
    {
        _id: 'room-cottage',
        name: 'Cottage Room',
        description: 'Embrace nature in our charming Cottage Room. Offering a cozy, rustic feel intertwined with modern comforts, this room provides an intimate experience surrounded by the soothing sounds of the environment. Ideal for a tranquil and restorative getaway.',
        price: '3999',
        images: [
            '/images/Cottage-room-1.JPG', 
            '/images/Cottage-room-2.JPG', 
            '/images/Cottage-room-3.JPG',
            '/images/Cottage-Outside.JPG', 
        ],
        amenities: [
            'Free Wifi',
            'TV',
            'Air Conditioner',
            'King Size Double Bed with Bedding',
             'Attached Private Bathroom'
            
        ]
    }
];

const AccommodationPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '50px' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px', color: 'var(--color-secondary)' }}>Our Accommodations</h1>
                <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: '#555' }}>
                    Choose your sanctuary. Discover the elegance of our Deluxe Rooms or the charm of our Cottage Rooms, designed to offer a peaceful haven for every traveler.
                </p>

                {roomsData.map((room, index) => (
                    <div key={room._id} style={{ marginBottom: '100px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                            {/* Alternate order for visual variety */}
                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                {room.images && room.images.length >= 4 ? (
                                    <GridGallery images={room.images.slice(0, 4)} priority={index === 0} />
                                ) : (
                                    <ImageCarousel
                                        images={room.images || ['/hero-2.png']}
                                        altText={room.name}
                                    />
                                )}
                            </div>

                            <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{room.name}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#444' }}>
                                    {room.description}
                                </p>

                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Amenities</h3>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    {room.amenities.map((amenity, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4' }}>
                                            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span> 
                                            <span>{amenity}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>₹{room.price} / night</span>
                                    <a
                                        href={`https://wa.me/918266827467?text=${encodeURIComponent(
                                            `Hi Tree Aura Team!\n\nI'm very interested in booking the *${room.name}*. Could you please share more details about availability and any current special offers?\n\nThank you!`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ 
                                            textDecoration: 'none', 
                                            display: 'inline-flex', 
                                            alignItems: 'center', 
                                            gap: '10px',
                                            padding: '12px 25px'
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        Enquire on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                        {index < roomsData.length - 1 && (
                            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '100px auto 0', maxWidth: '80%' }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccommodationPage;

