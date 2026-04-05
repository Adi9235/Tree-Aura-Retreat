import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const images = ["/hero-bg.webp", "/hero-1.webp", "/hero-2.webp"];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    // Preload hero images
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      const handleLoad = () => {
        setImagesLoaded(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      };
      img.onload = handleLoad;
      img.onerror = handleLoad; // Still mark as "loaded" to allow the image tag to render and handle failure gracefully (or show placeholder)
    });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {imagesLoaded[index] && (
            <img
              src={img}
              alt={`Tree Aura Retreat ${index + 1}`}
              className="w-full h-full object-cover scale-105"
            />
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Bottom mist */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in-up">
          {/* Round Logo */}
          <div className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-pulse-gold">
            <img
              src="/logo.jpg"
              alt="Tree Aura"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream tracking-wider mb-4 drop-shadow-2xl">
            Tree Aura Retreat
          </h1>

          <p className="font-heading italic text-lg md:text-xl text-primary mb-3 tracking-wide">
            "Where Nature Meets Conscious Living"
          </p>

          <p className="text-cream/80 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            A luxury sanctuary in Rishikesh featuring a Resort and Auré Cafe.
          </p>

          <Link
            to="/stay"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/40"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cream/60 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
