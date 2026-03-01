import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div className="container" style={{ width: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }} className="hero-grid">

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px' }}>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '0.4rem 1.2rem',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary)',
                                borderRadius: '999px',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(99, 102, 241, 0.2)'
                            }}>
                                Aspiring Data Scientist
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
                        >
                            Hi, I'm <br />
                            <span className="gradient-text">Rubini T</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            style={{
                                fontSize: '1.05rem',
                                color: 'var(--text-muted)',
                                marginBottom: '2.5rem',
                                maxWidth: '100%',
                                lineHeight: '1.8'
                            }}
                        >
                            Motivated AI & Data Science student with hands-on internship experience in Machine Learning, Data Analytics, and Cloud-based AI. Focused on practical, measurable outcomes: clean data pipelines, reliable models, and deployable prototypes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <a
                                href="https://rubiniportfolio.vercel.app/assets/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ textDecoration: 'none' }}
                            >
                                <Download size={20} />
                                Download Resume
                            </a>

                            <a
                                href="#projects"
                                className="btn btn-outline"
                                style={{ textDecoration: 'none' }}
                            >
                                View My Work
                            </a>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                    >
                        {/* Animated background blob behind image */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                filter: 'blur(20px)',
                                opacity: 0.3,
                                zIndex: -1
                            }}
                        />

                        {/* Profile Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            style={{
                                width: '100%',
                                maxWidth: '350px',
                                aspectRatio: '1/1',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                background: 'var(--bg-card)'
                            }}
                        >
                            {/* Note: Tell user to name their uploaded image 'profile.jpg' and place it in 'public/' folder */}
                            <img
                                src="/profile.jpg"
                                alt="Rubini T"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    // Try alternate extensions before giving up
                                    if (e.target.src.endsWith('.jpg')) {
                                        e.target.src = '/profile.png';
                                    } else if (e.target.src.endsWith('.png')) {
                                        e.target.src = '/profile.jpeg';
                                    } else {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }
                                }}
                            />
                            <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem', background: 'var(--bg-card)' }}>
                                <p style={{ color: 'var(--text-muted)' }}>Looking great! ✨<br />Save your image as <code>profile.jpg</code> inside the <code>public/</code> folder to see it here.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}
            >
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>

            <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
