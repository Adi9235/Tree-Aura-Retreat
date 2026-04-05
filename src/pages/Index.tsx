import React from 'react';
import Hero from '../components/Hero';
import VerticalCard from '../components/VerticalCard';
import { Mountain, Waves, Flower2 } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* Our Story Section */}
      <section id="story" className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Welcome to Tree Aura</p>
          <h2 className="font-heading text-3xl md:text-5xl text-secondary mb-8">
            A Sanctuary in the Himalayas
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-base md:text-lg">
            Located in the spiritual heart of Rishikesh, surrounded by lush green forests and overlooking the majestic Ganges.
            Tree Aura is a unique retreat where the tranquility of the mountains meets modern conscious living.
            Whether you seek the comfort of our luxury resort or the serenity of our riverside cafe,
            you will find your perfect sanctuary here.
          </p>

          {/* Feature icons */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { icon: Mountain, label: 'Mountain Views' },
              { icon: Waves, label: 'Ganga Ghats' },
              { icon: Flower2, label: 'Wellness & Spa' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Discover</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary">Explore Tree Aura</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VerticalCard
              title="Wellness & Spa"
              description="Rejuvenate your mind, body, and soul with holistic treatments."
              image="/images/spa-hero.webp"
              link="/wellness"
              label="Explore Wellness"
            />
            <VerticalCard
              title="Our Rooms"
              description="Luxury accommodations with breathtaking Himalayan views."
              image="/images/Deluxe-new-1.jpeg"
              link="/stay"
              label="View Rooms"
            />
            <VerticalCard
              title="Auré Cafe"
              description="Farm-to-table dining overlooking the sacred Ganges."
              image="/images/Cafe-img-1.jpg"
              link="/cafe"
              label="Visit Cafe"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
