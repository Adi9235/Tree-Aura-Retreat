import Hero from '@/components/Hero';
import VerticalCard from '@/components/VerticalCard';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Our Story Section */}
      <section id="story" style={{ padding: '100px 0', textAlign: 'center', backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <span style={{
            color: 'var(--color-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>Welcome to Tree Aura</span>

          <h2 style={{
            fontSize: '3rem',
            margin: '20px 0 30px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-accent)'
          }}>A Sanctuary in the Himalayas</h2>

          <p style={{
            maxWidth: '800px',
            margin: '0 auto 50px',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--color-text)'
          }}>
            Located in the spiritual heart of Rishikesh, surrounded by lush green forests and overlooking the majestic Ganges.
            Tree Aura is a unique retreat where the tranquility of the mountains meets modern conscious living.
            Whether you seek the comfort of our luxury resort or the serenity of our riverside cafe,
            you will find your perfect sanctuary here.
          </p>

          <div style={{
            display: 'flex',
            gap: '60px',
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>🏔️</span>
              <p style={{ fontWeight: 'bold' }}>Mountain Views</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>🌊</span>
              <p style={{ fontWeight: 'bold' }}>Ganga Ghats</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>🧘</span>
              <p style={{ fontWeight: 'bold' }}>Wellness & Spa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section style={{ padding: '50px 0 100px', backgroundColor: 'var(--color-background)' }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto' 
        }}>
          <VerticalCard
            title="Luxury Resort"
            description="Elegant suites with private balconies facing the river and mountains."
            image="/images/Deluxe-Room-1.JPG"
            link="/stay"
            label="View Rooms"
          />
          <VerticalCard
            title="Auré Cafe"
            description="Organic farm-to-table dining by the water with panoramic views."
            image="/images/Cafe-img-1.JPG"
            link="/cafe"
            label="See Menu"
          />
        </div>
      </section>
    </main>
  );
}
