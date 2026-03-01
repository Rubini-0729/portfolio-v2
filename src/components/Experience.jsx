import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'AI on Azure',
            company: 'Edunet Foundation',
            iconColor: '#0ea5e9', // Light blue
            bullets: [
                'Learned AI/ML/DL fundamentals and real-world applications.',
                'Hands-on supervised and unsupervised learning practice.',
                'Explored Generative AI, Computer Vision, and Azure Custom Vision.',
                'Built and demonstrated a mini deep learning project using Azure tools.'
            ]
        },
        {
            id: 2,
            role: 'AI/ML Internship',
            company: 'Elevate Labs',
            iconColor: '#8b5cf6', // Purple
            bullets: [
                'Data cleaning and preprocessing: missing values, outliers, encoding, scaling.',
                'EDA to identify patterns, trends, and correlations using Python libraries.',
                'Built models: Linear Regression; classification models (LR, DT, RF, KNN, SVM); K-Means.'
            ]
        },
        {
            id: 3,
            role: 'Data Science Internship',
            company: 'Pantech E-Learning',
            iconColor: '#ec4899', // Pink
            bullets: [
                'Worked with NumPy, Pandas, Matplotlib, Seaborn for data science tasks.',
                'Practiced preprocessing and EDA; built and evaluated ML models.',
                'Completed a mini project applying an end-to-end pipeline.'
            ]
        },
        {
            id: 4,
            role: 'AI & Cloud',
            company: 'IBM SkillsBuild',
            iconColor: '#6366f1', // Indigo
            bullets: [
                'Cloud + AI fundamentals, analytics labs, and chatbot development sessions.',
                'Built basic ML models; explored IBM Cloud tools and AutoAI experiments.',
                'Completed final project and evaluation.'
            ]
        }
    ];

    return (
        <section id="experience" className="section relative">
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
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
                        Internships
                    </span>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>
                        Applied <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="timeline-item shadow"
                        >
                            <div className="glass-panel" style={{ padding: '2.5rem', flex: 1, position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '2.5rem',
                                        right: '2.5rem',
                                        color: 'rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <Briefcase size={80} />
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: exp.iconColor }}>{exp.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500, marginBottom: '1.5rem' }}>
                                    {exp.company}
                                </h4>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                                            <CheckCircle2 size={18} style={{ color: exp.iconColor, flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <style>{`
        .timeline-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .timeline-container {
            grid-template-columns: 1fr 1fr;
          }
        }
        .timeline-item {
          display: flex;
          transition: transform 0.3s ease;
        }
        .timeline-item:hover {
          transform: translateY(-5px);
        }
      `}</style>
        </section>
    );
};

export default Experience;
