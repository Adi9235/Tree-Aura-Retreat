"use client";
import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({ title, distance, description, image, type, priority = false }) => {
    return (
        <div className="exp-card">
            <div className="image-container">
                <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="exp-img"
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="distance-badge">{distance}</div>
                <div className="type-badge">{type}</div>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <style jsx>{`
                .exp-card {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-align: left;
                    height: 100%;
                    border: 1px solid rgba(0,0,0,0.03);
                }
                .exp-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .image-container {
                    position: relative;
                    height: 240px;
                    width: 100%;
                    overflow: hidden;
                }
                :global(.exp-img) {
                    object-fit: cover !important;
                    transition: transform 0.6s ease !important;
                }
                .exp-card:hover :global(.exp-img) {
                    transform: scale(1.1);
                }
                .distance-badge {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: var(--color-secondary);
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    z-index: 2;
                }
                .type-badge {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255,255,255,0.9);
                    color: var(--color-accent);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.7rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    z-index: 2;
                    backdrop-filter: blur(4px);
                }
                .content {
                    padding: 25px;
                }
                h3 {
                    margin: 0 0 12px;
                    font-size: 1.4rem;
                    font-family: var(--font-heading);
                    color: var(--color-accent);
                }
                p {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default ExperienceCard;
