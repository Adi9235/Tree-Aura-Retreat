import React from 'react';
import Image from 'next/image';

export const metadata = {
    title: "Wellness | Tree Aura Retreat",
    description: "Rejuvenate your mind, body, and soul with our spa and yoga sessions.",
};

const WellnessPage = () => {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#FAF9F6' }}>
            {/* Hero Section */}
            <section style={{
                height: '60vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)'
                }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', marginBottom: '10px', color: '#fff' }}>Wellness & Spa</h1>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                        Rejuvenate your mind, body, and soul.
                    </p>
                </div>
            </section>

            <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', marginBottom: '30px' }}>Experience Deep Relaxation</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
                        Our world-class spa facilities offer a sanctuary of tranquility. From holistic Ayurvedic therapies to revitalizing massages, every treatment is designed to restore balance and harmony. Let our expert therapists guide you on a journey of profound renewal.
                    </p>
                </div>

                <div style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    position: 'relative',
                    height: '500px',
                    width: '100%'
                }}>
                    <Image 
                        src="/images/spa-hero.png" 
                        alt="Tranquil Spa Experience with Stones and Oils"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </main>
    );
};

export default WellnessPage;
