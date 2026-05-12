import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, Shield, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null); // Track which sub-menu is open on mobile
  const [showBanner, setShowBanner] = useState(true);

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

  return (
    <>
      <div style={{
        background: '#1a1a1a',
        padding: '10px 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '900', letterSpacing: '1px' }}>
            REG NO: <span style={{ color: '#ffcc00' }}>F-12121</span>
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#888', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '1px' }}>
            WE ARE REGISTERED WITH
          </span>
          <div style={{ 
            background: '#ffcc00', 
            padding: '8px 20px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            boxShadow: '0 4px 15px rgba(255,204,0,0.2)'
          }}>
            <Shield size={18} fill="#1a1a1a" color="#1a1a1a" />
            <span style={{ color: '#1a1a1a', fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.5px' }}>
              GOVERNMENT REGISTERED
            </span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeMenu} style={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
            <img src={logo} alt="BK Logo" style={{ 
              width: '80px', 
              height: '80px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              border: '1px solid #eee'
            }} />
            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.1' }}>
                <span style={{ color: '#e53935' }}>BK</span> Educational
              </span>
              <span style={{ fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '700' }}>& Welfare Society</span>
              <span style={{ fontSize: '0.75rem', color: '#1a1a1a', fontWeight: '800', marginTop: '3px' }}>
                REG NO: <span style={{ color: '#f57c00' }}>F-12121</span>
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
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileSub === 'involved' ? 'active-mobile' : ''}`}>
            <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'involved' ? null : 'involved')}>
              <span className="nav-item">Get Involved <ChevronDown size={14} className="chevron" /></span>
            </div>
            <div className="dropdown-menu">
              <Link to="/involved" className="dropdown-item" onClick={closeMenu}>Volunteer</Link>
              <Link to="/donate" className="dropdown-item" onClick={closeMenu}>Donate Now</Link>
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

        <div className="header-right desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="social-icons" style={{ display: 'flex', gap: '0.8rem' }}>
            <a href="#" className="social-icon" style={{ color: '#1a1a1a' }}><Facebook size={18} /></a>
            <a href="#" className="social-icon" style={{ color: '#1a1a1a' }}><Linkedin size={18} /></a>
            <a href="#" className="social-icon" style={{ color: '#1a1a1a' }}><Youtube size={18} /></a>
            <a href="#" className="social-icon" style={{ color: '#1a1a1a' }}><Instagram size={18} /></a>
          </div>
          <Link to="/donate" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#e53935',
              color: '#fff',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '800',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Donate Now</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
