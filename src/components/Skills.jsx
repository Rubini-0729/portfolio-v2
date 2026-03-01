import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, ScanFace, Cloud, Layout, Users, Languages } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <Code2 size={24} className="text-primary" />,
            desc: 'Comfortable with problem solving, scripting, and building end-to-end mini projects.',
            color: '#6366f1' // Primary
        },
        {
            title: 'Data Science',
            icon: <Database size={24} className="text-secondary" />,
            desc: 'Hands-on practice with exploratory analysis, preparation, and meaningful insights.',
            color: '#ec4899' // Secondary
        },
        {
            title: 'Machine Learning',
            icon: <BrainCircuit size={24} className="text-accent" />,
            desc: 'Model training, evaluation, and iteration focused on accuracy and reliability.',
            color: '#8b5cf6' // Accent
        },
        {
            title: 'Deep Learning / CV',
            icon: <ScanFace size={24} style={{ color: '#0ea5e9' }} />,
            desc: 'Built a real-time Face Mask Detection system with webcam inference and alerts.',
            color: '#0ea5e9'
        },
        {
            title: 'Cloud & Platforms',
            icon: <Cloud size={24} style={{ color: '#10b981' }} />,
            desc: 'Exposure through internships and experiments (chatbots, model tooling).',
            color: '#10b981'
        },
        {
            title: 'Dev + Design',
            icon: <Layout size={24} style={{ color: '#f59e0b' }} />,
            desc: 'Able to present work clearly with clean interfaces and good documentation.',
            color: '#f59e0b'
        },
        {
            title: 'Soft Skills',
            icon: <Users size={24} style={{ color: '#f43f5e' }} />,
            desc: 'Strong learning mindset; comfortable presenting and collaborating.',
            color: '#f43f5e'
        },
        {
            title: 'Languages',
            icon: <Languages size={24} style={{ color: '#8b5cf6' }} />,
            desc: 'Clear communication for teamwork and reporting.',
            color: '#8b5cf6'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section id="skills" className="section relative">
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{
                        display: 'block',
                        textAlign: 'center',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        Technical Strengths
                    </span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span> Setup
                    </h2>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel glass-panel-hover"
                            variants={itemVariants}
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
                        >
                            <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.15)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: skill.color,
                                    marginBottom: '1rem'
                                }}
                            >
                                {React.cloneElement(skill.icon, { color: skill.color })}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{skill.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
        </section>
    );
};

export default Skills;
