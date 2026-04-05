"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force solid background if not on home page or if mobile menu is open
    const isSolid = scrolled || !isHomePage || mobileMenuOpen;

    const navLinks = [
        { name: 'Our Story', href: '/#story' },
        { name: 'Wellness', href: '/wellness' },
        { name: 'Rooms', href: '/stay' },
        { name: 'Cafe', href: '/cafe' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: isSolid ? 'rgba(34, 74, 47, 0.95)' : 'transparent',
                transition: 'background-color 0.3s ease',
                padding: '10px 0',
                color: '#fff',
                boxShadow: isSolid ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }} onClick={() => setMobileMenuOpen(false)}>
                    <div style={{
                        width: '45px',
                        height: '60px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '2px solid var(--color-primary)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0F2F1C'
                    }}>
                        <Image src="/logo.jpg" alt="Tree Aura Logo" fill style={{ objectFit: 'cover' }} />
                    </div>
                </Link>
                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontWeight: '500',
                            position: 'relative'
                        }} className="nav-link">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/stay" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-heading)',
                                color: '#fff'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/stay"
                        className="btn btn-primary"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ padding: '15px 40px', fontSize: '1.2rem', marginTop: '20px' }}
                    >
                        Book Now
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .nav-link:hover {
                    color: var(--color-primary);
                }
                
                /* Mobile Toggle Styles */
                .mobile-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 6px;
                    cursor: pointer;
                    z-index: 1005;
                }
                .bar {
                    width: 30px;
                    height: 2px;
                    background-color: #fff;
                    transition: 0.3s ease;
                }
                .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
                .bar.open:nth-child(2) { opacity: 0; }
                .bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

                /* Mobile Menu Styles */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100vh;
                    background-color: rgba(34, 74, 47, 0.98);
                    backdrop-filter: blur(10px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-in-out;
                    z-index: 1000;
                }
                .mobile-menu.open {
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: flex; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
