import React from 'react';
import { useLazyImage } from '../hooks/useImagePreload';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  eager?: boolean; // set true for above-the-fold images
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', onClick, eager = false }) => {
  const { ready, containerRef } = useLazyImage(src, eager ? '0px' : '500px');

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-stone-900/20 ${className}`}
      onClick={onClick}
      style={{ contentVisibility: 'auto' }}
    >
      {/* Shimmer placeholder */}
      {!ready && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-800/20 via-stone-600/10 to-stone-800/20 animate-shimmer" />
      )}

      {/* Image — always in DOM once inView, opacity transitions in */}
      {(ready || eager) && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            ready ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          }`}
        />
      )}
    </div>
  );
};

export default LazyImage;
