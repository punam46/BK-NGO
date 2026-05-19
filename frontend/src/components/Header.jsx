import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Menu, X, Shield, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null); // Track which sub-menu is open on mobile
  const [showBanner, setShowBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileSub(null);
  };

  const isMobile = windowWidth <= 768;

  return (
    <>
      <motion.header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: scrolled ? 0 : 5, 
          opacity: 1,
          scale: 1
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20 
        }}
      >
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeMenu} style={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: isMobile ? '8px' : '20px'
          }}>
            <motion.div 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}
              whileHover={{ rotateY: 15, rotateX: -5 }}
            >
              <img src={logo} alt="BK Logo" style={{ 
                width: isMobile ? '35px' : (scrolled ? '55px' : '70px'), 
                height: isMobile ? '35px' : (scrolled ? '55px' : '70px'), 
                objectFit: 'cover', 
                borderRadius: '12px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                border: '1px solid #eee',
                transition: 'all 0.3s ease'
              }} />
              {!scrolled && !isMobile && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: '0.75rem', fontWeight: '800', color: '#666' }}
                >
                  Reg No: <span style={{ color: '#f57c00' }}>F-12121</span>
                </motion.span>
              )}
            </motion.div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontSize: isMobile ? '0.85rem' : (scrolled ? '1.2rem' : '1.6rem'), 
                fontWeight: '900', 
                color: '#1a1a1a', 
                letterSpacing: '-0.5px', 
                lineHeight: '1.2',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap' /* Keep title in one line */
              }}>
                <span style={{ color: '#e53935' }}>BK</span> Educational & Welfare Society
              </span>
            </div>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Home</NavLink>
          
          <div className={`nav-item-dropdown ${activeMobileSub === 'about' ? 'active-mobile' : ''}`}>
            <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'about' ? null : 'about')}>
              <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => closeMenu()}>
                About Us <ChevronDown size={14} className="chevron" />
              </NavLink>
            </div>
            <div className="dropdown-menu">
              <Link to="/about/tarl" className="dropdown-item" onClick={closeMenu}>Teaching at Right Level</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileSub === 'programs' ? 'active-mobile' : ''}`}>
            <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'programs' ? null : 'programs')}>
              <NavLink to="/programs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => closeMenu()}>
                Programs <ChevronDown size={14} className="chevron" />
              </NavLink>
            </div>
            <div className="dropdown-menu">
              <Link to="/programs/education" className="dropdown-item" onClick={closeMenu}>Education</Link>
              <Link to="/programs/social-welfare" className="dropdown-item" onClick={closeMenu}>Social Welfare</Link>
              <Link to="/programs/tribal-development" className="dropdown-item" onClick={closeMenu}>Tribal Development</Link>
              <Link to="/programs/child-development" className="dropdown-item" onClick={closeMenu}>Child Development</Link>
              <Link to="/programs/woman-empowerment" className="dropdown-item" onClick={closeMenu}>Woman Empowerment</Link>
              <Link to="/programs/orphan-support" className="dropdown-item" onClick={closeMenu}>Orphan Support</Link>
              <Link to="/programs/rural-development" className="dropdown-item" onClick={closeMenu}>Rural Development</Link>
              <Link to="/programs/disability-affair" className="dropdown-item" onClick={closeMenu}>Disability Affairs</Link>
              <Link to="/programs/yoga" className="dropdown-item" onClick={closeMenu}>Yoga</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileSub === 'involved' ? 'active-mobile' : ''}`}>
            <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'involved' ? null : 'involved')}>
              <span className="nav-item">Get Involved <ChevronDown size={14} className="chevron" /></span>
            </div>
            <div className="dropdown-menu">
              <Link to="/involved" className="dropdown-item" onClick={closeMenu}>Volunteer</Link>
              <Link to="/donate" className="dropdown-item" onClick={closeMenu}>Donate Now</Link>
              <Link to="/involved/upcoming-events" className="dropdown-item" onClick={closeMenu}>Upcoming Events</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileSub === 'resources' ? 'active-mobile' : ''}`}>
            <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'resources' ? null : 'resources')}>
              <span className="nav-item">Resources <ChevronDown size={14} className="chevron" /></span>
            </div>
            <div className="dropdown-menu">
              <Link to="/photo-gallery" className="dropdown-item" onClick={closeMenu}>Photo Gallery</Link>
              <Link to="/programs/media" className="dropdown-item" onClick={closeMenu}>Media & Publications</Link>
              <Link to="/certifications" className="dropdown-item" onClick={closeMenu}>Certifications</Link>
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="header-right desktop-only" style={{ display: 'flex', alignItems: 'center', gap: scrolled ? '1rem' : '1.5rem', flexShrink: 0 }}>
          <Link to="/donate" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.05, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#e53935',
                color: '#fff',
                padding: scrolled ? '0.6rem 1.2rem' : '0.8rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '800',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                boxShadow: '0 10px 20px rgba(229, 57, 53, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              Donate
            </motion.button>
          </Link>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
