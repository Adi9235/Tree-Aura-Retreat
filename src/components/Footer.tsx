import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                <img src="/logo.jpg" alt="Tree Aura" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading text-xl text-primary">Tree Aura</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              A luxury sanctuary in Rishikesh where the tranquility of the mountains meets modern conscious living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-primary text-lg mb-4">Explore</h4>
            <div className="space-y-2">
              {[
                { name: 'Wellness & Spa', href: '/wellness' },
                { name: 'Our Rooms', href: '/stay' },
                { name: 'Auré Cafe', href: '/cafe' },
                { name: 'Experiences', href: '/experiences' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-primary text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/60">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Inside Laxman Jhula Car Parking, Tapovan, Rishikesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:treeaura.retreat@gmail.com" className="hover:text-primary transition-colors">
                  treeaura.retreat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+919990025195" className="hover:text-primary transition-colors">
                  +91 9990025195
                </a>
              </div>
            </div>
          </div>

          {/* Social / CTA */}
          <div>
            <h4 className="font-heading text-primary text-lg mb-4">Stay Connected</h4>
            <p className="text-secondary-foreground/60 text-sm mb-4">Follow us for updates and offers.</p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 border border-primary text-primary text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/40 text-xs tracking-wider">
          © {new Date().getFullYear()} Tree Aura Retreat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
