import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  label: string;
}

const VerticalCard: React.FC<VerticalCardProps> = ({ title, description, image, link, label }) => {
  return (
    <Link to={link} className="group block relative overflow-hidden rounded-lg h-[420px] md:h-[500px]">
      <LazyImage
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
        <h3 className="font-heading text-2xl md:text-3xl text-cream mb-2">{title}</h3>
        <p className="text-cream/70 text-sm mb-4 line-clamp-2">{description}</p>
        <span className="inline-flex items-center text-primary text-sm font-bold tracking-wider uppercase group-hover:tracking-[0.3em] transition-all duration-300">
          {label} →
        </span>
      </div>
    </Link>
  );
};

export default VerticalCard;
