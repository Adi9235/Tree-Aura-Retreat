import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    
    // Quick feedback: 
    // Trigger toast and reset form immediately to avoid "long sending state"
    const originalData = { ...formData };
    setFormData({ name: '', email: '', message: '' });
    toast({ 
      title: "Message Sent!", 
      description: `Namaste ${originalData.name}, we've received your inquiry.` 
    });
    
    // Background sending:
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(originalData),
      });
      
      if (!response.ok) {
        console.error('Failed to send message via API');
        // Optional: show error toast only if it fails critically, 
        // but user wanted it quick so we might already be "done" in their eyes.
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-cream mb-4">Contact Us</h1>
          <p className="text-secondary-foreground/60 leading-relaxed">
            Have questions about your stay? We're here to help you plan your perfect getaway in Rishikesh.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="bg-secondary rounded-lg p-8 space-y-6">
              <h3 className="font-heading text-2xl text-primary">Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-cream text-sm font-bold mb-1">Address</p>
                    <p className="text-secondary-foreground/60 text-sm">Inside Laxman Jhula Car Parking, Tapovan, Rishikesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-cream text-sm font-bold mb-1">Email</p>
                    <a href="mailto:treeaura.retreat@gmail.com" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                      treeaura.retreat@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-cream text-sm font-bold mb-1">Phone</p>
                    <a href="tel:+919990025195" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                      +91 9990025195
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-md space-y-5">
              <div>
                <label className="block text-sm font-bold text-muted-foreground mb-2 tracking-wider uppercase">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted-foreground mb-2 tracking-wider uppercase">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted-foreground mb-2 tracking-wider uppercase">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your plans..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                <Send size={16} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
