import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Clock } from 'lucide-react';

const experiences = [
  { id: 'laxman-jhula', title: 'Laxman Jhula & Temples', distance: '5 Min Walk', type: 'Spiritual', description: 'The iconic 450ft suspension bridge and the stunning 13-story Tera Manzil temple are the heart of the holy city.', image: '/images/Lakshman_Jhula.jpg' },
  { id: 'beatles-ashram', title: 'Beatles Ashram', distance: '15 Min Drive', type: 'Cultural', description: 'Commonly known as Chaurasi Kutia, explore the stone meditation domes where the Beatles stayed in 1968.', image: '/images/beatles-ashram.jpg' },
  { id: 'bemonk-cafe', title: 'BeMonk Cafe', distance: 'Local Walk', type: 'Foodie', description: "Enjoy Tapovan's artisanal coffee and a vibrant local crowd at this hidden gem.", image: '/images/bemonk-cafe.jpg' },
  { id: 'beatles-cafe', title: 'The Beatles Cafe', distance: '10 Min Walk', type: 'Ganga View', description: 'World-class organic vegan food with panoramic views of the Ganges river and the hills.', image: '/images/beatles-cafe.webp' },
  { id: 'neer-garh', title: 'Neer Garh Waterfall', distance: '20 Min Drive', type: 'Nature', description: 'A moderate trek leads to stunning multi-tiered turquoise pools and cold mountain waterfalls.', image: '/images/Neergarh-waterfall.jpg' },
  { id: 'ganga-aarti', title: 'Parmarth Niketan Aarti', distance: '15 Min Auto', type: 'Spiritual', description: 'Experience the evening ritual with traditional mantras and fire lamps on the holy riverbank.', image: '/images/aarti.webp' },
];

const itinerary = {
  day1: [
    { time: '08:00 AM', activity: 'Rooftop Yoga at Tree Aura', details: 'Start your journey with sunrise meditation overlooking the mountains on our open terrace.' },
    { time: '10:00 AM', activity: 'Walk to Laxman Jhula', details: 'Cross the holy city hub and visit the Tera Manzil Temple.' },
    { time: '01:30 PM', activity: 'Lunch at Beatles Cafe', details: 'Healthy organic food with the best riverside view in Rishikesh.' },
    { time: '04:00 PM', activity: 'Holistic Spa at Tree Aura', details: 'Return for a revitalizing deep tissue massage at our in-house spa.' },
    { time: '06:30 PM', activity: 'Parmarth Niketan Aarti', details: 'Head down to Swarg Ashram across the bridge for the legendary evening ritual.' },
  ],
  day2: [
    { time: '08:30 AM', activity: 'Farm-to-Table Breakfast', details: 'Enjoy a fresh, organic breakfast prepared with local ingredients at our Auré Cafe.' },
    { time: '10:00 AM', activity: 'Neer Garh Hike', details: 'Trek to the turquoise pools and enjoy a refreshing dip in mountain waterfalls.' },
    { time: '02:00 PM', activity: 'Brunch at BeMonk Cafe', details: "Relax in Tapovan's hidden gem known for its artisanal local vibe." },
    { time: '04:00 PM', activity: 'Beatles Ashram Exploration', details: 'Walk through history and admire the graffiti-filled meditation cells.' },
    { time: '07:30 PM', activity: 'Gala Dinner at Auré Cafe', details: "End your 48 hours with a candlelight dinner featuring our chef's special Himalayan delicacies." },
  ],
};

const ExperiencesPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Vicinity Exploration</p>
          <h1 className="font-heading text-4xl md:text-5xl text-cream mb-4">Local Experiences</h1>
          <p className="text-secondary-foreground/60 leading-relaxed">
            Centered in the heart of Tapovan, Tree Aura Retreat is your gateway to Rishikesh's spiritual landmarks and hidden gems.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Curated Itinerary</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-8">Your Perfect 48 Hours</h2>
            <div className="flex justify-center gap-4">
              {(['day1', 'day2'] as const).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 md:px-10 py-3 rounded-full border-2 border-primary text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeDay === day
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-transparent text-primary hover:bg-primary/10'
                  }`}
                >
                  {day === 'day1' ? 'Day 1: Spiritual' : 'Day 2: Adventure'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {itinerary[activeDay].map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6 bg-card rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-primary shrink-0">
                  <Clock size={16} />
                  <span className="font-bold text-sm whitespace-nowrap">{item.time}</span>
                </div>
                <div>
                  <h4 className="font-heading text-base text-secondary mb-1">{item.activity}</h4>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
