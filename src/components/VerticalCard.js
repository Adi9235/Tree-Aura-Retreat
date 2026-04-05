"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const VerticalCard = ({ title, description, image, link, label }) => {
    return (
        <Link href={link} style={{ display: 'block', textDecoration: 'none', flex: 1, minWidth: '300px' }}>
            <div className="card" style={{
                position: 'relative',
                height: '500px',
                width: '100%',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease'
            }}>
                {/* Background Image */}
                <div className="card-bg" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.5s ease',
                    zIndex: 0
                }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    zIndex: 1
                }}></div>

                {/* Content */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '30px',
                    zIndex: 2,
                    color: '#fff',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        fontSize: '2rem',
                        marginBottom: '10px',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-primary)'
                    }}>{title}</h3>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', opacity: 0.9 }}>{description}</p>
                    <span className="btn-link" style={{
                        display: 'inline-block',
                        color: '#fff',
                        textDecoration: 'underline',
                        textUnderlineOffset: '5px',
                        fontWeight: 'bold'
                    }}>
                        {label} &rarr;
                    </span>
                </div>

                <style jsx>{`
            .card:hover .card-bg {
              transform: scale(1.1);
            }
            .card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }
          `}</style>
            </div>
        </Link>
    );
};

export default VerticalCard;
