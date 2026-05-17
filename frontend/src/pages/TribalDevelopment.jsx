import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { renderText } from './Education';

import tribalImpact from '../assets/tribla1.jpg';
import tribalHeroNew from '../assets/TRIBAL2.jpg';

// Using public asset path for the hero image
const tribalHero = "/tribal_development_hero.png";

const TribalDevelopment = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    // Extract the numerical part (e.g., "2,500" from "2,500+")
    const endValue = parseInt(value.replace(/,/g, '').replace(/\+/g, ''));
    const isPlus = value.includes('+');

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.1 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!hasStarted) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * endValue));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [hasStarted, endValue, duration]);

    return (
      <span ref={countRef}>
        {count.toLocaleString()}{isPlus ? '+' : ''}
      </span>
    );
  };

  // 3D Card Component with mouse tracking
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

    const handleMouseEnter = () => setIsHovered(true);

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
          height: '100%'
        }}
      >
        {children}
      </div>
    );
  };

  const animations = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const initiatives = [
    {
      title: "Free Tribal Education",
      description: "Breaking barriers by providing 100% free quality education, learning kits, and digital tools to students from remote tribal hamlets.",
      details: ["Zero-Fee Schooling", "Free Learning Kits", "Digital Literacy"],
      icon: "🎓",
    },
    {
      title: "Residential Facilities",
      description: "Safe, supportive, and hygienic hostel facilities for students to ensure they can pursue education without long-distance travel hurdles.",
      details: ["Safe Hostels", "Nutritional Support", "Safe Environment"],
      icon: "🏢",
    },
    {
      title: "Women's Self-Help Groups",
      description: "Empowering tribal women through financial literacy, micro-savings, and skill development for independent livelihoods.",
      details: ["Micro-Finance", "Handicraft Training", "Leadership Workshops"],
      icon: "👥",
    },

  ];

  const stats = [
    { number: "2,500+", label: "Students Educated Free" },
    { number: "50+", label: "Tribal Hamlets Supported" },
    { number: "15+", label: "Safe Hostels Built" },
    { number: "10,000+", label: "Healthy Meals Served" }
  ];

  return (
    <div className="tribal-development-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <style>{animations}</style>

      {/* Premium Hero Section */}
      <section style={{
        padding: '7rem 5% 4rem',
        background: 'linear-gradient(to right, #fdf8f5 0%, #f3ede8 100%)',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '4rem',
        minHeight: '70vh'
      }}>
        <div style={{ flex: '1.2', minWidth: '350px' }}>
          <h2 style={{
            fontSize: '1.1rem',
            color: '#795548',
            fontWeight: '900',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            {renderText("BK Education and Welfare Society")}
          </h2>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            color: '#1a1a1a',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>
            Preserving Heritage. <br />
            <span style={{ color: '#795548' }}>Empowering</span> Communities.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#555',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '3rem'
          }}>
            At BK Education and Welfare Society, we believe that education is the ultimate equalizer. We provide <strong>100% free education, residential facilities, and nutritional support</strong> to tribal students, ensuring they have the foundation to build a prosperous future.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ borderLeft: '4px solid #795548', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '800' }}>Sustainable Growth</h4>
              <p style={{ margin: 0, color: '#666' }}>Rooted in tradition</p>
            </div>
          </div>
        </div>
        <div style={{
          flex: '1',
          position: 'relative',
          minWidth: windowWidth < 768 ? '100%' : '400px',
          minHeight: windowWidth < 768 ? '450px' : '550px',
          marginTop: windowWidth < 768 ? '2rem' : '0'
        }}>
          {/* Top-Left Dotted Pattern */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '10%',
            width: '120px',
            height: '100px',
            backgroundImage: 'radial-gradient(#ccc 2px, transparent 2px)',
            backgroundSize: '15px 15px',
            zIndex: 0,
            opacity: 0.5
          }} />

          {/* Background Decorative Circle */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(121, 85, 72, 0.05) 0%, transparent 70%)',
            zIndex: 0
          }} />

          {/* Main Image */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '0',
            width: '90%',
            height: '85%',
            zIndex: 2,
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.1)',
            animation: 'fadeInUp 1s ease both'
          }}>
            <img src={tribalHeroNew} alt="Tribal Development Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>

          {/* Secondary Floating Image */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '-10%',
            width: '50%',
            height: '40%',
            zIndex: 3,
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            border: '4px solid #fff',
            animation: 'fadeInUp 1.2s ease both',
            animationDelay: '0.3s'
          }}>
            <img src={tribalImpact} alt="Tribal Impact" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 5%', background: '#795548', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '0.5rem', color: '#e8dbd1' }}>
                <AnimatedCounter value={stat.number} />
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Initiatives Grid */}
      <section style={{ padding: '8rem 5% 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: '2.8rem', 
                fontWeight: '900', 
                color: '#795548', 
                marginBottom: '1.5rem',
                textShadow: '1px 1px 0px #ccc, 2px 2px 0px #bbb, 3px 3px 0px #aaa, 4px 4px 0px #999, 5px 5px 10px rgba(0,0,0,0.1)'
              }}
            >
              Core Development Areas
            </motion.h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Our multifaceted approach ensures comprehensive development for tribal communities, from healthcare access to economic independence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {initiatives.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Interactive3DCard intensity={10} scale={1.03}>
                  <div style={{
                    background: '#fff',
                    borderRadius: '32px',
                    padding: '3rem 2.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
                    border: '1px solid #f0f0f0',
                    transition: 'border-color 0.4s ease',
                    textAlign: 'center',
                    height: '100%',
                    transformStyle: 'preserve-3d'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#795548';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f0f0f0';
                    }}
                  >
                    {item.image ? (
                      <div style={{
                        width: '100%',
                        height: '200px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        marginBottom: '1.5rem',
                        transform: 'translateZ(20px)'
                      }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ) : (
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1.5rem',
                        display: 'inline-block',
                        background: '#f3ede8',
                        width: '80px',
                        height: '80px',
                        lineHeight: '80px',
                        borderRadius: '20px',
                        transform: 'translateZ(30px)'
                      }}>{item.icon}</div>
                    )}
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.2rem', color: '#1a1a1a', transform: 'translateZ(25px)' }}>{item.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem', transform: 'translateZ(15px)' }}>{item.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', transform: 'translateZ(10px)' }}>
                      {item.details.map((detail, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.8rem', fontWeight: '700', color: '#795548',
                          background: '#f3ede8', padding: '0.4rem 1rem', borderRadius: '15px'
                        }}>{detail}</span>
                      ))}
                    </div>
                  </div>
                </Interactive3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Connection Section */}
      <section style={{ padding: '4rem 5% 8rem', background: '#fafafa' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: windowWidth < 992 ? 'column' : 'row',
          alignItems: 'center',
          gap: '5rem'
        }}>
          <div style={{ flex: '1', order: windowWidth < 992 ? 2 : 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '2rem' }}>Community Connection</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our work goes beyond simple aid; it's about building lasting relationships with the tribal communities we serve. By living and working alongside them, we understand their unique challenges and aspirations.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              This direct engagement allows us to tailor our programs to their specific cultural context, ensuring that development is both sustainable and respectful of their ancestral traditions.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#795548', marginBottom: '0.5rem' }}>Grassroots Focus</h4>
                <p style={{ color: '#777', margin: 0 }}>Direct community involvement</p>
              </div>
              <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#795548', marginBottom: '0.5rem' }}>Holistic Growth</h4>
                <p style={{ color: '#777', margin: 0 }}>Social & Economic empowerment</p>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            order: 1,
            position: 'relative',
            width: '100%'
          }}>
            <div style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              transform: 'rotate(-2deg)',
              transition: 'all 0.5s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg) scale(1)'}
            >
              <img src={tribalImpact} alt="Community Interaction" style={{ width: '100%', display: 'block' }} />
            </div>
            {/* Decorative accent */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '150px',
              height: '150px',
              background: '#795548',
              borderRadius: '24px',
              zIndex: -1,
              opacity: 0.1
            }} />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{
        padding: '6rem 5%',
        background: 'linear-gradient(135deg, #fdf8f5 0%, #f3ede8 100%)',
        color: '#1a1a1a',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '5rem', color: '#795548', lineHeight: '1', display: 'block', marginBottom: '0.5rem' }}>&ldquo;</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.4', color: '#2e3440' }}>
            True development honors the roots while nourishing the branches. We walk alongside our tribal communities towards a brighter, self-reliant future.
          </h2>
          <div style={{ width: '50px', height: '4px', background: '#795548', margin: '0 auto 2rem' }}></div>
          <p style={{ fontSize: '1rem', color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>BK Education and Welfare Society</p>
        </div>
      </section>
    </div>
  );
};

export default TribalDevelopment;
