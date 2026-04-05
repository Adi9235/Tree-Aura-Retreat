import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { preloadImages } from '../hooks/useImagePreload';
import { PAGE_IMAGES } from '../lib/imageManifest';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Preload images for the CURRENT page immediately on route change
  useEffect(() => {
    const images = PAGE_IMAGES[location.pathname];
    if (images) preloadImages(images);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isSolid = scrolled || !isHome || mobileOpen;

  const navLinks = [
    { name: 'Our Story', href: '/#story' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Rooms', href: '/stay' },
    { name: 'Cafe', href: '/cafe' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (isHome) {
        const el = document.getElementById(href.slice(2));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  // On hover, preload next page's images ahead of time
  const handleNavHover = (href: string) => {
    const route = href.startsWith('/#') ? '/' : href;
    const images = PAGE_IMAGES[route];
    if (images) preloadImages(images);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-secondary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onMouseEnter={() => handleNavHover('/')}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-primary shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300">
              <img
                src="/logo.jpg"
                alt="Tree Aura Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading text-lg lg:text-xl text-primary tracking-wider">
              Tree Aura
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.startsWith('/#') && isHome ? '/' : link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => handleNavHover(link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 rounded-sm
                  ${location.pathname === link.href
                    ? 'text-primary'
                    : 'text-secondary-foreground/80 hover:text-primary'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/stay"
              onMouseEnter={() => handleNavHover('/stay')}
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-secondary overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-t border-primary/20' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.startsWith('/#') && isHome ? '/' : link.href}
              onClick={() => handleNavClick(link.href)}
              onMouseEnter={() => handleNavHover(link.href)}
              className="block px-4 py-3 text-sm font-medium tracking-wider uppercase text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/stay"
            className="block mx-4 mt-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-sm text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
