import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface GridGalleryProps {
  images: string[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  if (!images || images.length < 4) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:gap-3 rounded-lg overflow-hidden">
        {/* Main large image */}
        <div className="row-span-2">
          <LazyImage
            src={images[0]}
            alt="Room View 1"
            className="w-full h-full min-h-[250px] md:min-h-[400px] cursor-pointer rounded-l-lg"
            onClick={() => setSelectedImage(0)}
          />
        </div>
        {/* Top right */}
        <LazyImage
          src={images[1]}
          alt="Room View 2"
          className="w-full h-[120px] md:h-[195px] cursor-pointer rounded-tr-lg"
          onClick={() => setSelectedImage(1)}
        />
        {/* Bottom right row */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <LazyImage
            src={images[2]}
            alt="Room View 3"
            className="w-full h-[120px] md:h-[195px] cursor-pointer"
            onClick={() => setSelectedImage(2)}
          />
        <div className="relative cursor-pointer rounded-br-lg overflow-hidden group" onClick={() => setSelectedImage(3)}>
          <LazyImage
            src={images[3]}
            alt="Room View 4"
            className="w-full h-[120px] md:h-[195px] group-hover:scale-105 transition-transform duration-500"
          />
          {images.length > 4 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none group-hover:bg-black/20 transition-colors">
              <span className="text-cream font-bold text-sm md:text-base">+ {images.length - 4} View All</span>
            </div>
          )}
        </div>
      </div>
    </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center text-cream hover:bg-secondary transition-colors z-10"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! - 1 + images.length) % images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center text-primary hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center text-primary hover:bg-secondary transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          <img
            src={images[selectedImage]}
            alt={`Room View ${selectedImage + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GridGallery;
