import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Leaf, Wind, Heart, Zap, Award, Users, Play, X, ChevronRight, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import zenLotusImg from '../assets/yoga_zen_3d_lotus_1778575440959.png';
import instructorImg from '../assets/yoga_instructor_zen_1778575466805.png';
import flowLandscapeImg from '../assets/yoga_flow_landscape_1778575486231.png';

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;700;900&display=swap');
    .yoga-serif { font-family: 'Playfair Display', serif; }
    .yoga-sans { font-family: 'Inter', sans-serif; }
  `}</style>
);

const Yoga = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [phase, setPhase] = useState('Inhale');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => prev === 'Inhale' ? 'Exhale' : 'Inhale');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const theme = {
    bg: '#F9F7F2',
    text: '#2D3930',
    subtext: '#6B7280',
    accent: '#4A5D4E',
    white: '#FFFFFF',
    border: '#E5E7EB'
  };

  const initiatives = [
    {
      title: "Mindful Breath",
      description: "Techniques to anchor your awareness and find calm in the present moment.",
      icon: <Wind size={24} color={theme.accent} />
    },
    {
      title: "Superior Flows",
      description: "Dynamic sequences designed to build strength, flexibility, and internal heat.",
      icon: <Leaf size={24} color={theme.accent} />
    },
    {
      title: "Zen Sanctuary",
      description: "A space dedicated to deep relaxation and spiritual reconnection.",
      icon: <Heart size={24} color={theme.accent} />
    }
  ];

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <FontStyles />
      {/* Top Navigation Bar */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '2rem 5%', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 100 
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.accent }} />
          SERENITY
        </div>
        <button style={{ 
          background: theme.accent, color: '#fff', border: 'none', padding: '0.8rem 1.8rem', 
          borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' 
        }}>JOIN</button>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '8rem 5% 4rem', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '450px', margin: '0 auto 4rem', position: 'relative' }}
        >
          <div style={{ 
            width: '100%', aspectRatio: '0.8', background: theme.accent, 
            borderRadius: '120px 120px 40px 40px', overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(74, 93, 78, 0.2)'
          }}>
            <img src={zenLotusImg} alt="Zen 3D" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', fontFamily: "'Playfair Display', serif", 
            fontWeight: '400', lineHeight: '1.1', marginBottom: '2rem' 
          }}>
          Find Your<br />
          <span style={{ fontStyle: 'italic' }}>Inner Stillness</span>
        </motion.h1>
        <p style={{ color: theme.subtext, fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          New boutique sessions designed to ground your practice in the heart of rural India. Learn the ancient ways from the source.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <button style={{ 
            background: theme.accent, color: '#fff', border: 'none', padding: '1.2rem 3rem', 
            borderRadius: '50px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', width: '250px' 
          }}>Begin Journey</button>
          <button style={{ 
            background: 'transparent', color: theme.text, border: `1px solid ${theme.border}`, 
            padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: '700', fontSize: '1rem', 
            cursor: 'pointer', width: '250px' 
          }}>See Programs</button>
        </div>
      </section>

      {/* Essence Section */}
      <section style={{ padding: '8rem 5%', textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '3px', color: theme.subtext, textTransform: 'uppercase' }}>BECOME WITH US</span>
        <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginTop: '1.5rem', marginBottom: '5rem' }}>The Essence of Wellness</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {initiatives.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ 
                background: theme.white, padding: '4rem 2rem', borderRadius: '40px', 
                textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
              }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', background: theme.bg, 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem' 
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: theme.subtext, lineHeight: '1.6', fontSize: '0.95rem' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curated Flows Section */}
      <section style={{ padding: '4rem 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', color: theme.subtext, textTransform: 'uppercase' }}>OUR SESSIONS</span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginTop: '1rem' }}>Curated Flows</h2>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '2rem', scrollbarWidth: 'none' }}>
          {[1, 2, 3].map((_, i) => (
            <div key={i} style={{ minWidth: '300px', flex: '0 0 auto' }}>
              <div style={{ 
                width: '100%', aspectRatio: '1.5', borderRadius: '30px', 
                overflow: 'hidden', position: 'relative', marginBottom: '1.5rem' 
              }}>
                <img src={flowLandscapeImg} alt="Flow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.5)', 
                  color: '#fff', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '800' 
                }}>12 MINS</div>
              </div>
              <h4 style={{ fontSize: '1.3rem', fontFamily: "'Playfair Display', serif", marginBottom: '0.5rem' }}>Daily Awakening</h4>
              <p style={{ color: theme.subtext, fontSize: '0.9rem' }}>A perfect start to your morning rhythm.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Success Section */}
      <section style={{ padding: '8rem 5%', background: theme.white }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', color: theme.subtext, textTransform: 'uppercase' }}>OUR REACH</span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginTop: '1rem' }}>Global Success</h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
            </div>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        <div style={{ width: '100%', aspectRatio: '0.8', borderRadius: '60px', overflow: 'hidden', position: 'relative' }}>
          <img src={flowLandscapeImg} alt="Success" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ 
            position: 'absolute', bottom: '40px', left: '40px', right: '40px', 
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', 
            padding: '2.5rem', borderRadius: '40px' 
          }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Playfair Display', serif", marginBottom: '0.5rem' }}>Surya Namaskar Flow</h3>
            <p style={{ color: theme.subtext }}>Uttarakhand, India — May 2024</p>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section style={{ padding: '8rem 5%' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '3px', color: theme.subtext, textTransform: 'uppercase' }}>OUR TEACHERS</span>
        <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginTop: '1.5rem', marginBottom: '5rem' }}>Guided by Wisdom<br />and Compassion</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { name: "Ema Rose", role: "Pranayama Lead", img: instructorImg },
            { name: "Marcus Thorne", role: "Vinyasa Master", img: instructorImg }
          ].map((inst, i) => (
            <div key={i} style={{ width: '100%', aspectRatio: '0.7', borderRadius: '50px', overflow: 'hidden', position: 'relative' }}>
              <img src={inst.img} alt={inst.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', bottom: '0', left: '0', width: '100%', 
                padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
              }}>
                <h3 style={{ color: '#fff', fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '0.5rem' }}>{inst.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: '700' }}>{inst.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ padding: '8rem 5%', textAlign: 'center' }}>
        <div style={{ fontSize: '6rem', fontFamily: "'Playfair Display', serif", color: theme.border, lineHeight: '1', marginBottom: '2rem' }}>”</div>
        <p style={{ 
          fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', 
          maxWidth: '600px', margin: '0 auto', lineHeight: '1.4' 
        }}>
          "Yoga is not about touching your toes. It is about what you learn on the way down. Our mission is to facilitate that discovery through grace and peace."
        </p>
        <span style={{ display: 'block', marginTop: '3rem', fontWeight: '900', letterSpacing: '2px', fontSize: '0.8rem' }}>BK FOUNDATION</span>
      </section>

      {/* Ready to Breathe Section */}
      <section style={{ padding: '8rem 5%', textAlign: 'center', background: theme.white, borderRadius: '80px 80px 0 0' }}>
        <h2 style={{ fontSize: '4rem', fontFamily: "'Playfair Display', serif", marginBottom: '2.5rem' }}>Ready to<br />Breathe?</h2>
        <p style={{ color: theme.subtext, maxWidth: '500px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
          Join our monthly sessions and become part of a community that values wellness and tradition. Available online and in-person.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <button style={{ 
            background: theme.accent, color: '#fff', border: 'none', padding: '1.2rem 3rem', 
            borderRadius: '50px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', width: '250px' 
          }}>Book a Session</button>
          <button style={{ 
            background: 'transparent', color: theme.text, border: `1px solid ${theme.border}`, 
            padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: '700', fontSize: '1rem', 
            cursor: 'pointer', width: '250px' 
          }}>See Schedule</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 5% 4rem', background: theme.white, borderTop: `1px solid ${theme.border}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.accent }} />
              SERENITY
            </div>
            <p style={{ color: theme.subtext, maxWidth: '300px', lineHeight: '1.6' }}>
              Empowering rural India through wellness, yoga, and holistic health education since 2012.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
              <Instagram size={20} color={theme.accent} />
              <Twitter size={20} color={theme.accent} />
              <Facebook size={20} color={theme.accent} />
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: '800', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '1px' }}>PROGRAMS</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: theme.subtext, lineHeight: '2.5' }}>
              <li>Meditation</li>
              <li>Pranayama</li>
              <li>Vinyasa Flow</li>
              <li>Wellness Retreat</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: '800', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '1px' }}>SOCIETY</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: theme.subtext, lineHeight: '2.5' }}>
              <li>About Us</li>
              <li>Villages</li>
              <li>Impact</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', color: theme.subtext, fontSize: '0.85rem' }}>
          <span>© 2024 BK EDUCATION AND WELFARE SOCIETY</span>
          <span>BUILT BY ANTIGRAVITY</span>
        </div>
      </footer>

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
                border: `1px solid ${theme.accent}33`
              }}
            >
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: theme.accent,
                  border: 'none',
                  color: '#fff',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
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
