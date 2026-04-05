import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  altText?: string;
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altText = "Image", autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`${altText} ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/60 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-secondary/80 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/60 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-secondary/80 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-primary w-6' : 'bg-cream/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
