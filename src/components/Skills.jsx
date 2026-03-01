import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Users, Languages, CheckCircle2, MessageSquare, Briefcase, Network } from 'lucide-react';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const programmingLanguages = [
        { name: 'Python', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3b82f6' },
        { name: 'C', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', color: '#6366f1' },
        { name: 'C++', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', color: '#0ea5e9' },
        { name: 'Java', level: 'Beginner', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#f59e0b' }
    ];

    const aiDataSkills = [
        { name: 'Machine Algorithms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
        { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
        { name: 'Python AI Libraries', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' }
    ];

    const dbDesignSkills = [
        { name: 'SQL', icon: <Database size={24} className="text-primary" /> },
        { name: 'NoSQL', icon: <Network size={24} className="text-secondary" /> },
        { name: 'UI / UX Design', icon: <Layout size={24} className="text-accent" /> }
    ];

    const softSkills = [
        { name: 'Communication', icon: <MessageSquare size={20} /> },
        { name: 'Leadership', icon: <Briefcase size={20} /> },
        { name: 'Teamwork & Collaboration', icon: <Users size={20} /> }
    ];

    const spokenLanguages = [
        { name: 'English', icon: <Languages size={20} /> },
        { name: 'Tamil', icon: <Languages size={20} /> }
    ];

    return (
        <section id="skills" className="section relative">
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        Technical Strengths
                    </span>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>
                        My <span className="gradient-text">Skills</span> Setup
                    </h2>
                </motion.div>

                <div className="skills-layout">

                    {/* Programming Languages */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="glass-panel" style={{ padding: '2rem', gridColumn: '1 / -1' }}>
                        <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '2rem' }}>Coding Languages</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {programmingLanguages.map((lang, idx) => (
                                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.4)" }} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}>
                                    <img src={lang.icon} alt={lang.name} style={{ width: '40px', height: '40px' }} />
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{lang.name}</h4>
                                        <span style={{ fontSize: '0.85rem', color: lang.color, fontWeight: 500 }}>{lang.level}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI / ML / Data */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="glass-panel glass-panel-hover" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>AI, ML & Tools</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {aiDataSkills.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={skill.icon} alt={skill.name} style={{ width: '24px', height: '24px' }} />
                                    </div>
                                    <span style={{ fontWeight: 500 }}>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* DB & Design */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="glass-panel glass-panel-hover" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Databases & Design</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {dbDesignSkills.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '36px', height: '36px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {skill.icon}
                                    </div>
                                    <span style={{ fontWeight: 500 }}>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Soft Skills & Languages */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#10b981' }}>Soft Skills</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {softSkills.map((skill, idx) => (
                                    <motion.div key={idx} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.5rem 1rem', borderRadius: '999px', color: '#10b981', fontSize: '0.9rem' }}>
                                        {skill.icon} {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#f59e0b' }}>Spoken Languages</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {spokenLanguages.map((skill, idx) => (
                                    <motion.div key={idx} variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '0.5rem 1rem', borderRadius: '999px', color: '#f59e0b', fontSize: '0.9rem' }}>
                                        {skill.icon} {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>

            <style>{`
        .skills-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .skills-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .skills-layout {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default Skills;
