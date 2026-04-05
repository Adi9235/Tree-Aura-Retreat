import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--color-primary)' }}>Tree Aura Retreat</h3>
                        <p style={{ lineHeight: '1.6', opacity: '0.9' }}>
                            Where nature meets conscious living. Experience the serenity of Rishikesh in our luxury eco-resort.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Explore</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '10px' }}><Link href="/stay">Accommodations</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/cafe">Auré Cafe</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/wellness">Spa & Yoga</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/experiences">Local Experiences</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Contact Us</h4>
                        <p style={{ marginBottom: '10px' }}>Tree Aura Retreat, Inside Laxman Jhula Car Parking, Tapovan, Rishikesh, Uttarakhand, India</p>
                        <p style={{ marginBottom: '10px' }}>treeaura.retreat@gmail.com</p>
                        <p>+919990025195</p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', opacity: '0.7', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Tree Aura Retreat. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
