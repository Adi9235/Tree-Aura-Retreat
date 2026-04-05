"use client";
import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            showToast("Please fill in all fields", "error");
            return;
        }

        setStatus('sending');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                showToast("Message Sent! We have sent a confirmation to your email.", "success");
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setStatus('error');
            showToast("Failed to send message. Please try again later.", "error");
        } finally {
            setTimeout(() => setStatus('idle'), 2000);
        }
    };

    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FAF9F6', position: 'relative' }}>
            {/* Toast Notification */}
            {toast.show && (
                <div style={{
                    position: 'fixed',
                    top: '100px',
                    right: '25px',
                    backgroundColor: toast.type === 'success' ? '#224a2f' : '#8b0000',
                    color: '#fff',
                    padding: '15px 30px',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    fontSize: '1rem',
                    fontWeight: '600',
                    animation: 'slideInRight 0.4s ease-out'
                }}>
                    {toast.type === 'success' ? '✓ ' : '✕ '} {toast.message}
                </div>
            )}

            <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>Get In Touch</span>
                <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', marginTop: '10px', marginBottom: '20px' }}>Contact Us</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666', maxWidth: '600px', margin: '0 auto 60px' }}>
                    Have questions about your stay? We're here to help you plan your perfect getaway in Rishikesh.
                </p>

                <div style={{ 
                    maxWidth: '800px', 
                    margin: '0 auto', 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.5fr', 
                    gap: '40px',
                    textAlign: 'left'
                }}>
                    {/* Contact Detail Card */}
                    <div style={{ 
                        background: 'var(--color-primary)', 
                        padding: '40px', 
                        borderRadius: '20px', 
                        color: 'white',
                        boxShadow: '0 20px 40px rgba(34, 74, 47, 0.1)'
                    }}>
                        <h3 style={{ marginBottom: '30px', fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>Information</h3>
                        <div style={{ marginBottom: '25px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>Address</p>
                            <p>Inside Laxman Jhula Car Parking, Tapovan, Rishikesh</p>
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>Email</p>
                            <p>treeaura.retreat@gmail.com</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>Phone</p>
                            <p>+91 9990025195</p>
                        </div>
                    </div>

                    {/* Form Card */}
                    <form onSubmit={handleSubmit} style={{ 
                        background: '#fff', 
                        padding: '40px', 
                        borderRadius: '20px', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid #eee'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>FullName</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e1e4e8', background: '#f8f9fa' }} 
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e1e4e8', background: '#f8f9fa' }} 
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Your Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your inquiry here..."
                                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e1e4e8', minHeight: '150px', background: '#f8f9fa', resize: 'vertical' }}
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary" 
                            disabled={status === 'sending'}
                            style={{ 
                                width: '100%', 
                                padding: '18px', 
                                borderRadius: '12px', 
                                fontSize: '1.1rem', 
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </main>
    );
};

export default ContactPage;
