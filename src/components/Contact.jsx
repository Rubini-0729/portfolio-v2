import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('Sending message...');

        // Web3Forms API 
        // This allows sending emails directly from static HTML/React sites
        // See https://docs.web3forms.com/how-to-guides/js-frameworks/react-js
        const formData = new FormData(e.target);

        // Add access key (public key for rubbing email)
        // For direct use without signup, we use the public testing key 
        // OR create a quick free one: https://web3forms.com/#create
        // Let's use the formsubmit.co which doesn't require a key

        try {
            const response = await fetch("https://formsubmit.co/ajax/rubini29082006@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                })
            });

            if (response.ok) {
                setFormStatus('Message sent successfully! Thank you.');
                e.target.reset();
            } else {
                setFormStatus('Failed to send message. Please try again or email directly.');
            }
        } catch (error) {
            setFormStatus('Network error. Please email directly at rubini29082006@gmail.com');
        }

        setTimeout(() => setFormStatus(null), 5000);
    };

    return (
        <section id="contact" className="section relative" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        Get in touch
                    </span>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>
                        Let's <span className="gradient-text">Collaborate</span>
                    </h2>
                </motion.div>

                <div className="contact-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            For internships, projects, and collaborations. Let's build something amazing together.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>Location</h4>
                                    <p style={{ margin: 0, color: 'var(--text-main)', fontWeight: 600 }}>Pondicherry, India</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>Email</h4>
                                    <a href="mailto:rubini29082006@gmail.com" style={{ margin: 0, color: 'var(--text-main)', fontWeight: 600, textDecoration: 'none' }}>
                                        rubini29082006@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
                            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Social Profiles</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://www.linkedin.com/in/rubini-t-359219291" target="_blank" rel="noopener noreferrer" className="social-link" style={{ background: '#0a66c2', color: 'white' }}>
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/Rubini-0729" target="_blank" rel="noopener noreferrer" className="social-link" style={{ background: '#333', color: 'white' }}>
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel"
                        style={{ padding: '3rem 2rem' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem' }} className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Name</label>
                                    <input type="text" id="name" name="name" required className="form-input" placeholder="John Doe" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                                    <input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="subject" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Subject</label>
                                <input type="text" id="subject" name="subject" required className="form-input" placeholder="Project Discussion" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                                <textarea id="message" name="message" rows="5" required className="form-input" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                                <Send size={18} /> Send Message
                            </button>

                            {formStatus && (
                                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    {formStatus}
                                </div>
                            )}
                        </form>
                    </motion.div>

                </div>

            </div>

            <footer style={{ marginTop: '4rem', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-light)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    © 2026 Rubini T. Built as a personal portfolio.
                </p>
            </footer>

            <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.5fr;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .form-input {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: white;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
          background: rgba(0, 0, 0, 0.4);
        }
      `}</style>
        </section>
    );
};

export default Contact;
