import React from 'react';
import LazyImage from '../components/LazyImage';
import ImageCarousel from '../components/ImageCarousel';

const CafePage: React.FC = () => {
  const menuItems = [
    { name: 'Mysore Masala Dosa', desc: 'Crispy South Indian crepe served with coconut chutney and sambar.', price: '₹190', image: '/images/dosa.png' },
    { name: 'Kadhai Paneer', desc: 'Rich, creamy cottage cheese curry with bell peppers and fresh coriander.', price: '₹290', image: '/images/paneer.png' },
    { name: 'Italian Pizza', desc: 'Authentic wood-fired pizza with fresh mozzarella, basil, and a blistered crust.', price: '₹350', image: '/images/pizza.png' },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-20">
          <ImageCarousel images={['/images/Cafe-img-1.jpg', '/images/Cafe-img-2.jpg', '/images/Cafe-img-3.jpg']} altText="Auré Cafe" interval={4000} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mb-4">
            <img src="/cafe-logo.jpg" alt="Auré Cafe Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-3">Auré Cafe</h1>
          <p className="font-heading italic text-primary text-lg">Eat Well, Live Well</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Our Kitchen</p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">Farm to Table</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our open-air riverside cafe offers a menu curated with love, using organic ingredients sourced from local farms.
                Enjoy wholesome plant-based meals, fresh juices, and artisanal coffee while listening to the soothing sound of the river.
              </p>
            </div>
            <div className="h-[350px] rounded-lg overflow-hidden shadow-xl">
              <ImageCarousel images={['/images/Cafe-img-1.jpg', '/images/Cafe-img-2.jpg', '/images/Cafe-img-3.jpg']} altText="Cafe" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Taste</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary">Farm-to-Table Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <LazyImage src={item.image} alt={item.name} className="w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-secondary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.desc}</p>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-8">Our Menu</h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <LazyImage src="/menu-preview.jpg" alt="Auré Cafe Menu" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CafePage;
