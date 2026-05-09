import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Home,
  BookOpen,
  Users,
  ShieldCheck,
  Clock,
  Utensils,
  Stethoscope,
  Smile,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Gift
} from 'lucide-react';

import { renderText } from './Education';
import orphanHero from '../assets/Orphan.jpg';
import orphan2 from '../assets/orphan 2.jpg';
import orphan3 from '../assets/orphan3.jpg';
import karanImg from '../assets/karan.png';
import mayaImg from '../assets/maya.png';

const StatCard = ({ stat, i }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -10 : 0
      }}
      style={{
        background: isHovered ? '#fff' : stat.color,
        padding: '3.5rem 2rem',
        borderRadius: '32px',
        textAlign: 'center',
        boxShadow: isHovered
          ? `0 30px 60px rgba(0,0,0,0.1), 0 0 0 2px ${stat.textColor}20`
          : '0 10px 30px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <motion.div
        animate={{
          y: isHovered ? [-5, 5, -5] : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          color: stat.textColor,
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{
          background: `${stat.textColor}15`,
          padding: '1.2rem',
          borderRadius: '24px'
        }}>
          {stat.icon}
        </div>
      </motion.div>

      <h3 style={{
        fontSize: '3.5rem',
        fontWeight: 950,
        color: stat.textColor,
        margin: '0 0 0.5rem 0',
        letterSpacing: '-1px'
      }}>
        {stat.value}
      </h3>

      <p style={{
        margin: 0,
        color: isHovered ? '#333' : '#666',
        fontWeight: 800,
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        {stat.label}
      </p>

      {/* Decorative Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${stat.textColor}05 0%, transparent 100%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none'
      }} />

      {/* Modern Bottom Indicator */}
      <motion.div
        animate={{
          scaleX: isHovered ? 1 : 0.3,
          opacity: isHovered ? 1 : 0.2
        }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20%',
          right: '20%',
          height: '4px',
          background: stat.textColor,
          borderRadius: '10px'
        }}
      />
    </motion.div>
  );
};

const InitiativeCard = ({ item, i }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      animate={{
        scale: isHovered ? 1.04 : 1,
        y: isHovered ? -15 : 0
      }}
      style={{
        padding: '4.5rem 3rem',
        borderRadius: '48px',
        background: isHovered ? '#fff' : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(10px)',
        border: '2px solid',
        borderColor: isHovered ? `${item.color}30` : '#f0f0f0',
        boxShadow: isHovered
          ? `0 40px 80px rgba(0,0,0,0.08), 0 0 0 1px ${item.color}10`
          : '0 15px 30px rgba(0,0,0,0.02)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Interactive Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: isHovered ? 0.4 : 0.1,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <circle
                cx={20 + (mousePos.x - 50) * 0.1}
                cy={20 + (mousePos.y - 50) * 0.1}
                r="1.5"
                fill={item.color}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
        </svg>
      </div>

      {/* Dynamic Spotlight Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${item.color}15 0%, transparent 60%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          animate={{
            rotate: isHovered ? [0, 10, -10, 0] : 0,
            scale: isHovered ? 1.15 : 1,
            y: isHovered ? -5 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          style={{
            width: '110px', height: '110px',
            background: isHovered ? item.color : `${item.color}15`,
            color: isHovered ? '#fff' : item.color,
            borderRadius: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 2.5rem',
            boxShadow: isHovered ? `0 20px 40px ${item.color}40` : 'none',
            transition: 'all 0.4s ease'
          }}
        >
          {item.icon}
        </motion.div>

        <h3 style={{
          fontSize: '2.2rem',
          fontWeight: 950,
          marginBottom: '1.5rem',
          color: '#1a202c',
          letterSpacing: '-0.5px'
        }}>
          {item.title}
        </h3>

        <p style={{
          color: '#555',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          fontSize: '1.15rem',
          fontWeight: 500
        }}>
          {item.desc}
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {item.tags.map((tag, j) => (
            <motion.span
              key={j}
              whileHover={{ y: -3, scale: 1.05 }}
              style={{
                background: isHovered ? '#fff' : '#f8f9fa',
                padding: '10px 24px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: isHovered ? item.color : '#888',
                border: isHovered ? `1px solid ${item.color}30` : '1px solid transparent',
                boxShadow: isHovered ? '0 5px 15px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Background Accent Shape */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: item.color,
        opacity: 0.03,
        borderRadius: '50%',
        transform: isHovered ? 'scale(2)' : 'scale(1)',
        transition: 'transform 0.6s ease',
        zIndex: 0
      }} />
    </motion.div>
  );
};

const OrphanSupport = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentStory, setCurrentStory] = useState(0);
  const [sectionMousePos, setSectionMousePos] = useState({ x: 50, y: 50 });

  const handleSectionMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSectionMousePos({ x, y });
  };

  const stats = [
    { label: "Children Sheltered", value: "500+", color: "#fff3e0", textColor: "#f57c00", icon: <Home size={24} /> },
    { label: "Educated", value: "200+", color: "#fce4ec", textColor: "#d81b60", icon: <BookOpen size={24} /> },
    { label: "Years of Service", value: "10+", color: "#e3f2fd", textColor: "#1976d2", icon: <Users size={24} /> },
    { label: "Care & Support", value: "24/7", color: "#e8f5e9", textColor: "#388e3c", icon: <Heart size={24} /> }
  ];

  const mainSupports = [
    {
      title: "Holistic Care & Shelter",
      desc: "Providing a safe, nurturing residential environment where children receive nutritional meals and healthcare.",
      tags: ["RESIDENTIAL", "MEDICAL AID"],
      icon: <Home className="w-8 h-8" />,
      color: "#ff9800"
    },
    {
      title: "Quality Education",
      desc: "Ensuring every child has access to formal schooling, vocational training, and extracurriculars.",
      tags: ["SCHOOLING", "SKILL BUILDING"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "#2196f3"
    },
    {
      title: "Emotional Wellbeing",
      desc: "Professional counseling and a family-like atmosphere to build confidence, warmth, and belonging.",
      tags: ["COUNSELING", "MENTORSHIP"],
      icon: <Heart className="w-8 h-8" />,
      color: "#e91e63"
    },
    {
      title: "Vocational Training",
      desc: "Empowering older children with practical job skills and technical training for future independence.",
      tags: ["CAREER READY", "TECHNICAL"],
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "#4caf50"
    },
    {
      title: "Arts & Recreation",
      desc: "Nurturing talents through music, dance, painting, and sports to ensure balanced personality growth.",
      tags: ["CREATIVITY", "SPORTS"],
      icon: <Smile className="w-8 h-8" />,
      color: "#9c27b0"
    },
    {
      title: "Life Mentorship",
      desc: "One-on-one guidance from role models to help children navigate life's challenges with confidence.",
      tags: ["GUIDANCE", "ROLE MODELS"],
      icon: <Users className="w-8 h-8" />,
      color: "#00bcd4"
    }
  ];

  const sanctuaryItems = [
    { title: "Nutritional Meals", icon: <Utensils className="w-6 h-6" />, color: "#fff3e0", iconColor: "#f57c00" },
    { title: "Safe Housing", icon: <Home className="w-6 h-6" />, color: "#e3f2fd", iconColor: "#1976d2" },
    { title: "Family Love", icon: <Heart className="w-6 h-6" />, color: "#fce4ec", iconColor: "#d81b60" },
    { title: "Healthcare", icon: <Stethoscope className="w-6 h-6" />, color: "#e8f5e9", iconColor: "#388e3c" }
  ];

  const stories = [
    {
      name: "Karan's Journey",
      text: renderText("From a street children to a software engineer, BK Society gave me the wings I needed."),
      image: karanImg
    },
    {
      name: "Maya's Transformation",
      text: "I found a family here that I never thought existed. Today I am studying to be a nurse.",
      image: mayaImg
    }
  ];

  const handleNextStory = () => setCurrentStory((prev) => (prev + 1) % stories.length);
  const handlePrevStory = () => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <div className="orphan-support-page" style={{ background: '#fff', minHeight: '100vh', overflow: 'hidden' }} ref={containerRef}>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        padding: '4rem 5% 6rem',
        background: 'linear-gradient(135deg, #fffcf8 0%, #fff3e0 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1.2', minWidth: '320px' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#000', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}
            >
              {renderText("BK EDUCATION AND WELFARE SOCIETY")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                color: '#1a1a1a',
                lineHeight: 1.1,
                marginBottom: '2.5rem',
                textShadow: `
                  1px 1px 0px #fff,
                  2px 2px 0px rgba(0,0,0,0.1),
                  3px 3px 0px rgba(0,0,0,0.08),
                  4px 4px 0px rgba(0,0,0,0.06),
                  5px 5px 15px rgba(0,0,0,0.1)
                `
              }}
            >
              A Home for <br /> Every <span style={{ color: '#ff5722' }}>Future</span> Leader.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.7', marginBottom: '3.5rem', maxWidth: '600px' }}
            >
              Dedicated to providing abandoned and orphaned children with more than just a shelter—we provide a family, an education, and hope.
            </motion.p>

            {/* Nurturing Hope card removed */}
          </div>

          <div style={{ flex: '1.2', minWidth: '320px', position: 'relative', height: '500px', marginTop: '1rem' }}>
            {/* Background Image 1 */}
            <motion.div
              initial={{ x: 100, y: -100, opacity: 0, rotate: 15 }}
              animate={{ x: 40, y: -40, opacity: 0.6, rotate: 8 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 40 }}
              style={{
                position: 'absolute',
                width: '280px',
                height: '180px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                zIndex: 1
              }}
            >
              <img src={orphan2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background 1" />
            </motion.div>

            {/* Background Image 2 */}
            <motion.div
              initial={{ x: -100, y: 100, opacity: 0, rotate: -15 }}
              animate={{ x: -60, y: 40, opacity: 0.6, rotate: -12 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 40 }}
              style={{
                position: 'absolute',
                width: '260px',
                height: '160px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                zIndex: 2
              }}
            >
              <img src={orphan3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background 2" />
            </motion.div>

            {/* Main Image (Center) */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 5 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: [0, -10, 0]
              }}
              transition={{
                scale: { delay: 0.5, type: "spring", stiffness: 60 },
                opacity: { delay: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '4/3',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '12px solid #fff',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                zIndex: 10,
                margin: '0 auto'
              }}
            >
              <img src={orphanHero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Orphan Support Hero" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section style={{ padding: '0 5% 4rem', background: '#fff', position: 'relative', zIndex: 20 }}>
        <div style={{
          maxWidth: '1200px',
          margin: '3rem auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          perspective: '1000px'
        }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} i={i} />
          ))}
        </div>
      </section>



      {/* ===== HOW WE SUPPORT SECTION ===== */}
      <section
        onMouseMove={handleSectionMouseMove}
        style={{ padding: '8rem 5% 4rem', background: '#fcfcfc', position: 'relative', overflow: 'hidden' }}
      >
        {/* Global Interactive Section Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="section-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle
                  cx={60 + (sectionMousePos.x - 50) * 0.15}
                  cy={60 + (sectionMousePos.y - 50) * 0.15}
                  r="1.2"
                  fill="#ff572215"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#section-grid)" />

            {/* Soft Interactive Glow Orb */}
            <motion.circle
              animate={{
                cx: `${sectionMousePos.x}%`,
                cy: `${sectionMousePos.y}%`
              }}
              transition={{ type: "spring", stiffness: 40, damping: 25 }}
              r="400"
              fill="radial-gradient(circle, #ff572205 0%, transparent 70%)"
              style={{ fill: '#ff572208' }}
            />
          </svg>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>How We Support</h2>
            <div style={{ width: '60px', height: '4px', background: '#ff5722', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {mainSupports.map((item, i) => (
              <InitiativeCard key={i} item={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SANCTUARY SECTION ===== */}
      <section style={{ padding: '6rem 5% 8rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>A Sanctuary for Every Child</h2>
            <p style={{ color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.1rem' }}>
              Beyond being an institution, we are a permanent, loving home. For children who have lost their families, we provide the stability and unconditional love every child deserves.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {sanctuaryItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                style={{
                  background: item.color,
                  padding: '2rem',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: item.iconColor }}>{item.icon}</div>
                <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section style={{ padding: '8rem 5%', background: '#1a202c', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Success Stories</h2>
            <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>Testimonies of transformation</p>
          </div>

          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                style={{
                  background: '#2d3748',
                  borderRadius: '40px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center', // Center vertically
                  flexWrap: 'wrap',
                  minHeight: '600px',
                  padding: '4rem'
                }}
              >
                <div style={{ flex: '1', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    width: '550px',
                    height: '500px',
                    position: 'relative',
                    zIndex: 2,
                    borderRadius: '40px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
                  }}>
                    <img
                      src={stories[currentStory].image}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      alt={stories[currentStory].name}
                    />
                  </div>
                </div>

                  {/* Decorative Curved Line */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '540px',
                    height: '540px',
                    pointerEvents: 'none',
                    zIndex: -1
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-15deg)' }}>
                      <path
                        d="M 10 50 A 40 40 0 1 1 90 50"
                        fill="none"
                        stroke="#ff5722"
                        strokeWidth="0.5"
                        strokeDasharray="1 3"
                        strokeLinecap="round"
                        opacity="0.3"
                      />
                      <path
                        d="M 5 50 A 45 45 0 0 1 95 50"
                        fill="none"
                        stroke="#ff5722"
                        strokeWidth="0.2"
                        opacity="0.2"
                      />
                    </svg>
                  </div>



                <div style={{ flex: '1.2', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>{stories[currentStory].name}</h3>
                  <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#e2e8f0', fontStyle: 'italic', marginBottom: '3rem' }}>
                    "{stories[currentStory].text}"
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={handlePrevStory} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>
                      <ChevronLeft />
                    </button>
                    <button onClick={handleNextStory} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ===== GET INVOLVED SECTION ===== */}
      <section style={{ padding: '6rem 5% 10rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>Get Involved</h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '5rem' }}>Your contribution changes lives</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { title: "Volunteer", desc: "Donate your time & skills", icon: <Users className="w-6 h-6" />, color: "#f8f9fa" },
              { title: "Sponsor a Child", desc: "Provide direct monthly support", icon: <HandHeart className="w-6 h-6" />, color: "#fce4ec" },
              { title: "Donate Supplies", icon: <Gift className="w-6 h-6" />, desc: "Books, clothes, or medicine", color: "#f8f9fa" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                style={{
                  background: item.color,
                  padding: '2rem 3rem',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(i === 0 ? '/involved' : '/donate')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', textAlign: 'left' }}>
                  <div style={{ color: '#ff5722' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.2rem' }}>{item.title}</h4>
                    <p style={{ margin: 0, color: '#777', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
                <ChevronRight color="#ccc" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL QUOTE ===== */}
      <section style={{ padding: '8rem 5%', background: '#fff9f2', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '2.2rem', fontWeight: 800, fontStyle: 'italic', lineHeight: 1.5, color: '#333', marginBottom: '3rem' }}>
            "There are no unwanted children, just unfound families. Every child deserves a place to call home and a hand to hold."
          </p>
          <div style={{ width: '60px', height: '4px', background: '#ff5722', margin: '0 auto 2rem' }}></div>
          <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 900, color: '#888', fontSize: '0.9rem' }}>
            BK EDUCATION AND WELFARE SOCIETY
          </p>
        </div>
      </section>
      {/* ===== LEADERSHIP SECTION ===== */}
      <section style={{
        padding: '5rem 5% 8rem',
        background: '#e91e63',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Elements */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 950, 
              color: '#fff', 
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 1,
              textShadow: `
                0 1px 0 #ccc,
                0 2px 0 #c9c9c9,
                0 3px 0 #bbb,
                0 4px 0 #b9b9b9,
                0 5px 0 #aaa,
                0 6px 1px rgba(0,0,0,.1),
                0 0 5px rgba(0,0,0,.1),
                0 1px 3px rgba(0,0,0,.3),
                0 3px 5px rgba(0,0,0,.2),
                0 5px 10px rgba(0,0,0,.25),
                0 10px 10px rgba(0,0,0,.2),
                0 20px 20px rgba(0,0,0,.15),
                0 30px 30px rgba(0,0,0,.1)
              `
            }}>
              Managing <br/> <span style={{ color: '#ffeb3b' }}>Committee</span>
            </h2>


            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Our mission is guided by dedicated professionals who believe that every child deserves a chance to shine and a community to belong to.
            </p>
          </motion.div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            justifyContent: 'center'
          }}>
            {[
              {
                img: "/bkphoto.jpeg",
                name: "Dr. Adv. Er. Bhagwan Nivrutti Elmame",
                role: "BENCH MAGISTRATE (MEMBER) OF THE CHILD WELFARE COMMITTEE"
              },
              {
                img: "/k1.jpeg",
                name: "Prof. Kishor Nivrutti Yelmame",
                role: "FOUNDER PRESIDENT"
              }
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{
                  flex: '1',
                  minWidth: '450px',
                  maxWidth: '650px',
                  background: '#fff', // White card background
                  borderRadius: '40px',
                  padding: '1.5rem', // Internal padding for the "card within card" look
                  boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '520px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '2rem',
                  position: 'relative'
                }}>
                  {/* Decorative Background Glow */}
                  <div style={{
                    position: 'absolute',
                    width: '450px',
                    height: '450px',
                    background: i === 0 ? 'rgba(255, 235, 59, 0.2)' : 'rgba(255, 87, 34, 0.2)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                  }} />

                  <div style={{
                    width: '550px',
                    height: '450px',
                    position: 'relative',
                    zIndex: 1,
                    background: '#fff',
                    padding: '8px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.25)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={leader.img}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        alt={leader.name}
                      />
                    </div>
                  </div>


                </div>



                <div style={{
                  padding: '0 1rem 1.5rem',
                  textAlign: 'left'
                }}>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1a202c', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                    {leader.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#e91e63', textTransform: 'uppercase', letterSpacing: '1.5px', lineHeight: 1.4 }}>
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '6rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, background: '#fff', color: '#e91e63' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/involved')}
              style={{
                padding: '1.2rem 3.5rem',
                background: 'transparent',
                border: '2px solid #fff',
                borderRadius: '50px',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Join Our Mission
            </motion.button>
          </motion.div>
        </div>
      </section>





    </div>
  );
};

export default OrphanSupport;
