import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { renderText } from './Education';
import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';
import yogaInstructorImg from '../assets/yoga_instructor.png';
import yogaGiphy from '../assets/Yoga.gif';
import enjoyGif from '../assets/enjoy.gif';
import creativityGif from '../assets/Creativity Comes From Within.gif';
import breathingGif from '../assets/Deep Breathing Meditation Animation.gif';
import yogaPosesVideo from '../assets/8AqW8zd7U12z6SeJJ9.webm';
import stretchingVideo from '../assets/dz3qitg2SOA5SlunJ3.webm';
import meditationVideo from '../assets/1Me8VR7912RO2k1Jeu.webm';
import relaxationVideo from '../assets/0neAdz31x259D4a8LW.webm';
import yogaBasicsFooterImg from '../assets/ChatGPT Image May 12, 2026, 04_36_55 PM.png';
import { Leaf, Wind, Heart, Zap, Award, Users, Play, X } from 'lucide-react';

const InteractiveCard = ({ children, style, hoverColor = '#ffcc00' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};



const Yoga = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [phase, setPhase] = useState('Inhale');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => prev === 'Inhale' ? 'Exhale' : 'Inhale');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);



  return (
    <div className="yoga-page" style={{ background: '#fff', color: '#1a1a1a', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Immersive Parallax Hero Section */}
      <section style={{ 
        height: '100vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <motion.div style={{ 
          position: 'absolute', 
          top: 0, left: 0, width: '100%', height: '120%',
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2), #fff), url(${yogaHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', padding: '0 20px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '1.2rem', 
              color: '#d4af37', 
              fontWeight: '900', 
              letterSpacing: '5px', 
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}>
            {renderText("BK Education and Welfare Society")}
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
            }}
            style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
              fontWeight: '900', 
              lineHeight: '0.9',
              marginBottom: '3rem',
              letterSpacing: '-2px',
              color: '#1a1a1a',
              transition: 'transform 0.1s ease-out',
              cursor: 'default',
              textShadow: `
                1px 1px 0px #ccc,
                2px 2px 0px #ccc,
                3px 3px 0px #ccc,
                4px 4px 0px #ccc,
                5px 5px 15px rgba(0,0,0,0.1)
              `
            }}>
            Breathe. <span style={{ color: '#d4af37' }}>Heal.</span> Grow.
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: '5px', background: '#d4af37', margin: '0 auto 3rem' }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ fontSize: '1.4rem', color: '#555', lineHeight: '1.6', fontWeight: '400', marginBottom: '3rem' }}>
            Empowering rural India through the ancient science of Yoga and holistic wellness.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => setActiveVideo('nQwO5gABZIs')}
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              color: '#d4af37',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              border: '2px solid #d4af37',
              fontSize: '1rem',
              fontWeight: '900',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 auto',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ background: '#d4af37', color: '#fff', scale: 1.05 }}
          >
            <Play size={20} fill="currentColor" /> WATCH IMPACT
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
          <div style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, #d4af37, transparent)' }} />
        </motion.div>
      </section>



      {/* Mastering the Basics - Yoga Steps Section */}
      <section style={{ padding: '8rem 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Mastering the <span style={{ color: '#d4af37' }}>Basics</span></h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Follow these simple steps to begin your journey toward physical and mental harmony.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { 
                step: "01", 
                title: "Warm-up", 
                desc: "Gently rotate your joints and stretch your muscles to prepare for deeper asanas.",
                color: "#fff",
                gif: yogaGiphy
              },
              { 
                step: "02", 
                title: "Breathing exercises", 
                desc: "Focus on rhythmic breathing to calm the nervous system and increase lung capacity.",
                color: "#fff",
                gif: breathingGif
              },
              { 
                step: "03", 
                title: "Yoga poses (Asanas)", 
                desc: "Practice physical postures to improve balance, strength, and inner flexibility.",
                color: "#fff",
                gif: yogaPosesVideo,
                isVideo: true
              },
              { 
                step: "04", 
                title: "Cool Down / Stretching", 
                desc: "Gently release tension and improve flexibility through slow, mindful stretches.",
                color: "#fff",
                gif: stretchingVideo,
                isVideo: true
              },
              { 
                step: "05", 
                title: "Relaxation", 
                desc: "Allow your body to recover and integrate the energy generated during the practice.",
                color: "#fff",
                gif: relaxationVideo,
                isVideo: true
              },
              { 
                step: "06", 
                title: "Meditation", 
                desc: "Cultivate awareness and mental clarity through focused silence and inner stillness.",
                color: "#fff",
                gif: meditationVideo,
                isVideo: true
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                style={{
                  background: item.color,
                  padding: '3rem 2rem',
                  borderRadius: '30px',
                  border: '1px solid #eee',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}
              >
                {item.gif && (
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    right: '-20px', 
                    width: '240px', 
                    height: '95%', 
                    opacity: 1,
                    zIndex: 0
                  }}>
                    {item.isVideo ? (
                      <video 
                        src={item.gif} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                      />
                    ) : (
                      <img src={item.gif} alt="Yoga animation" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    )}
                  </div>
                )}
                <span style={{ 
                  fontSize: '4rem', 
                  fontWeight: '900', 
                  color: 'rgba(212, 175, 55, 0.1)', 
                  position: 'absolute', 
                  top: '10px', 
                  right: '20px',
                  zIndex: 0
                }}>{item.step}</span>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '65%' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
                </div>
                <div style={{ 
                  width: '40px', height: '4px', background: '#d4af37', 
                  borderRadius: '2px', marginTop: '2rem', position: 'relative', zIndex: 1
                }} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '8rem',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 175, 55, 0.1)'
            }}
          >
            <img 
              src={yogaBasicsFooterImg} 
              alt="Yoga Practice" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </motion.div>
        </div>
      </section>





      {/* Interactive Breathing Tool */}
      <section style={{ padding: '10rem 5%', background: 'linear-gradient(to bottom, #fff, #fcfcfc)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', color: '#1a1a1a' }}>Take a Moment.</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '5rem' }}>Stress relief is just a few breaths away. Try our guided breathing rhythm.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '3rem',
              background: '#fff',
              borderRadius: '50%',
              width: '300px',
              height: '300px',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
            }}>
              <motion.div
                animate={{
                  scale: phase === 'Inhale' ? 1.5 : 1,
                  opacity: phase === 'Inhale' ? 0.4 : 0.1
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
                style={{
                  width: '100px',
                  height: '100px',
                  background: '#d4af37',
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  position: 'absolute'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#d4af37', zIndex: 1, margin: 0 }}>{phase}</h3>
              <p style={{ fontSize: '0.9rem', color: '#888', zIndex: 1, marginTop: '10px' }}>Follow the rhythm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section style={{ padding: '6rem 5%', background: '#d4af37', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>5k+</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Participants</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>50+</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Villages Reached</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>24/7</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Community Support</p>
          </div>
        </div>
      </section>



      {/* Final Serenity Section */}
      <section style={{ 
        height: '80vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0.2)), url(${yogaBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem', color: '#1a1a1a' }}>Start Your Journey Today.</h2>
          <p style={{ fontSize: '1.4rem', color: '#555', marginBottom: '3rem', fontWeight: '400' }}>Join our mission to bring wellness to every corner of rural India.</p>
          <button style={{
            background: '#d4af37',
            color: '#fff',
            padding: '1.5rem 4rem',
            fontSize: '1.2rem',
            fontWeight: '900',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            BECOME A VOLUNTEER
          </button>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(255,255,255,0.9)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(15px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '16/9',
                background: '#fff',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
                position: 'relative',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,204,0,0.9)',
                  border: 'none',
                  color: '#000',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }}
              >
                <X size={24} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Yoga;
