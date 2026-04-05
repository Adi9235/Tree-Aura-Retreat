import React from 'react';
import LazyImage from './LazyImage';

interface ExperienceCardProps {
  title: string;
  distance: string;
  description: string;
  image: string;
  type: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, distance, description, image, type }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-500">
      <div className="relative h-52 overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 bg-secondary/80 backdrop-blur-sm text-primary text-xs font-bold tracking-wider rounded-full">
            {distance}
          </span>
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold tracking-wider rounded-full">
            {type}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg text-secondary mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
