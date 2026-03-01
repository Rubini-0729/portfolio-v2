import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const educationList = [
        {
            id: 1,
            degree: 'B.Tech — Artificial Intelligence & Data Science',
            institution: 'Achariya College Of Engineering Technology',
            score: 'CGPA: 8/10',
            year: '2023 – 2027 (Present)'
        },
        {
            id: 2,
            degree: 'Higher Secondary (HSC)',
            institution: 'Thiruvallur Girls Government Higher Secondary School',
            score: '80%',
            year: '2022 – 2023'
        },
        {
            id: 3,
            degree: 'Secondary (SSLC)',
            institution: 'Trinity Blessing High School',
            score: 'All Pass',
            year: '2021 – 2022'
        }
    ];

    const certs = [
        'Microsoft Azure AI Fundamentals',
        'IBM SkillsBuild AI & Cloud Certifications',
        'Pantech Data Science Internship Certificate',
        'Elevate Labs AI/ML Internship Certificate'
    ];

    return (
        <section id="education" className="section relative">
            <div className="container relative z-10">

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem' }} className="edu-grid">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--primary)' }}>
                                <GraduationCap size={28} />
                            </div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Education</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {educationList.map((edu, index) => (
                                <div key={edu.id} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{edu.degree}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>{edu.institution}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                                        <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '999px', color: 'var(--accent)' }}>
                                            {edu.score}
                                        </span>
                                        <span style={{ color: 'var(--text-muted)' }}>{edu.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--secondary)' }}>
                                <Award size={28} />
                            </div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Certifications</h2>
                        </div>

                        <div className="glass-panel" style={{ padding: '2.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {certs.map((cert, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        style={{
                                            paddingBottom: i !== certs.length - 1 ? '1.5rem' : '0',
                                            borderBottom: i !== certs.length - 1 ? '1px solid var(--border-light)' : 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem'
                                        }}
                                    >
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}></div>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
                                "I hereby declare that the information provided is true and correct to the best of my knowledge."
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>
            <style>{`
        @media (min-width: 992px) {
          .edu-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Education;
