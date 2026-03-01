import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Home, Bot, Cpu, ShieldAlert } from 'lucide-react';

const Projects = () => {
    const projectsList = [
        {
            id: 5,
            title: 'AI-Based Network Intrusion Detection System',
            role: 'Security & ML',
            description: 'Developed an intelligent system to detect and classify network intrusions using advanced Machine Learning algorithms.',
            icon: <ShieldAlert size={32} />,
            color: '#a855f7',
            github: 'https://github.com/Rubini-0729/AI-Based-Network-Intrusion-Detection-System.git',
            demo: null,
            tags: ['Machine Learning', 'Cybersecurity', 'Python', 'Classification']
        },
        {
            id: 1,
            title: 'Face Mask Detection',
            role: 'Live Alert System',
            description: 'Real-time detection using webcam stream; trained CNN for masked/unmasked classification; alerts on no-mask detection.',
            icon: <Activity size={32} />,
            color: '#ef4444',
            github: 'https://github.com/Rubini-0729/face-mask-detection-with-live-alert-system',
            demo: null,
            tags: ['CNN', 'OpenCV', 'Deep Learning', 'Python']
        },
        {
            id: 2,
            title: 'House Price Prediction',
            role: 'Machine Learning Models',
            description: 'Built regression models (Linear Regression / Decision Tree / Random Forest) with preprocessing, EDA, and evaluation.',
            icon: <Home size={32} />,
            color: '#3b82f6',
            github: 'https://github.com/Rubini-0729/House-price-prediction.git',
            demo: null,
            tags: ['Scikit-Learn', 'EDA', 'Regression', 'Pandas']
        },
        {
            id: 3,
            title: 'AI-Based Travel Agent',
            role: 'Cloud + AI Chatbot',
            description: 'Chatbot-style travel assistant: intent handling, personalized recommendations, cloud experiments and deployment testing.',
            icon: <Bot size={32} />,
            color: '#10b981',
            github: 'https://github.com/Rubini-0729/Travel_agent',
            demo: 'https://drive.google.com/file/d/1PLy0ENJ8is8KaQSZ2JUu5WCVMQJl_XPX/view?usp=drivesdk',
            tags: ['NLP', 'Cloud Deployment', 'Chatbot', 'Dialogflow']
        },
        {
            id: 4,
            title: 'Arduino Sensor Projects',
            role: 'Hardware Mini Projects',
            description: 'Obstacle detection + distance measurement and ambient-light automation with real-time LED responses.',
            icon: <Cpu size={32} />,
            color: '#f59e0b',
            github: 'https://github.com/Rubini-0729/Arduino_ultrasonic_LDR',
            demo: 'https://drive.google.com/file/d/1OqgYydQ_AB9g5Miu1ifQHshfYX4XX6aC/view?usp=drivesdk',
            tags: ['Arduino', 'IoT', 'C++', 'Sensors']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
    };

    return (
        <section id="projects" className="section relative">
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <span style={{
                        display: 'inline-block',
                        color: 'var(--secondary)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        Real Work
                    </span>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                boxShadow: `0 20px 40px -10px ${project.color}40`,
                                borderColor: `${project.color}80`
                            }}
                            className="glass-panel project-card"
                        >
                            <div
                                className="project-header"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`,
                                    padding: '2rem',
                                    borderBottom: '1px solid var(--border-light)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    style={{ color: project.color }}
                                >
                                    {project.icon}
                                </motion.div>

                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {project.github && (
                                        <motion.a whileHover={{ scale: 1.15, backgroundColor: project.color, color: '#fff' }} href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Source Code">
                                            <Github size={20} />
                                        </motion.a>
                                    )}
                                    {project.demo && (
                                        <motion.a whileHover={{ scale: 1.15, backgroundColor: project.color, color: '#fff' }} href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <span style={{ fontSize: '0.85rem', color: project.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.role}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0 1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '0.2rem 0.8rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '999px',
                                                color: 'var(--text-main)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .project-link {
          color: var(--text-muted);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
        </section>
    );
};

export default Projects;
