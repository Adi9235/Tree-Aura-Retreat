"use client";
import React, { useState } from 'react';
import ExperienceCard from '../../components/ExperienceCard';

const experiences = [
    {
        id: 'laxman-jhula',
        title: 'Laxman Jhula & Temples',
        distance: '5 Min Walk',
        type: 'Spiritual',
        description: 'The iconic 450ft suspension bridge and the stunning 13-story Tera Manzil temple are the heart of the holy city.',
        image: '/images/Lakshman_Jhula.jpg' // Iconic Laxman Jhula/Temple View
    },
    {
        id: 'beatles-ashram',
        title: 'Beatles Ashram',
        distance: '15 Min Drive',
        type: 'Cultural',
        description: 'Commonly known as Chaurasi Kutia, explore the stone meditation domes where the Beatles stayed in 1968.',
        image: '/images/beatles-ashram.jpg' // Definitive Ashram Dome Ruins
    },
    {
        id: 'bemonk-cafe',
        title: 'BeMonk Cafe',
        distance: 'Local Walk',
        type: 'Foodie',
        description: 'Enjoy Tapovan’s artisanal coffee and a vibrant local crowd at this hidden gem.',
        image: '/images/bemonk-cafe.jpg'
    },
    {
        id: 'beatles-cafe',
        title: 'The Beatles Cafe',
        distance: '10 Min Walk',
        type: 'Ganga View',
        description: 'World-class organic vegan food with panoramic views of the Ganges river and the hills.',
        image: '/images/beatles-cafe.webp'
    },
    {
        id: 'neer-garh',
        title: 'Neer Garh Waterfall',
        distance: '20 Min Drive',
        type: 'Nature',
        description: 'A moderate trek leads to stunning multi-tiered turquoise pools and cold mountain waterfalls.',
        image: '/images/Neergarh-waterfall.jpg' // Turquoise Waterfall
    },
    {
        id: 'ganga-aarti',
        title: 'Parmarth Niketan Aarti',
        distance: '15 Min Auto',
        type: 'Spiritual',
        description: 'Experience the evening ritual with traditional mantras and fire lamps on the holy riverbank.',
        image: '/images/aarti.webp' // Famous Shiva Statue Aarti
    }
];

const itinerary = {
    day1: [
        { time: '08:00 AM', activity: 'Rooftop Yoga at Tree Aura', details: 'Start your journey with sunrise meditation overlooking the mountains on our open terrace.' },
        { time: '10:00 AM', activity: 'Walk to Laxman Jhula', details: 'Cross the holy city hub and visit the Tera Manzil Temple.' },
        { time: '01:30 PM', activity: 'Lunch at Beatles Cafe', details: 'Healthy organic food with the best riverside view in Rishikesh.' },
        { time: '04:00 PM', activity: 'Holistic Spa at Tree Aura', details: 'Return for a revitalizing deep tissue massage at our in-house spa to relax your muscles.' },
        { time: '06:30 PM', activity: 'Parmarth Niketan Aarti', details: 'Head down to Swarg Ashram across the bridge for the legendary evening ritual.' }
    ],
    day2: [
        { time: '08:30 AM', activity: 'Farm-to-Table Breakfast', details: 'Enjoy a fresh, organic breakfast prepared with local ingredients at our Auré Cafe.' },
        { time: '10:00 AM', activity: 'Neer Garh Hike', details: 'Trek to the turquoise pools and enjoy a refreshing dip in national waterfalls.' },
        { time: '02:00 PM', activity: 'Brunch at BeMonk Cafe', details: 'Relax in Tapovan’s hidden gem known for its artisanal local vibe.' },
        { time: '04:00 PM', activity: 'Beatles Ashram Exploration', details: 'Walk through history and admire the graffiti-filled meditation cells.' },
        { time: '07:30 PM', activity: 'Gala Dinner at Auré Cafe', details: 'End your 48 hours with a candlelight dinner featuring our chef’s special Himalayan delicacies.' }
    ]
};

const ExperiencesPage = () => {
    const [activeDay, setActiveDay] = useState('day1');

    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FAF9F6' }}>
            <div style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '100px 0 150px', textAlign: 'center', marginBottom: '-60px' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>Vicinity Exploration</span>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', marginTop: '20px' }}>Local Experiences</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto', fontSize: '1.2rem', opacity: 0.9 }}>
                        Centered in the heart of Tapovan, Tree Aura Retreat is your gateway to Rishikesh's spiritual landmarks and hidden gems.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '0 20px 100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} {...exp} priority={index < 2} />
                    ))}
                </div>
            </div>

            <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Curated Itinerary</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', marginTop: '10px' }}>Your Perfect 48 Hours</h2>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
                        <button 
                            onClick={() => setActiveDay('day1')}
                            style={{ 
                                padding: '12px 40px', 
                                borderRadius: '30px', 
                                border: '2px solid var(--color-primary)',
                                background: activeDay === 'day1' ? 'var(--color-primary)' : 'transparent',
                                color: activeDay === 'day1' ? 'white' : 'var(--color-primary)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >DAY 1: SPIRITUAL & LOCAL</button>
                        <button 
                            onClick={() => setActiveDay('day2')}
                            style={{ 
                                padding: '12px 40px', 
                                borderRadius: '30px', 
                                border: '2px solid var(--color-primary)',
                                background: activeDay === 'day2' ? 'var(--color-primary)' : 'transparent',
                                color: activeDay === 'day2' ? 'white' : 'var(--color-primary)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >DAY 2: ADVENTURE & HISTORY</button>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', border: '1px solid #eee', padding: '20px', borderRadius: '20px', background: 'rgba(250,249,246,0.5)' }}>
                        {itinerary[activeDay].map((item, index) => (
                            <div key={index} style={{ display: 'flex', gap: '20px', padding: '30px 0', borderBottom: index < itinerary[activeDay].length - 1 ? '1px solid #eee' : 'none' }}>
                                <div style={{ minWidth: '100px', fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1rem' }}>{item.time}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>{item.activity}</h4>
                                    <p style={{ color: '#666', lineHeight: '1.6' }}>{item.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExperiencesPage;
