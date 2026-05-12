import React, { useEffect, useState } from 'react';
import { renderText } from './Education';
import { motion, useScroll, useTransform } from 'framer-motion';

import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';

const Yoga = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingStep, setBreathingStep] = useState('Inhale');
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacityRange = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    if (!isBreathing) return;
    const interval = setInterval(() => {
      setBreathingStep((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
    }, 4000);
    return () => clearInterval(interval);
  }, [isBreathing]);

  const initiatives = [
    {
      title: "Mindfulness & Meditation",
      description: "Cultivating mental resilience and emotional stability through guided contemplative practices for rural youth and elders.",
      icon: "🧘",
      image: yogaMeditationImg,
      color: "#ff8a65"
    },
    {
      title: "Village Yoga Drives",
      description: "Scaling physical wellness across remote districts with community-led yoga workshops and health awareness.",
      icon: "🌳",
      image: yogaCommunityImg,
      color: "#4db6ac"
    },
    {
      title: "Holistic Health",
      description: "Bridging the gap between traditional Ayurveda and modern lifestyle through conscious movement and nutrition.",
      icon: "🌿",
      image: yogaHeroImg,
      color: "#81c784"
    }
  ];

  const animations = `
    .light-gradient-bg {
      background: linear-gradient(135deg, #ffffff 0%, #f7f9fc 50%, #f0f4f8 100%);
    }
    .hero-photo-container {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .floating-photo {
      position: absolute;
      border-radius: 20px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.1);
      border: 8px solid #fff;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .floating-photo:hover {
      transform: scale(1.05) rotate(2deg);
      z-index: 10;
    }
    .text-reveal {
      background: linear-gradient(to right, #1a1a1a, #444);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .glass-card-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 20px 40px rgba(0,0,0,0.03);
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.8); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }
  `;

  return (
    <div className="yoga-page light-gradient-bg" style={{ color: '#1a1a1a', minHeight: '200vh', overflow: 'hidden' }}>
      <style>{animations}</style>
      
      {/* Photo-Based Hero Section */}
      <section className="hero-photo-container">
        {/* Main Hero Image with Mask */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 1,
            opacity: 0.6
          }}
        >
          <img src={yogaBannerImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #fff, transparent, #fff)' }}></div>
        </motion.div>

        {/* Floating Accent Photos */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="floating-photo" 
          style={{ width: '300px', height: '400px', left: '10%', top: '15%', transform: 'rotate(-5deg)' }}
        >
          <img src={yogaMeditationImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="floating-photo" 
          style={{ width: '250px', height: '350px', right: '12%', bottom: '20%', transform: 'rotate(8deg)' }}
        >
          <img src={yogaCommunityImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ 
            position: 'relative', 
            zIndex: 2, 
            textAlign: 'center',
            padding: '0 5%',
            opacity: opacityRange
          }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ 
              color: '#f57c00', 
              fontWeight: '900', 
              letterSpacing: '10px', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '2rem'
            }}>
              Pure Consciousness
            </span>
            <h1 className="text-reveal" style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', 
              fontWeight: '900', 
              lineHeight: '0.9', 
              margin: '0 0 3rem',
              letterSpacing: '-4px'
            }}>
              THE ART <br /> OF <span style={{ color: '#ffcc00' }}>BEING</span>.
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              maxWidth: '650px', 
              margin: '0 auto', 
              color: '#555',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Discover serenity through a visual journey of wellness and community impact. Every image tells a story of transformation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Photo Grid Section */}
      <section style={{ padding: '8rem 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Moments of Zen</h2>
            <p style={{ fontSize: '1.2rem', color: '#777', maxWidth: '600px', margin: '0 auto' }}>
              A glimpse into our yoga sessions and the lives they touch across rural India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[yogaHeroImg, yogaMeditationImg, yogaCommunityImg, yogaBannerImg].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ height: '400px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breathing Experience - Still Interactive but simplified */}
      <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f9fc', position: 'relative' }}>
        <div style={{ zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '5rem', letterSpacing: '15px', color: '#888' }}>ALIGN WITH LIFE.</h2>
          <motion.div 
            animate={{ scale: isBreathing ? (breathingStep === 'Inhale' ? 1.3 : 0.9) : 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ 
              width: '350px', 
              height: '350px', 
              background: 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, transparent 75%)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => setIsBreathing(!isBreathing)}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid #ffcc00',
              borderRadius: '50%',
              animation: isBreathing ? 'none' : 'pulse-ring 2s infinite'
            }}></div>
            <div className="glass-card-light" style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a1a1a',
              fontWeight: '900',
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              border: '1px solid #ffcc00',
              flexDirection: 'column'
            }}>
              <span>{isBreathing ? breathingStep : 'Start'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Cards */}
      <section style={{ padding: '10rem 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8rem' }}>Initiatives for Life</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {initiatives.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -15 }}
                style={{
                  background: '#fcfcfc',
                  borderRadius: '40px',
                  padding: '3rem',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.7', marginBottom: '2.5rem' }}>{item.description}</p>
                <div style={{ height: '250px', borderRadius: '25px', overflow: 'hidden' }}>
                  <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '10rem 5%', 
        background: '#ffcc00', 
        textAlign: 'center',
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#000', fontWeight: '900', letterSpacing: '-2px', lineHeight: '1.1', marginBottom: '3rem' }}>
            JOIN OUR JOURNEY <br /> OF TRANSFORMATION
          </h2>
          <button style={{
            background: '#000',
            color: '#fff',
            padding: '1.5rem 4rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: '900',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Get Involved Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Yoga;
