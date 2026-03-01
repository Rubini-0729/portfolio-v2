import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent custom-header-noscroll'
      }`}
      style={{
        background: isScrolled ? 'rgba(15, 17, 21, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif' }}
          >
            <span className="gradient-text">Rubini</span> T
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.href} 
                  style={{ 
                    color: 'var(--text-main)', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle"
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'block' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{ 
              background: 'var(--bg-card)', 
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border-light)',
              overflow: 'hidden'
            }}
          >
            <ul style={{ listStyle: 'none', padding: '2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ 
                      color: 'var(--text-main)', 
                      textDecoration: 'none', 
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add CSS for desktop block */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-nav-toggle { display: none !important; }
        }
        .header-pad { padding-top: 24px; padding-bottom: 24px; }
        .header-scrolled { padding-top: 16px; padding-bottom: 16px; }
      `}</style>
    </header>
  );
};

export default Header;
