import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Home, Bot, Cpu } from 'lucide-react';

const Projects = () => {
    const projectsList = [
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

    return (
        <section id="projects" className="section relative">
            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <span style={{
                        display: 'block',
                        textAlign: 'center',
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

                <div className="projects-grid">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel project-card"
                        >
                            <div
                                className="project-header"
                                style={{
                                    background: `linear-gradient(135deg, rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.2) 0%, transparent 100%)`,
                                    padding: '2rem',
                                    borderBottom: '1px solid var(--border-light)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div style={{ color: project.color }}>
                                    {project.icon}
                                </div>

                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Source Code">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <span style={{ fontSize: '0.85rem', color: project.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.role}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.8rem',
                                                padding: '0.2rem 0.8rem',
                                                background: 'rgba(255,255,255,0.05)',
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
                </div>

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
          transition: all 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.15);
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
        .project-link:hover {
          color: var(--text-main);
          background: var(--primary);
          transform: scale(1.1);
        }
      `}</style>
        </section>
    );
};

export default Projects;
