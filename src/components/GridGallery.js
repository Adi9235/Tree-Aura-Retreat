"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GridGallery = ({ images, priority = false }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [panPos, setPanPos] = useState({ x: 50, y: 50 });

    // Disable scroll when lightbox is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    if (!images || images.length < 4) return null;

    const openLightbox = (index) => {
        setSelectedImage(index);
        setIsZoomed(false);
        setPanPos({ x: 50, y: 50 });
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setIsZoomed(false);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % images.length);
        setIsZoomed(false);
        setPanPos({ x: 50, y: 50 });
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
        setIsZoomed(false);
        setPanPos({ x: 50, y: 50 });
    };

    const handleMouseMove = (e) => {
        if (!isZoomed) return;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPanPos({ x, y });
    };

    const toggleZoom = (e) => {
        e.stopPropagation();
        const newZoom = !isZoomed;
        setIsZoomed(newZoom);
        
        if (newZoom) {
             const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
             const x = ((e.clientX - left) / width) * 100;
             const y = ((e.clientY - top) / height) * 100;
             setPanPos({ x, y });
        }
    };

    return (
        <div className="gallery-container">
            <div className="grid-layout">
                {/* Main Image - Priority for fast rendering */}
                <div className="grid-item main" onClick={() => openLightbox(0)}>
                    <Image 
                        src={images[0]} 
                        alt="Room View 1" 
                        fill 
                        priority={priority} 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="gallery-img"
                    />
                    <div className="overlay"><span>Immersive View</span></div>
                </div>
                
                {/* Top Right Wide Image */}
                <div className="grid-item wide" onClick={() => openLightbox(1)}>
                    <Image 
                        src={images[1]} 
                        alt="Room View 2" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="gallery-img"
                    />
                    <div className="overlay"><span>Wide Angle</span></div>
                </div>
                
                {/* Bottom Right Image 1 */}
                <div className="grid-item small" onClick={() => openLightbox(2)}>
                    <Image 
                        src={images[2]} 
                        alt="Room View 3" 
                        fill 
                        sizes="(max-width: 768px) 50vw, 15vw"
                        className="gallery-img"
                    />
                </div>
                
                {/* Bottom Right Image 2 */}
                <div className="grid-item small" onClick={() => openLightbox(3)}>
                    <Image 
                        src={images[3]} 
                        alt="Room View 4" 
                        fill 
                        sizes="(max-width: 768px) 50vw, 15vw"
                        className="gallery-img"
                    />
                </div>
            </div>

            {/* Immersive Lightbox Modal */}
            {selectedImage !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-close" onClick={closeLightbox}>&times;</div>
                    
                    <div className="lightbox-nav prev" onClick={prevImage}>&#10094;</div>
                    <div className="lightbox-nav next" onClick={nextImage}>&#10095;</div>

                    <div 
                        className={`lightbox-content ${isZoomed ? 'zoomed' : ''}`} 
                        onClick={toggleZoom}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="img-wrapper" style={{
                            transformOrigin: `${panPos.x}% ${panPos.y}%`,
                            transform: isZoomed ? 'scale(2.5)' : 'scale(1)'
                        }}>
                            <Image 
                                src={images[selectedImage]} 
                                alt={`Room View Immersive ${selectedImage + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="90vw"
                                quality={90}
                                priority
                            />
                        </div>
                    </div>
                    
                    <div className="lightbox-hint">
                        {isZoomed ? 'Move mouse to explore details' : 'Click to look into every corner'}
                    </div>
                </div>
            )}

            <style jsx>{`
                .gallery-container { width: 100%; }
                .grid-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    grid-template-rows: 200px 200px;
                    gap: 12px;
                    height: 412px;
                }
                .grid-item {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    cursor: crosshair;
                    transition: transform 0.3s ease;
                }
                .grid-item:hover { transform: scale(1.02); z-index: 5; }
                .grid-item.main { grid-column: 1 / span 1; grid-row: 1 / span 2; }
                .grid-item.wide { grid-column: 2 / span 2; grid-row: 1 / span 1; }
                
                :global(.gallery-img) { object-fit: cover !important; transition: filter 0.3s ease !important; }
                .grid-item:hover :global(.gallery-img) { filter: brightness(1.1); }

                .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .grid-item:hover .overlay { opacity: 1; }
                .overlay span { color: white; background: rgba(0,0,0,0.6); padding: 5px 15px; border-radius: 20px; font-weight: 500; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase; }

                .lightbox-overlay {
                    position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 9999;
                    display: flex; align-items: center; justify-content: center; backdrop-filter: blur(15px);
                }
                .lightbox-content {
                    width: 90vw; height: 85vh; position: relative; overflow: hidden;
                    cursor: zoom-in;
                }
                .lightbox-content.zoomed { cursor: zoom-out; }
                
                .img-wrapper {
                    position: relative; width: 100%; height: 100%;
                    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    will-change: transform;
                }

                .lightbox-close { position: absolute; top: 25px; right: 40px; color: white; font-size: 45px; cursor: pointer; z-index: 10000; opacity: 0.6; }
                .lightbox-close:hover { opacity: 1; }
                
                .lightbox-nav {
                    position: absolute; top: 50%; transform: translateY(-50%); color: white; font-size: 50px;
                    cursor: pointer; padding: 25px; z-index: 10000; opacity: 0.4; transition: all 0.3s;
                }
                .lightbox-nav:hover { opacity: 1; color: var(--color-primary); transform: translateY(-50%) scale(1.2); }
                .lightbox-nav.prev { left: 10px; }
                .lightbox-nav.next { right: 10px; }

                .lightbox-hint {
                    position: absolute; bottom: 30px; color: white; background: rgba(255,255,255,0.15);
                    padding: 8px 25px; border-radius: 30px; font-size: 0.9rem; text-transform: uppercase;
                    letter-spacing: 2px; backdrop-filter: blur(5px); pointer-events: none;
                }

                @media (max-width: 768px) {
                    .grid-layout { grid-template-columns: 1fr 1fr; grid-template-rows: 250px 150px 150px; height: 550px; }
                    .grid-item.main { grid-column: 1 / span 2; }
                    .grid-item.wide { grid-column: 1 / span 2; }
                    .img-wrapper { transform: none !important; }
                }
            `}</style>
        </div>
    );
};

export default GridGallery;
