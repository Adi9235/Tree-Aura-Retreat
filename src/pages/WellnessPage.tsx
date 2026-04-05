import React from 'react';
import LazyImage from '../components/LazyImage';

const WellnessPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <LazyImage src="/images/spa-hero.png" alt="Wellness & Spa" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">Wellness & Spa</h1>
            <p className="text-cream/80 text-lg">Rejuvenate your mind, body, and soul.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Holistic Healing</p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">Experience Deep Relaxation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our world-class spa facilities offer a sanctuary of tranquility. From holistic Ayurvedic therapies
                to revitalizing massages, every treatment is designed to restore balance and harmony.
                Let our expert therapists guide you on a journey of profound renewal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Ayurvedic Therapy', 'Deep Tissue Massage', 'Yoga Sessions', 'Sound Healing'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <LazyImage src="/images/spa-hero.png" alt="Spa Experience" className="w-full h-[350px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPage;
