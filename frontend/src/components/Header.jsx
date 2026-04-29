import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null); // Track which sub-menu is open on mobile

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileSub(null);
  };

  return (
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
            boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1), inset 0 -4px 0 rgba(0,0,0,0.1)',
            transform: 'perspective(1000px) rotateX(8deg) rotateY(-8deg)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            border: '1px solid rgba(255,255,255,0.4)',
            cursor: 'pointer'
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(-8deg)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1), inset 0 -4px 0 rgba(0,0,0,0.1)';
          }}
          />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Main Navigation Menu */}
      <nav className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
        {/* Mobile Close Button (Inside Menu) */}


        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          Home
        </NavLink>

        {/* About Us Dropdown */}
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

        {/* Programs Dropdown */}
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
            <Link to="/programs/disability-affair" className="dropdown-item" onClick={closeMenu}>Disability Affair</Link>
            <Link to="/programs/child-development" className="dropdown-item" onClick={closeMenu}>Child Development</Link>

            <Link to="/programs/rural-development" className="dropdown-item" onClick={closeMenu}>Rural Development</Link>
          </div>
        </div>

        {/* Get Involved Dropdown */}
        <div className={`nav-item-dropdown ${activeMobileSub === 'involved' ? 'active-mobile' : ''}`}>
          <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'involved' ? null : 'involved')}>
            <NavLink to="/involved" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => closeMenu()}>
              Get Involved <ChevronDown size={14} className="chevron" />
            </NavLink>
          </div>
          <div className="dropdown-menu">
            <Link to="/involved" className="dropdown-item" onClick={closeMenu}>Volunteer</Link>
            <Link to="/donate" className="dropdown-item" onClick={closeMenu}>Donate Now</Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className={`nav-item-dropdown ${activeMobileSub === 'resources' ? 'active-mobile' : ''}`}>
          <div className="nav-item-wrapper" onClick={() => setActiveMobileSub(activeMobileSub === 'resources' ? null : 'resources')}>
            <NavLink to="/resources" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => closeMenu()}>
              Resources <ChevronDown size={14} className="chevron" />
            </NavLink>
          </div>
          <div className="dropdown-menu">
            <Link to="/photo-gallery" className="dropdown-item" onClick={closeMenu}>Photo Gallery</Link>
            <Link to="/programs/media" className="dropdown-item" onClick={closeMenu}>Media & Publications</Link>
            <Link to="/certifications" className="dropdown-item" onClick={closeMenu}>Certifications</Link>
          </div>
        </div>

        <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          Contact
        </NavLink>
        
        {/* Mobile-only Action Button */}
        <div className="mobile-only" style={{ marginTop: '2rem' }}>
          <Link to="/donate" className="donate-btn" style={{ display: 'block', textAlign: 'center', background: '#e53935' }} onClick={closeMenu}>
            DONATE NOW
          </Link>
        </div>
      </nav>

      <div className="header-right desktop-only">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61581568062602" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/112511315/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@bktimesnews" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
          <a href="https://www.instagram.com/bk_groupofeducation/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>

        </div>
        <div style={{ display: 'flex' }}>
          <Link to="/donate" className="donate-btn" style={{ textDecoration: 'none', textAlign: 'center', background: '#e53935' }}>Donate Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
