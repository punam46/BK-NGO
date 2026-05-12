import React, { useEffect, useState, useRef } from 'react';
import { renderText } from './Education';
import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';

const Yoga = () => {
  const [scrollY, setScrollY] = useState(0);
  const [breathingStep, setBreathingStep] = useState('Inhale');
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Breathing Animation Cycle
  useEffect(() => {
    if (!isBreathing) return;
    const interval = setInterval(() => {
      setBreathingStep((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
    }, 4000);
    return () => clearInterval(interval);
  }, [isBreathing]);

  const animations = `
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.8); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }
    @keyframes breath {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.3); opacity: 1; }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(100px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes rotate3d {
      from { transform: perspective(1000px) rotateY(0deg); }
      to { transform: perspective(1000px) rotateY(360deg); }
    }
    .parallax-layer {
      transition: transform 0.1s ease-out;
    }
    .tilt-card {
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
    }
    .tilt-card:hover {
      transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02);
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    }
    .floating-shape {
      position: absolute;
      background: linear-gradient(45deg, rgba(255, 204, 0, 0.2), rgba(255, 255, 255, 0.05));
      border-radius: 50%;
      filter: blur(40px);
      z-index: 1;
      pointer-events: none;
    }
  `;

  const initiatives = [
    {
      title: "Mindfulness & Meditation",
      description: "We bring the ancient wisdom of meditation to rural communities, helping individuals manage stress, improve focus, and find inner peace.",
      details: ["Guided Meditation", "Stress Management", "Mental Clarity"],
      icon: "🧘",
      image: yogaMeditationImg,
      color: "#4db6ac"
    },
    {
      title: "Community Yoga Sessions",
      description: "Our weekly yoga classes in villages promote physical health, flexibility, and a sense of togetherness. Wellness is a collective journey.",
      details: ["Village Workshops", "Physical Wellness", "Social Connection"],
      icon: "🤝",
      image: yogaCommunityImg,
      color: "#ffd54f"
    },
    {
      title: "Holistic Health Education",
      description: "Educating rural families about the importance of breathing techniques, balanced diet, and natural lifestyle choices.",
      details: ["Pranayama Practice", "Natural Living", "Health Awareness"],
      icon: "🌿",
      image: yogaHeroImg,
      color: "#81c784"
    }
  ];

  return (
    <div className="yoga-page" style={{ background: '#050a10', color: '#fff', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{animations}</style>

      {/* 3D Floating Shapes Background */}
      <div className="floating-shape" style={{ width: '400px', height: '400px', top: '10%', left: '-5%', animation: 'float 8s infinite ease-in-out' }}></div>
      <div className="floating-shape" style={{ width: '300px', height: '300px', bottom: '20%', right: '-5%', animation: 'float 12s infinite ease-in-out reverse' }}></div>
      <div className="floating-shape" style={{ width: '200px', height: '200px', top: '50%', left: '40%', animation: 'float 10s infinite ease-in-out', opacity: 0.3 }}></div>

      {/* Advanced 3D Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 5%',
        perspective: '2000px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(5, 10, 16, 0.4), rgba(5, 10, 16, 0.9)), url(${yogaHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.2}px)`,
          zIndex: 0
        }}></div>

        <div style={{ 
          zIndex: 2, 
          textAlign: 'center', 
          maxWidth: '1000px',
          transform: `translateY(${scrollY * -0.1}px)`
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 204, 0, 0.1)',
            padding: '8px 24px',
            borderRadius: '100px',
            border: '1px solid rgba(255, 204, 0, 0.3)',
            marginBottom: '2rem',
            animation: 'slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <span style={{ fontSize: '0.9rem', color: '#ffcc00', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase' }}>
              Transformative Wellness
            </span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
            fontWeight: '900', 
            lineHeight: '0.9',
            marginBottom: '3rem',
            letterSpacing: '-2px',
            animation: 'slideInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
          }}>
            Find Your <span style={{ 
              color: '#ffcc00',
              textShadow: '0 0 40px rgba(255, 204, 0, 0.4)'
            }}>Inner Peace</span>.
          </h1>

          <p style={{ 
            fontSize: '1.4rem', 
            color: '#ccc', 
            maxWidth: '700px', 
            margin: '0 auto 4rem',
            lineHeight: '1.6',
            animation: 'slideInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both'
          }}>
            We integrate ancient yogic wisdom with modern community welfare to create a holistic balance for India's rural heartland.
          </p>

          <div style={{ animation: 'slideInUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both' }}>
            <button 
              onClick={() => {
                setIsBreathing(true);
                window.scrollTo({ top: document.getElementById('breathing-zone').offsetTop - 100, behavior: 'smooth' });
              }}
              style={{
                background: '#ffcc00',
                color: '#000',
                padding: '1.2rem 3rem',
                borderRadius: '100px',
                fontSize: '1.1rem',
                fontWeight: '900',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 20px 40px rgba(255, 204, 0, 0.3)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255, 204, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 204, 0, 0.3)';
              }}
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Floating 3D Stat Cards */}
        <div className="parallax-layer" style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          zIndex: 3,
          transform: `translate(${scrollY * -0.05}px, ${scrollY * -0.1}px)`
        }}>
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', textAlign: 'center', width: '220px' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffcc00', margin: 0 }}>5k+</h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Active Practitioners</p>
          </div>
        </div>
      </section>

      {/* Interactive 3D Benefits Section */}
      <section style={{ padding: '10rem 5%', background: '#050a10', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem' }}>Holistic Transformation</h2>
            <div style={{ width: '80px', height: '4px', background: '#ffcc00', margin: '0 auto' }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem' 
          }}>
            {initiatives.map((item, index) => (
              <div key={index} className="tilt-card" style={{
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '40px',
                padding: '3rem',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: `${item.color}22`, 
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  marginBottom: '2.5rem'
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: '1.7', marginBottom: '3rem' }}>{item.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {item.details.map((detail, idx) => (
                    <span key={idx} style={{ 
                      padding: '0.6rem 1.2rem', 
                      background: 'rgba(255,255,255,0.05)', 
                      borderRadius: '100px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: item.color
                    }}>
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Decorative 3D Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: item.color,
                  filter: 'blur(100px)',
                  opacity: 0.1,
                  zIndex: -1
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Breathing Zone (The "3D Element") */}
      <section id="breathing-zone" style={{ 
        padding: '10rem 5%', 
        background: '#0a1018', 
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh'
      }}>
        <div style={{ zIndex: 2 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '4rem' }}>Take a Moment to <span style={{ color: '#ffcc00' }}>Breathe</span>.</h2>
          
          <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
            {/* Outer Pulsing Ring */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              border: '2px solid rgba(255, 204, 0, 0.3)',
              borderRadius: '50%',
              animation: 'pulse-ring 4s infinite cubic-bezier(0.215, 0.61, 0.355, 1)'
            }}></div>

            {/* Inner Breathing Circle */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #ffcc00, #ff9800)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(255, 204, 0, 0.4)',
              animation: isBreathing ? 'breath 8s infinite ease-in-out' : 'none',
              cursor: 'pointer'
            }} onClick={() => setIsBreathing(!isBreathing)}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#000', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {isBreathing ? breathingStep : 'Click to Start'}
              </span>
            </div>
          </div>

          <p style={{ marginTop: '4rem', fontSize: '1.2rem', color: '#aaa', maxWidth: '600px' }}>
            Simple breathing exercises can significantly reduce cortisol levels and improve mental resilience. Follow the circle to find your rhythm.
          </p>
        </div>
      </section>

      {/* Cinematic End Banner with 3D Parallax */}
      <section style={{ 
        height: '80vh', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${yogaBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * -0.15}px)`,
          zIndex: 0
        }}></div>

        <div style={{ zIndex: 1, padding: '0 5%' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', marginBottom: '3rem', lineHeight: '1.1' }}>
            Every Breath is a <span style={{ color: '#ffcc00' }}>New Beginning</span>.
          </h2>
          <div style={{ 
            width: '120px', 
            height: '2px', 
            background: 'rgba(255,204,0,0.5)', 
            margin: '0 auto 4rem' 
          }}></div>
          <button style={{
            background: 'transparent',
            color: '#fff',
            padding: '1.2rem 3.5rem',
            borderRadius: '100px',
            fontSize: '1rem',
            fontWeight: '800',
            border: '2px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          >
            Join Our Mission
          </button>
        </div>
      </section>
    </div>
  );
};

export default Yoga;
