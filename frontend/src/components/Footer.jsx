import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Column 1: Branding */}
        <div className="footer-col branding">
          <h3 className="footer-logo">
            <span style={{ color: '#e53935' }}>BK</span> EDUCATION AND WELFARE SOCIETY (NGO)
          </h3>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem', fontWeight: '800', letterSpacing: '0.5px', color: '#fff' }}>
            REGISTERED NO: F-12121
          </p>
          <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '1.5rem', color: '#fff', fontWeight: '500' }}>
            <div>REGISTRATION CERT NO: 27332222570P</div>
            <div>ENROLMENT CERT NO: 99594678152P</div>
          </div>
          <p className="footer-description">
            Dedicated to creating holistic community development through education, 
            social welfare, and environmental care. Together, we build a better tomorrow.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/bktimesngo/" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
            <a href="https://x.com/bktimes_nashik" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/bktimes_nashik/" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/company/bhagwan-kashinath-education-and-social-welfare-society/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
            <a href="https://www.youtube.com/@bktimes-nashik" target="_blank" rel="noopener noreferrer" className="social-link"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/donate">Donate Now</Link></li>
            <li><Link to="/involved">Get Involved</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div className="footer-col links">
          <h4 className="footer-title">Our Programs</h4>
          <ul>
            <li><Link to="/programs">Education Support</Link></li>
            <li><Link to="/programs">Social Welfare</Link></li>
            <li><Link to="/programs">Environmental Care</Link></li>
            <li><Link to="/programs">Healthcare Initiatives</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} />
            <span>2nd Floor, Gajanan Plaza, Nashik</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+91 88883 01363</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>bhagwan@bktimes.co.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} <span style={{ color: '#e53935', fontWeight: 600 }}>BK</span> Education and Welfare Society (NGO). All rights reserved.</p>
          </div>
          <div className="footer-views" style={{ 
            fontSize: '1rem', 
            background: 'rgba(255,255,255,0.05)', 
            padding: '0.4rem 1.2rem', 
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>Total Website Views:</span>
            <span style={{ color: '#ffd54f', fontWeight: '800', letterSpacing: '1px' }}>124,567</span>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
