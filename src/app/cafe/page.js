import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import Image from 'next/image';

export const metadata = {
    title: "Auré Cafe | Tree Aura Retreat",
    description: "Organic, farm-to-table dining overlooking the Ganges in Rishikesh.",
};

const CafePage = () => {
    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FAF9F6' }}>

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
                    backgroundImage: 'url("/hero-1.png")', // Local asset for reliability
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1a1a1a', // Fallback color
                    filter: 'brightness(0.6)' // Darken for better text visibility
                }}></div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                    }}>
                        <Image src="/cafe-logo.jpg" alt="Auré Cafe Logo" width={160} height={160} style={{ objectFit: 'contain' }} />
                    </div>
                    <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', marginBottom: '10px', color: '#fff' }}>Auré Cafe</h1>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>Eat Well, Live Well</p>
                </div>
            </section>

            {/* Intro & Gallery */}
            <section style={{ padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
                            Our open-air riverside cafe offers a menu curated with love, using organic ingredients sourced from local farms.
                            Enjoy wholesome plant-based meals, fresh juices, and artisanal coffee while listening to the soothing sound of the river.
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <ImageCarousel
                            images={[
                                '/images/Cafe-img-1.JPG', // Placeholder for riverside view
                                '/images/Cafe-img-2.JPG',  // Placeholder for cafe interior
                                '/images/Cafe-img-3.JPG'   // Placeholder for food/people
                            ]}
                            altText="Cafe Ambiance"
                        />
                        <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#777' }}>Experience dining by the Ganges.</p>
                    </div>
                </div>
            </section>

            {/* Farm-to-Table Highlights */}
            <section style={{ padding: '60px 0', background: '#F4F1EA' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}>
                        Farm-to-Table Highlights
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                        {/* Item 1 */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '200px', height: '200px', borderRadius: '50%', background: '#ddd', margin: '0 auto 20px', overflow: 'hidden', position: 'relative'
                            }}>
                                <div style={{ width: '100%', height: '100%', background: 'url("/images/dosa.png") center/cover' }}></div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Mysore Masala Dosa</h3>
                            <p style={{ color: '#555', marginBottom: '10px' }}>Crispy South Indian crepe served with coconut chutney and sambar.</p>
                            <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>₹190</span>
                        </div>

                        {/* Item 2 */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '200px', height: '200px', borderRadius: '50%', background: '#ddd', margin: '0 auto 20px', overflow: 'hidden', position: 'relative'
                            }}>
                                <div style={{ width: '100%', height: '100%', background: 'url("/images/paneer.png") center/cover' }}></div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Kadhai Paneer</h3>
                            <p style={{ color: '#555', marginBottom: '10px' }}>Rich, creamy cottage cheese curry with bell peppers and fresh coriander.</p>
                            <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>₹290</span>
                        </div>

                        {/* Item 3 */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '200px', height: '200px', borderRadius: '50%', background: '#ddd', margin: '0 auto 20px', overflow: 'hidden', position: 'relative'
                            }}>
                                <div style={{ width: '100%', height: '100%', background: 'url("/images/pizza.png") center/cover' }}></div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Italian Pizza</h3>
                            <p style={{ color: '#555', marginBottom: '10px' }}>Authentic wood-fired pizza with fresh mozzarella, basil, and a blistered crust.</p>
                            <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>₹350</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Menu Section */}
            <section style={{ padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}>Our Menu</h2>

                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        background: '#fff',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <Image 
                            src="/menu-preview.jpg" 
                            alt="Auré Cafe Menu" 
                            width={1000} 
                            height={700}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CafePage;
