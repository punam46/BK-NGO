import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Award, Heart, TrendingUp, Star, ChevronLeft, ChevronRight, ArrowRight, HandHeart, Globe, Shield, Lightbulb } from 'lucide-react';

import disabilityExamImg from '../assets/dis2.jpg';
import competitiveImg from '../assets/compataive.avif';
import pwdExamImg from '../assets/what_we_do_pwd_exam.png';
import disabilitySkillsImg from '../assets/dis.jpg';
import vocationalImg from '../assets/disability1.jpg';
import visuallyImpairedImg from '../assets/visually_impaired_student_v2.png';
import sunitaImg from '../assets/sunita_portrait.png';
import rahulImg from '../assets/rahul_portrait.png';

import { renderText } from './Education';
import './DisabilityAffairs.css';

const DisabilityAffairs = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [floatingShapes] = useState(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 4,
      delay: i * 0.5,
      isEven: i % 2 === 0
    }))
  );

  const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
});

const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Track mouse for potential interactive effects (reserved for future use)
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mouse position tracking kept for potential future interactive features
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const initiatives = [
    {
      title: "Competitive Exam Preparation",
      description: "Specialized coaching and adaptive study materials for PwD preparing for government and competitive examinations, breaking barriers for equal opportunities.",
      details: ["Personalized Coaching", "Adaptive Technology", "Mock Tests & Mentorship"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "#e53935",
      stats: { count: "500+", label: "Students Trained" }
    },
    {
      title: "Advocacy & Legal Support",
      description: "Comprehensive guidance on disability rights, government schemes, and legal assistance to secure benefits and justice.",
      details: ["Rights Education", "Scheme Navigation", "Legal Aid"],
      icon: <Users className="w-8 h-8" />,
      color: "#4caf50",
      stats: { count: "1200+", label: "Cases Resolved" }
    },
    {
      title: "Equal Opportunity Initiative",
      description: "Promoting workplace inclusion and creating accessible environments through corporate partnerships and sensitization programs.",
      details: ["Corporate Tie-ups", "Accessibility Audits", "Sensitization"],
      icon: <Globe className="w-8 h-8" />,
      color: "#2196f3",
      stats: { count: "80+", label: "Partner Companies" }
    },
    {
      title: "Assistive Support Program",
      description: "Providing high-quality assistive devices and technology to enhance mobility, communication, and independence for PwDs.",
      details: ["Mobility Aids", "Digital Access", "Maintenance Support"],
      icon: <Shield className="w-8 h-8" />,
      color: "#9c27b0",
      stats: { count: "2500+", label: "Devices Distributed" }
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Bank PO Officer (Visually Impaired)",
      quote: "As a visually impaired student, the screen-reading software and specialized audio materials provided by BK Society were life-changing. They didn't just teach me; they gave me the confidence to compete with the world.",
      image: visuallyImpairedImg,
      color: "#e53935"
    },
    {
      name: "Sunita Deshmukh",
      role: "PhD Scholar (Locomotor Disability)",
      quote: "Living in a rural village with a locomotor disability made education feel like a distant dream. BK Society provided me with a motorized wheelchair and mentored me through my entire doctoral application process.",
      image: sunitaImg,
      color: "#4caf50"
    },
    {
      name: "Rahul Mehta",
      role: "Accessibility Consultant",
      quote: "The vocational skill center taught me digital accessibility. I am now financially independent and working for a global firm, proving that with the right support, disability is never a barrier to excellence.",
      image: rahulImg,
      color: "#ff9800"
    }
  ];

  const impactStats = [
    { number: "2000+", label: "Lives Empowered", icon: <Heart className="w-6 h-6" /> },
    { number: "15+", label: "Years of Service", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Partner Orgs", icon: <HandHeart className="w-6 h-6" /> }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // 3D Tilt calculation for cards
  const calculateTilt = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
    const rotateY = ((x - centerX) / centerX) * 5;
    return { rotateX, rotateY };
  };

  return (
    <div className="disability-affairs-page" ref={containerRef} style={{ background: '#fff', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
         50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
         50% { transform: translateY(-30px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(229, 57, 53, 0.3); }
         50% { box-shadow: 0 0 40px rgba(229, 57, 53, 0.6); }
        }
        .floating-element {
          will-change: transform;
        }
        .parallax-layer {
          will-change: transform;
        }
        .tilt-card {
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }
        .tilt-card:hover {
          transition: transform 0.3s ease-out;
        }
      `}</style>

      {/* Floating Background Elements */}
      <motion.div
        className="floating-shapes"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            style={{
              position: 'absolute',
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: i % 2 === 0 ? 'rgba(229, 57, 53, 0.08)' : 'rgba(76, 175, 80, 0.08)',
              borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Hero Section */}
      <section style={{
        padding: '8rem 5% 4rem',
        backgroundImage: `linear-gradient(135deg, rgba(34, 123, 138, 0.95) 0%, rgba(249, 216, 196, 0.95) 100%), url(${disabilityExamImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '4rem',
        minHeight: '80vh',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: '1.2', minWidth: '350px' }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 900,
              marginBottom: '1.5rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              padding: '8px 20px',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {renderText("BK Education and Welfare Society")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '2rem',
              textShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            Breaking Barriers. <br/>
            <span style={{ color: '#227b8a', background: '#fff', padding: '0 15px', borderRadius: '10px', display: 'inline-block', marginTop: '10px' }}>Unlocking</span> Potential.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              maxWidth: '600px',
              marginBottom: '3rem',
              fontWeight: '500'
            }}
          >
            We transform challenges into opportunities. Our comprehensive programs for persons with disabilities provide the tools, training, and support to excel in education, careers, and life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ borderLeft: '4px solid #fff', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800, color: '#fff' }}>Free Coaching</h4>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>For all competitive exams</p>
            </div>
            <div style={{ borderLeft: '4px solid #fff', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800, color: '#fff' }}>Skill Training</h4>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Industry-ready programs</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            flex: '1',
            position: 'relative',
            minWidth: window.innerWidth < 768 ? '100%' : '550px',
            height: '500px',
            marginTop: window.innerWidth < 768 ? '4rem' : '0',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Back Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              position: 'absolute',
              width: '60%',
              aspectRatio: '1/1',
              bottom: '25%',
              right: '5%',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '8px solid #fff',
              zIndex: 1,
              transform: 'rotate(0deg)'
            }}
          >
            <img src={competitiveImg} alt="Disability Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          {/* Front Image Card - Circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0, y: -40 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              width: '48%',
              aspectRatio: '1/1',
              top: '32%',
              left: '2%',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
              border: '12px solid #fff',
              zIndex: 10,
              transformStyle: 'preserve-3d'
            }}
          >
            <img 
              src={disabilitySkillsImg} 
              alt="Disability Support" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center 20%',
                transition: 'transform 0.5s ease'
              }} 
            />

          </motion.div>

          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
            zIndex: 0,
            filter: 'blur(40px)'
          }} />
        </motion.div>
      </section>

      {/* Impact Statistics Section - Redesigned to match reference */}
      <section style={{
        padding: '6rem 5%',
        background: '#fff5f0',
        position: 'relative',
        zIndex: 1,
        borderRadius: '60px 60px 0 0',
        marginTop: '-40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem',
          textAlign: 'center'
        }}>
          {impactStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateX: -5, 
                rotateY: 5, 
                z: 20,
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
              transition={{ delay: idx * 0.1 }}
              style={{
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                cursor: 'pointer'
              }}
            >
              {/* Background Blob */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 45 }}
                style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  background: idx % 2 === 0 ? '#f9d8c4' : '#e2f3f5',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  top: '10%',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(15deg)',
                  opacity: 0.6,
                  zIndex: 0,
                  transformStyle: 'preserve-3d',
                  translateZ: '-10px'
                }} 
              />

              {/* Decorative Dots */}
              <motion.div 
                whileHover={{ x: 10, y: -10 }}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  border: '2px solid #1a1a1a',
                  borderRadius: '50%',
                  top: '5%',
                  right: '25%',
                  zIndex: 1,
                  translateZ: '30px'
                }} 
              />
              <motion.div 
                whileHover={{ x: -5, y: 5 }}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: '#1a1a1a',
                  borderRadius: '50%',
                  bottom: '40%',
                  left: '20%',
                  zIndex: 1,
                  translateZ: '20px'
                }} 
              />

              <motion.h3
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  color: '#1a1a1a',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transformStyle: 'preserve-3d',
                  translateZ: '50px'
                }}
              >
                <span style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>.</span>
                {stat.number}
              </motion.h3>
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#555', 
                fontWeight: '600',
                position: 'relative',
                zIndex: 2,
                maxWidth: '150px',
                lineHeight: 1.4,
                transformStyle: 'preserve-3d',
                translateZ: '40px'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Initiatives Grid with 3D Tilt */}
      <section style={{ padding: '8rem 5% 6rem', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            style={{
              fontSize: '0.9rem',
              color: '#e53935',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '1rem'
            }}
          >
            Our Programs
          </motion.span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.5rem' }}>
            Transforming Lives Through Inclusion
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Empowering persons with disabilities through education, skill development, and advocacy for a barrier-free future.
          </p>
        </motion.div>

        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 1024 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(4, 1fr)',
            gap: '1.5rem',
            perspective: '1000px'
          }}>
            {initiatives.map((item, index) => (
              <TiltCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section style={{
        padding: '8rem 5%',
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffebee 100%)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{
              fontSize: '0.9rem', color: '#e53935',
              fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Success Stories
            </span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.5rem' }}>
              Voices of Empowerment
            </h2>
          </motion.div>

          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.5fr',
                  gap: '4rem',
                  alignItems: 'center',
                  background: '#fff',
                  padding: '4rem',
                  borderRadius: '30px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '180px', 
                    height: '180px', 
                    borderRadius: '50%',
                    margin: '0 auto 2rem',
                    overflow: 'hidden',
                    border: `4px solid ${testimonials[currentTestimonial].color}`,
                    boxShadow: `0 15px 30px rgba(0,0,0,0.1)`
                  }}>
                    <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name}
                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <span style={{ color: testimonials[currentTestimonial].color, fontWeight: 600 }}>
                    {testimonials[currentTestimonial].role}
                  </span>
                </div>
                <div>
                  <span style={{
                    fontSize: '5rem', lineHeight: 1,
                    color: testimonials[currentTestimonial].color,
                    display: 'block', marginBottom: '-1rem'
                  }}>&ldquo;</span>
                  <p style={{
                    fontSize: '1.4rem',
                    color: '#444',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '2rem'
                  }}>
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{
              display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem'
            }}>
              <button
                onClick={handlePrevTestimonial}
                style={{
                  width: '50px', height: '50px',
                  borderRadius: '50%',
                  border: '2px solid #1a1a1a',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1a1a1a';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1a1a1a';
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    style={{
                      width: '10px', height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      background: idx === currentTestimonial ? '#e53935' : '#ddd',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
              <button
                onClick={handleNextTestimonial}
                style={{
                  width: '50px', height: '50px',
                  borderRadius: '50%',
                  border: '2px solid #1a1a1a',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1a1a1a';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1a1a1a';
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{
        padding: '6rem 5%',
        background: 'linear-gradient(135deg, #e53935 0%, #c62828 100%)',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}
        >
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            Join Us in Building an Inclusive Future
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2.5rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Whether through volunteering, donations, or partnerships, your support transforms lives. Together, we can create a world where every ability shines.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/involved')}
            style={{
              background: '#fff',
              color: '#e53935',
              border: 'none',
              padding: '1.2rem 3rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '50px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            Get Involved <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-50%', left: '-10%',
          width: '300px', height: '300px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute', bottom: '-30%', right: '-5%',
          width: '200px', height: '200px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%'
        }} />
      </section>

      {/* Quote Section */}
      <section style={{
        padding: '6rem 5%',
        background: '#fff',
        color: '#1a1a1a',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '5rem', color: '#e53935',
              lineHeight: 1, display: 'block', marginBottom: '0.5rem'
            }}
          >
            &ldquo;
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              marginBottom: '2rem',
              lineHeight: 1.4,
              color: '#2e3440'
            }}
          >
            Our mission is to create a world where every individual, regardless of their physical challenges, has the tools and confidence to achieve their dreams.
          </motion.h2>
          <div style={{ width: '50px', height: '4px', background: '#e53935', margin: '0 auto 2rem' }} />
          <p style={{
            fontSize: '1rem', color: '#555',
            textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700
          }}>
            BK Education and Welfare Society
          </p>
        </div>
      </section>
    </div>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTilt();
      }}
      style={{
        background: '#fff',
        borderRadius: '32px',
        padding: '3rem 2.5rem',
        border: '1px solid #f0f0f0',
        boxShadow: isHovered
          ? '0 30px 60px rgba(0,0,0,0.12), 0 0 40px rgba(229,57,53,0.1)'
          : '0 15px 45px rgba(0,0,0,0.05)',
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-15px) scale(1.02)`
          : 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)',
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s',
        cursor: 'pointer',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      {/* 3D depth layers and Glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: '32px',
        background: `radial-gradient(circle at ${tilt.rotateY * 5 + 50}% ${tilt.rotateX * 5 + 50}%, ${item.color}20 0%, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <motion.div
        animate={isHovered ? { 
          y: [0, -10, 0],
          rotateZ: [0, 5, -5, 0],
          scale: 1.1
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          fontSize: '3.5rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `${item.color}15`,
          width: '100px',
          height: '100px',
          borderRadius: '30px',
          transform: 'translateZ(50px)',
          color: item.color,
          boxShadow: isHovered ? `0 20px 40px ${item.color}30` : 'none',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          margin: '0 auto',
          border: isHovered ? `1px solid ${item.color}40` : '1px solid transparent',
          transition: 'box-shadow 0.3s, border 0.3s'
        }}
      >
        {item.icon}
      </motion.div>

      <motion.h3
        style={{
          fontSize: '1.6rem',
          fontWeight: 900,
          marginBottom: '1.2rem',
          color: '#1a1a1a',
          transform: 'translateZ(40px)',
          position: 'relative',
          zIndex: 2
        }}
      >
        {item.title}
      </motion.h3>

      <p style={{
        color: '#666',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
        transform: 'translateZ(30px)',
        position: 'relative',
        zIndex: 2,
        fontSize: '1rem'
      }}>
        {item.description}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        transform: 'translateZ(45px)',
        position: 'relative',
        zIndex: 2
      }}>
        {item.details.map((detail, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1, background: item.color, color: '#fff' }}
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: item.color,
              background: `${item.color}10`,
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              transition: 'all 0.3s',
              border: `1px solid ${item.color}20`,
              cursor: 'default'
            }}
          >
            {detail}
          </motion.span>
        ))}
      </div>

      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: `${item.color}05`,
        borderRadius: '50%',
        filter: 'blur(30px)',
        zIndex: 0
      }} />
    </motion.div>
  );
};

export default DisabilityAffairs;
