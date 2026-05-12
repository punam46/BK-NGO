import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { renderText } from './Education';
import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';
import yogaInstructorImg from '../assets/yoga_instructor.png';
import { Leaf, Wind, Heart, Zap, Award, Users } from 'lucide-react';

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

const BreathingCircle = () => {
  const [phase, setPhase] = useState('Inhale');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => prev === 'Inhale' ? 'Exhale' : 'Inhale');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '3rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '50%',
      width: '300px',
      height: '300px',
      border: '1px solid rgba(255, 204, 0, 0.2)',
      position: 'relative'
    }}>
      <motion.div
        animate={{
          scale: phase === 'Inhale' ? 1.5 : 1,
          opacity: phase === 'Inhale' ? 0.8 : 0.3
        }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{
          width: '100px',
          height: '100px',
          background: '#ffcc00',
          borderRadius: '50%',
          filter: 'blur(30px)',
          position: 'absolute'
        }}
      />
      <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ffcc00', zIndex: 1, margin: 0 }}>{phase}</h3>
      <p style={{ fontSize: '0.9rem', color: '#ccc', zIndex: 1, marginTop: '10px' }}>Follow the rhythm</p>
    </div>
  );
};

const Yoga = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const initiatives = [
    {
      title: "Mindfulness & Meditation",
      description: "We bring the ancient wisdom of meditation to rural communities, helping individuals manage stress, improve focus, and find inner peace.",
      details: ["Guided Meditation", "Stress Management", "Mental Clarity"],
      icon: <Wind size={32} color="#ffcc00" />,
      image: yogaMeditationImg
    },
    {
      title: "Community Yoga Sessions",
      description: "Our weekly yoga classes in villages promote physical health, flexibility, and a sense of togetherness. Wellness is a collective journey.",
      details: ["Village Workshops", "Physical Wellness", "Social Connection"],
      icon: <Users size={32} color="#ffcc00" />,
      image: yogaCommunityImg
    },
    {
      title: "Holistic Health Education",
      description: "Educating rural families about the importance of breathing techniques, balanced diet, and natural lifestyle choices.",
      details: ["Pranayama Practice", "Natural Living", "Health Awareness"],
      icon: <Heart size={32} color="#ffcc00" />,
      image: yogaHeroImg
    }
  ];

  return (
    <div className="yoga-page" style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
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
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), #0a0a0a), url(${yogaHeroImg})`,
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
              color: '#ffcc00', 
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
            style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
              fontWeight: '900', 
              lineHeight: '0.9',
              marginBottom: '3rem',
              letterSpacing: '-2px'
            }}>
            Breathe. <span style={{ color: '#ffcc00' }}>Heal.</span> Grow.
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: '5px', background: '#ffcc00', margin: '0 auto 3rem' }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ fontSize: '1.4rem', color: '#ccc', lineHeight: '1.6', fontWeight: '300' }}>
            Empowering rural India through the ancient science of Yoga and holistic wellness.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
          <div style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, #ffcc00, transparent)' }} />
        </motion.div>
      </section>

      {/* Interactive Wellness Journey */}
      <section style={{ padding: '10rem 5%', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {initiatives.map((item, index) => (
              <InteractiveCard key={index} style={{ height: '100%' }}>
                <div style={{
                  background: '#111',
                  borderRadius: '40px',
                  padding: '3rem',
                  height: '100%',
                  border: '1px solid #222',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ marginBottom: '2rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#fff' }}>{item.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: '1.7', marginBottom: '2.5rem' }}>{item.description}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {item.details.map((detail, idx) => (
                      <span key={idx} style={{ 
                        background: 'rgba(255, 204, 0, 0.1)', color: '#ffcc00', 
                        padding: '0.5rem 1.2rem', borderRadius: '30px', 
                        fontSize: '0.85rem', fontWeight: '800', border: '1px solid rgba(255, 204, 0, 0.2)' 
                      }}>{detail}</span>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Instructor Section */}
      <section style={{ padding: '8rem 5%', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', inset: '-20px', border: '2px solid #ffcc00', 
                borderRadius: '40px', opacity: 0.3, zIndex: 0 
              }} />
              <img 
                src={yogaInstructorImg} 
                alt="Instructor" 
                style={{ 
                  width: '100%', borderRadius: '40px', 
                  position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' 
                }} 
              />
            </motion.div>
          </div>
          <div style={{ flex: '1.5', minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', color: '#ffcc00' }}>Authentic Guidance.</h2>
            <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Our programs are led by certified practitioners who understand the unique needs of rural communities. We combine traditional techniques with a modern understanding of health to ensure every participant gets the best out of every session.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#ffcc00', fontWeight: '900', fontSize: '1.5rem', marginBottom: '0.5rem' }}>15+</h4>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Certified Trainers</p>
              </div>
              <div>
                <h4 style={{ color: '#ffcc00', fontWeight: '900', fontSize: '1.5rem', marginBottom: '0.5rem' }}>100+</h4>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Village Workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Schedule Section */}
      <section style={{ padding: '8rem 5%', background: '#111' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '10px', 
              background: 'rgba(255, 204, 0, 0.1)', padding: '0.8rem 1.5rem', 
              borderRadius: '50px', border: '1px solid rgba(255, 204, 0, 0.2)',
              marginBottom: '2rem'
            }}>
              <Award size={20} color="#ffcc00" />
              <span style={{ color: '#ffcc00', fontWeight: '900', fontSize: '0.9rem', letterSpacing: '1px' }}>CERTIFIED WELLNESS PROGRAM</span>
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Weekly Session Schedule</h2>
            <p style={{ color: '#888', fontSize: '1.1rem' }}>Join us at our local community centers for guided practice.</p>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { day: 'Monday', time: '06:00 AM - 07:30 AM', focus: 'Surya Namaskar & Energizing Flow' },
              { day: 'Wednesday', time: '05:30 PM - 07:00 PM', focus: 'Deep Relaxation & Pranayama' },
              { day: 'Friday', time: '06:00 AM - 07:30 AM', focus: 'Asana Alignment & Strength' },
              { day: 'Sunday', time: '07:00 AM - 09:00 AM', focus: 'Community Meditation & Satsang' }
            ].map((session, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 20, background: '#1a1a1a' }}
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '2rem 3rem', background: '#0a0a0a', borderRadius: '20px',
                  border: '1px solid #222', cursor: 'default'
                }}>
                <div>
                  <h4 style={{ color: '#ffcc00', fontWeight: '900', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{session.day}</h4>
                  <p style={{ color: '#ccc', margin: 0 }}>{session.focus}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
                    <Zap size={16} />
                    <span>{session.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Breathing Tool */}
      <section style={{ padding: '10rem 5%', background: 'linear-gradient(to bottom, #0a0a0a, #111)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Take a Moment.</h2>
          <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '5rem' }}>Stress relief is just a few breaths away. Try our guided breathing rhythm.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BreathingCircle />
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section style={{ padding: '6rem 5%', background: '#ffcc00', color: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>5k+</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Participants</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>50+</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Villages Reached</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', fontWeight: '900', margin: 0 }}>24/7</h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Community Support</p>
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
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${yogaBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem' }}>Start Your Journey Today.</h2>
          <p style={{ fontSize: '1.4rem', color: '#ccc', marginBottom: '3rem', fontWeight: '300' }}>Join our mission to bring wellness to every corner of rural India.</p>
          <button style={{
            background: '#ffcc00',
            color: '#000',
            padding: '1.5rem 4rem',
            fontSize: '1.2rem',
            fontWeight: '900',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(255, 204, 0, 0.3)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            BECOME A VOLUNTEER
          </button>
        </div>
      </section>

    </div>
  );
};

export default Yoga;
