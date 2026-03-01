import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div className="container" style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
                    >
                        Building AI & <br />
                        <span className="gradient-text">Data Solutions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}
                    >
                        Motivated AI & Data Science student with hands-on internship experience in Machine Learning, Data Analytics, and Cloud-based AI. Focused on practical, measurable outcomes: clean data pipelines, reliable models, and deployable prototypes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
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
        </section>
    );
};

export default Hero;
