import React from 'react';
import GridGallery from '../components/GridGallery';
import { Check } from 'lucide-react';

const roomsData = [
  {
    id: 'room-deluxe',
    name: 'Deluxe Room',
    description: 'Experience unparalleled luxury and comfort in our Deluxe Room. Designed as a spacious sanctuary, it features elegant decor and a private balcony with breathtaking views. Perfect for a peaceful retreat away from the daily bustle, ensuring a truly premium stay.',
    price: '5999',
    images: [
      '/images/Deluxe-new-1.jpeg',
      '/images/Deluxe-new-2.jpeg',
      '/images/Deluxe-new-3.jpeg',
      '/images/Deluxe-new-4.jpeg',
      '/images/Deluxe-new-5.jpeg',
      '/images/Deluxe-new-6.jpeg',
      '/images/Deluxe-new-7.jpeg',
    ],
    amenities: [
      'Private Balcony',
      'Air Conditioner',
      'TV',
      'Hot/Cold Water',
      'King Size Double Bed with Premium Bedding',
      'Wardrobe and Luggage Space',
      'Free Wifi',
      'Attached Private Bathroom'
    ]
  },
  {
    id: 'room-cottage',
    name: 'Cottage Room',
    description: 'Embrace nature in our charming Cottage Room. Offering a cozy, rustic feel intertwined with modern comforts, this room provides an intimate experience surrounded by the soothing sounds of the environment. Ideal for a tranquil and restorative getaway.',
    price: '3999',
    images: [
      '/images/Cottage-room-1.jpg',
      '/images/Cottage-room-2.jpg',
      '/images/Cottage-room-3.jpg',
      '/images/Cottage-Outside.jpg',
      '/images/cottage-new-1.jpeg',
      '/images/cottage-new-2.jpeg',
    ],
    amenities: [
      'Free Wifi',
      'TV',
      'Air Conditioner',
      'King Size Double Bed with Bedding',
      'Attached Private Bathroom'
    ]
  }
];

const StayPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Stay With Us</p>
          <h1 className="font-heading text-4xl md:text-5xl text-cream mb-4">Our Accommodations</h1>
          <p className="text-secondary-foreground/60 leading-relaxed">
            Choose your sanctuary. Discover the elegance of our Deluxe Rooms or the charm of our Cottage Rooms.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {roomsData.map((room, index) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <GridGallery images={room.images} />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                <h2 className="font-heading text-3xl md:text-4xl text-secondary">{room.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{room.description}</p>

                <div>
                  <h3 className="font-heading text-lg text-secondary mb-3">Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-primary shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-heading text-2xl text-primary">₹{room.price}</span>
                    <span className="text-muted-foreground text-sm"> / night</span>
                  </div>
                  <a
                    href={`https://wa.me/918266827467?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${room.name} at Tree Aura Retreat.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StayPage;
