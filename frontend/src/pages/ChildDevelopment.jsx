import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, Users, School, Award, Heart, BookOpen, Music, Palette, Camera, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import creativityGif from '../assets/Creativity Comes From Within.gif';
import socialCommunicationGif from '../assets/Social Communication.gif';
import educationGif from '../assets/education new color scheme.gif';
import securityGif from '../assets/security.gif';
import supportGif from '../assets/support.gif';
import enjoyGif from '../assets/enjoy.gif';
import giphyGif from '../assets/giphy.gif';
import childCare1Jpg from '../assets/child care 1.jpg';
import childCareJpg from '../assets/child care.jpg';
import sanskarLogo from '../assets/sanskar.jpeg';
import gurukulLogo from '../assets/gurukul.jpeg';
import bkLogo from '../assets/logo.jpeg';

// 3D Card component for Schools
const Interactive3DCard = ({ children, intensity = 15, scale = 1.05 }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scale : 1})`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

const ChildDevelopment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const schoolData = [
    {
      name: "SANSKAR ENGLISH MEDIUM SCHOOL",
      info: "Providing high-quality English medium education to students from all walks of life.",
      image: sanskarLogo,
      link: "https://www.bksanskar.in/",
      isLogo: true
    },
    {
      name: "BK GURUKUL VIDYANIKETAN",
      info: "A traditional yet modern residential school focused on holistic development.",
      image: gurukulLogo,
      link: "https://bkgurukul.in/",
      isLogo: true
    }
  ];

  const offerings = [
    { title: "Education & Learning Support", icon: <img src={educationGif} style={{ width: '220px', height: '220px', objectFit: 'contain' }} />, color: "#ffc107" },
    { title: "Social Skills & Communication", icon: <img src={socialCommunicationGif} style={{ width: '220px', height: '220px', objectFit: 'contain' }} />, color: "#ffc107" },
    { title: "Creativity & Talent Enhancement", icon: <img src={creativityGif} style={{ width: '220px', height: '220px', objectFit: 'contain' }} />, color: "#ffc107" },
    { title: "Safety & Child Rights", icon: <img src={securityGif} style={{ width: '220px', height: '220px', objectFit: 'contain' }} />, color: "#ffc107" },
    { title: "Inclusive Support", icon: <img src={supportGif} style={{ width: '220px', height: '220px', objectFit: 'contain' }} />, color: "#ffc107" }
  ];

  return (
    <div style={{ background: '#fff', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HERO SECTION - Overhauled to match reference */}
      <section style={{ 
        padding: isMobile ? '6rem 5% 4rem' : '0 7%', 
        background: 'linear-gradient(to bottom, #e3f2fd, #ffffff)',
        position: 'relative',
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? '100vh' : 'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        
        {/* Sun */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: isMobile ? '2%' : '5%', right: isMobile ? '2%' : '5%', width: isMobile ? '120px' : '180px', height: isMobile ? '120px' : '180px', zIndex: 1 }}
        >
          <div style={{ width: isMobile ? '60px' : '90px', height: isMobile ? '60px' : '90px', background: '#ff9800', borderRadius: '50%', margin: isMobile ? '30px auto' : '45px auto', position: 'relative' }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute', top: '50%', left: '50%', width: isMobile ? '90px' : '140px', height: isMobile ? '6px' : '10px', 
                background: '#ffb74d', borderRadius: '5px',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`
              }}></div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Cloud System */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: i % 2 === 0 ? [-150, 150, -150] : [150, -150, 150],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 12 + i * 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              position: 'absolute', 
              top: `${5 + i * 10}%`, 
              left: `${(i * 12) % 85}%`, 
              width: `${200 + i * 60}px`, 
              height: `${80 + i * 25}px`, 
              background: '#ffffff', 
              borderRadius: '100px', 
              zIndex: 1, 
              filter: `blur(${25 + i * 5}px)`, 
              opacity: 0.6 + (i * 0.05) 
            }}
          />
        ))}

        {/* Rolling Hills */}
        <div style={{ position: 'absolute', bottom: isMobile ? '-50px' : '-100px', left: '-10%', width: isMobile ? '120%' : '70%', height: isMobile ? '300px' : '400px', background: '#aed581', borderRadius: '50% 50% 0 0', zIndex: 2, opacity: 0.9 }}></div>
        <div style={{ position: 'absolute', bottom: isMobile ? '-100px' : '-150px', left: isMobile ? '-10%' : '20%', width: '120%', height: isMobile ? '400px' : '500px', background: '#8bc34a', borderRadius: '50% 50% 0 0', zIndex: 1, opacity: 0.9 }}></div>

        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2rem' : '4rem', 
          alignItems: 'center', 
          position: 'relative', 
          zIndex: 10,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span style={{ color: '#8d6e63', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
              Welcome To Our School
            </span>
            <h1 style={{ 
              fontSize: isMobile ? '2.8rem' : 'clamp(3.5rem, 7vw, 5.5rem)', 
              fontWeight: 900, 
              color: '#3e2723', 
              lineHeight: 1.05,
              marginTop: '1.5rem',
              marginBottom: '2rem',
              textShadow: isMobile ? '2px 2px 0 rgba(0,0,0,0.1)' : '3px 3px 0px #fff, 6px 6px 0px rgba(0,0,0,0.05), 9px 9px 20px rgba(0,0,0,0.1)'
            }}>
              Make Your <span style={{ color: '#f4511e' }}>Children's</span><br />Life Special
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.25rem', 
              color: '#5d4037', 
              lineHeight: 1.8, 
              marginBottom: isMobile ? '2.5rem' : '4rem', 
              maxWidth: '600px', 
              margin: isMobile ? '0 auto 2.5rem' : '0 0 4rem',
              opacity: 0.9 
            }}>
              The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.
            </p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(244, 81, 30, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  background: '#f4511e', color: '#fff', padding: isMobile ? '1.2rem 2.5rem' : '1.5rem 3.5rem', 
                  borderRadius: '50px', fontWeight: 800, border: 'none', cursor: 'pointer',
                  fontSize: isMobile ? '1rem' : '1.1rem', transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('https://www.bksanskar.in/', '_blank')}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ 
              position: 'relative', 
              textAlign: isMobile ? 'center' : 'right', 
              top: isMobile ? '0' : '40px',
              marginTop: isMobile ? '2rem' : '0',
              zIndex: 10
            }}
          >
            {/* We use giphyGif for the final high-fidelity look */}
            <img 
              src={giphyGif} 
              alt="School Children" 
              style={{ 
                width: isMobile ? '100%' : '160%', 
                maxWidth: isMobile ? '500px' : '1400px', 
                position: 'relative', 
                right: isMobile ? '0' : '30%',
                zIndex: 10,
                maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                mixBlendMode: 'multiply',
                opacity: 1,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1)) saturate(1.1) contrast(1.1) brightness(1.05)'
              }} 
            />
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section style={{ padding: '8rem 7%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', height: '600px' }}>
            {/* Overlapping Circle Images */}
            <motion.div 
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'absolute', top: 0, left: '10%', width: '350px', height: '350px', borderRadius: '50%', border: '15px solid #fff', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 2 }}
            >
              <img src={childCare1Jpg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div 
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.5, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'absolute', bottom: '10%', left: 0, width: '250px', height: '250px', borderRadius: '50%', border: '12px solid #fff', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 3 }}
            >
              <img src={childCareJpg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'absolute', top: '45%', left: '45%', width: '200px', height: '200px', borderRadius: '50%', border: '10px solid #fff', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 1 }}
            >
              <img src="/child3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>

          <div>
            <span style={{ color: '#ff5252', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>About Us</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#1a1a1a', margin: '1.5rem 0 2rem' }}>Child Care Professional</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  style={{ display: 'flex', gap: '1.5rem' }}
                >
                  <div style={{ 
                    width: '60px', height: '60px', background: i === 1 ? '#ffb300' : i === 2 ? '#ff7043' : '#0097a7', 
                    borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                  }}>
                    <CheckCircle2 color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Individual attention in a small class setting</h4>
                    <p style={{ color: '#666', lineHeight: 1.6 }}>We ensure that every child receives personalized care tailored to their unique learning pace and personality.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFERING SECTION */}
      <section style={{ padding: '4rem 7% 8rem', background: '#fffaf0', textAlign: 'center' }}>
        <span style={{ color: '#ff5252', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Services</span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: 900, 
            color: '#1a1a1a', 
            margin: '1.5rem 0 4rem',
            textShadow: '2px 2px 0px #ffc107, 4px 4px 0px rgba(255,193,7,0.3), 6px 6px 0px rgba(0,0,0,0.05)',
            letterSpacing: '-1px'
          }}
        >
          What We Offer
        </motion.h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: '2.5rem', 
          maxWidth: '1400px', 
          margin: '0 auto',
          padding: '2rem 1rem 4rem',
          perspective: '2000px'
        }}>
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -200, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ 
                delay: i * 0.3, 
                duration: 1.2, 
                type: 'spring', 
                stiffness: 60, 
                damping: 15 
              }}
              whileHover={{ 
                y: -25, 
                rotateY: 5, 
                rotateX: -5,
                scale: 1.02,
                boxShadow: '0 40px 80px rgba(255, 193, 7, 0.15)',
              }}
              style={{
                background: '#fff', 
                padding: '4rem 2rem', 
                borderRadius: '40px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)', 
                position: 'relative',
                overflow: 'hidden',
                flex: '1 1 320px',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '520px',
                cursor: 'pointer',
                transformStyle: 'preserve-3d', // Enable 3D depth for children
                border: '1px solid rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ 
                width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem', position: 'relative'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.5rem', color: '#333' }}>{item.title}</h3>
              <div style={{ width: '40px', height: '4px', background: '#ffc107', margin: '0 auto', borderRadius: '2px' }}></div>
              
              {/* Decorative corner */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', background: item.color, opacity: 0.1, borderRadius: '40px 0 0 0' }}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. OUR SCHOOLS SECTION */}
      <section style={{ padding: isMobile ? '4rem 5%' : '6rem 7%', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#ff5252', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Our Network</span>
            <h2 style={{ 
              fontSize: isMobile ? '2.5rem' : '3.5rem', 
              fontWeight: '900', 
              color: '#1a1a1a', 
              marginTop: '1rem',
              marginBottom: '1rem',
              textShadow: '2px 2px 0px #fff, 4px 4px 0px rgba(0,0,0,0.05)'
            }}>
              OUR <span style={{ color: '#ff3b3b' }}>SCHOOLS</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#ffc107', margin: '0 auto' }}></div>
          </div>

          <style>{`
            .school-card-modern {
              background: #ffffff;
              border-radius: 20px;
              padding: 2.5rem 1.5rem;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              border: 3px solid #1a1a1a;
              box-shadow: 8px 8px 0px #1a1a1a;
              transition: all 0.2s ease;
              text-decoration: none;
              height: 100%;
              position: relative;
              overflow: hidden;
            }
            .school-card-modern:hover {
              transform: translate(4px, 4px);
              box-shadow: 0px 0px 0px #1a1a1a;
            }
            .school-logo-container {
              width: 140px;
              height: 140px;
              margin-bottom: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fff;
              border-radius: 50%;
              padding: 10px;
              border: 2px solid #1a1a1a;
              box-shadow: 4px 4px 0px #1a1a1a;
              z-index: 1;
            }
            .school-card-modern h3 {
              color: #1a1a1a;
              font-size: 1.2rem;
              font-weight: 900;
              margin-bottom: 1rem;
              z-index: 1;
              text-transform: uppercase;
            }
            .school-card-modern p {
              color: #333;
              font-size: 1rem;
              line-height: 1.6;
              margin-bottom: 2rem;
              z-index: 1;
              flex-grow: 1;
              font-weight: 500;
            }
            .visit-btn {
              padding: 0.8rem 2rem;
              background: #1a1a1a;
              color: #fff;
              font-weight: 800;
              text-transform: uppercase;
              font-size: 0.85rem;
              border-radius: 12px;
              border: none;
              transition: all 0.2s ease;
              box-shadow: 4px 4px 0px #ffc107;
            }
            .school-card-modern:hover .visit-btn {
              transform: translate(2px, 2px);
              box-shadow: 0px 0px 0px #ffc107;
            }
          `}</style>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {schoolData.map((school, idx) => (
              <Interactive3DCard key={idx} intensity={10} scale={1.03}>
                <a 
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="school-card-modern"
                >
                  <div className="school-logo-container">
                    <img src={school.image} alt={school.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3>{school.name}</h3>
                  <p>{school.info}</p>
                  <span className="visit-btn">Visit Website</span>
                </a>
              </Interactive3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & STATS */}
      <section style={{ padding: '8rem 7%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <div>
            <span style={{ color: '#ff5252', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Advantage</span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontWeight: 900, 
                color: '#1a1a1a', 
                margin: '1.5rem 0 4rem',
                textShadow: '2px 2px 0px rgba(255,140,66,0.2), 4px 4px 0px rgba(0,0,0,0.05)',
                lineHeight: 1.1
              }}
            >
              Why Choose Child Care
            </motion.h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              {[
                { count: "1500+", label: "Happy Child" },
                { count: "2000+", label: "Happy Customers" },
                { count: "3000+", label: "Google Review" },
                { count: "25+", label: "Office" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, translateZ: '20px' }}
                  style={{ borderLeft: '5px solid #ff8c42', paddingLeft: '1.5rem', transformStyle: 'preserve-3d' }}
                >
                  <h3 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1a1a1a', marginBottom: '0.5rem' }}>{stat.count}</h3>
                  <p style={{ color: '#666', fontWeight: 700, fontSize: '1.1rem' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', perspective: '1500px' }}>
            {/* Main Image with 3D Tilt */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
              style={{ 
                borderRadius: '40px', 
                overflow: 'hidden', 
                boxShadow: '0 50px 100px rgba(0,0,0,0.12)',
                transformStyle: 'preserve-3d',
                transition: { type: 'spring', stiffness: 100 }
              }}
            >
              <img src="/child_camera.png" alt="Child Cam" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
            
            {/* Floating Testimonial Cards with enhanced 3D depth */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, translateZ: '50px', zIndex: 10 }}
              style={{ 
                position: 'absolute', top: '5%', left: '-10%', 
                background: '#fff', padding: '1.2rem 1.8rem', 
                borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', 
                width: '280px', zIndex: 3,
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '12px' }}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #ff8c42' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem' }}>Sarah Johnson</div>
                  <div style={{ fontSize: '0.75rem', color: '#ff8c42', fontWeight: 600 }}>Happy Mother</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#444', fontStyle: 'italic', lineHeight: 1.5 }}>"The best care my child has ever received! Highly recommended."</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, translateZ: '50px', zIndex: 10 }}
              style={{ 
                position: 'absolute', bottom: '10%', right: '-8%', 
                background: '#fff', padding: '1.2rem 1.8rem', 
                borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', 
                width: '280px', zIndex: 3,
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '12px' }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #ff8c42' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem' }}>Mike Peters</div>
                  <div style={{ fontSize: '0.75rem', color: '#ff8c42', fontWeight: 600 }}>Grateful Father</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#444', fontStyle: 'italic', lineHeight: 1.5 }}>"Amazing environment and very professional staff."</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section style={{ padding: '6rem 7%', background: '#c62828', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Ready to Give Your Child the Best?</h2>
        <motion.button 
          whileHover={{ scale: 1.05, background: '#fff', color: '#c62828' }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            background: 'transparent', color: '#fff', padding: '1.2rem 3rem', 
            borderRadius: '50px', fontWeight: 700, border: '2px solid #fff', cursor: 'pointer' 
          }}
        >
          Enroll Now
        </motion.button>
      </section>

    </div>
  );
};

export default ChildDevelopment;
