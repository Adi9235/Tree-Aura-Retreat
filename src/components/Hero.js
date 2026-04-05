"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    "/hero-bg.png",
    "/hero-1.png",
    "/hero-2.png"
];

const Hero = () => {
    const [offset, setOffset] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);

        // Carousel Timer
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            overflow: 'hidden',
            isolation: 'isolate' // Creates a new stacking context
        }}>
            {/* Background Carousel */}
            {images.map((img, index) => (
                <div key={img} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '110%', // Slight overlap for parallax
                    transform: `translateY(${offset * 0.5}px)`,
                    zIndex: -2,
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: 'opacity 1.5s ease-in-out',
                }}>
                    <Image
                        src={img}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        priority={index === 0}
                        style={{ objectFit: 'cover' }}
                        quality={85}
                    />
                </div>
            ))}

            {/* Gradient Overlay - Made lighter to show off background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(34,74,47,0.1) 100%)', // Very light overlay
                zIndex: -1
            }}></div>

            {/* Decorative Mist/Gradient at bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '250px',
                background: 'linear-gradient(to top, var(--color-background), transparent)',
                zIndex: 0
            }}></div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Animated Logo Display */}
                <div style={{
                    marginBottom: '30px',
                    animation: 'fadeInDown 1s ease-out',
                    width: '160px',
                    height: '220px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid var(--color-primary)',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                    position: 'relative'
                }}>
                    <Image src="/logo.jpg" alt="Tree Aura" fill priority style={{ objectFit: 'cover' }} />
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-heading)',
                    color: '#fff',
                    textShadow: '0 4px 15px rgba(0,0,0,0.6)',
                    animation: 'fadeInUp 1s ease-out 0.3s backwards'
                }}>
                    Tree Aura Retreat
                </h1>

                <p style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    maxWidth: '700px',
                    margin: '0 auto 40px',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-primary)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                    animation: 'fadeInUp 1s ease-out 0.6s backwards'
                }}>
                    "Where Nature Meets Conscious Living"
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    marginBottom: '50px',
                    lineHeight: '1.6',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                    animation: 'fadeInUp 1s ease-out 0.8s backwards'
                }}>
                    A luxury sanctuary in Rishikesh featuring a Resort and Auré Cafe.
                </p>

                <Link href="/stay" className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 5px 20px rgba(212, 175, 55, 0.4)', animation: 'fadeInUp 1s ease-out 1s backwards' }}>
                    Begin Your Journey
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '40px',
                animation: 'bounce 2s infinite',
                cursor: 'pointer',
                color: '#fff',
                opacity: 0.8
            }}>
                <span style={{ fontSize: '2rem' }}>↓</span>
            </div>

            <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
