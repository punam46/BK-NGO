import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useSpring } from 'framer-motion';
import { Heart, Star, Shield, BookOpen, Users, TrendingUp, HandHeart, ArrowUpRight, Sparkles, Target, Activity, Globe, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import womenEmpowermentImg from '../assets/women1.jpeg';
import women3Img from '../assets/women3.png';

// High-fidelity Number Counter
const AnimatedCounter = ({ to, duration = 2.5, prefix = "", suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      if (nodeRef.current) {
        nodeRef.current.innerText = prefix + Math.floor(easeProgress * to).toLocaleString() + suffix;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, to, duration, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
};

// Ultimate 3D Tilt Card for Bento Grid
const TiltCard = ({ children, intensity = 15, className = "" }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -intensity;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * intensity;
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform',
        height: '100%',
        position: 'relative',
        zIndex: isHovered ? 20 : 1
      }}
    >
      {children}
    </div>
  );
};

const WomanEmpowerment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Mouse Follower State for Hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const heroY = useTransform(smoothScrollY, [0, 1], [0, 800]);
  const heroOpacity = useTransform(smoothScrollY, [0, 0.15], [1, 0]);
  const lineDraw = useTransform(smoothScrollY, [0.2, 0.8], [0, 1]);

  const primary = "#d32f2f"; 
  const accent = "#ff8f00";
  const dark = "#0a0a0a";

  return (
    <div ref={containerRef} style={{ background: '#fff', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- 1. HERO SECTION (ULTRA DYNAMIC) --- */}
      <section style={{ 
        position: 'relative', 
        background: '#f8f9fa', overflow: 'hidden', paddingTop: '4rem', paddingBottom: '6rem'
      }}>
        {/* Interactive Mouse Glow Background */}
        {!isMobile && (
          <motion.div 
            animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
            transition={{ type: "spring", damping: 40, stiffness: 200, mass: 0.5 }}
            style={{ 
              position: 'absolute', top: 0, left: 0, width: '800px', height: '800px', 
              background: `radial-gradient(circle, ${primary}15 0%, transparent 60%)`, 
              borderRadius: '50%', pointerEvents: 'none', zIndex: 0 
            }}
          />
        )}

        <motion.div 
          style={{ 
            maxWidth: '1400px', margin: '0 auto', display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', 
            gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10,
            padding: '0 5%', y: heroY, opacity: heroOpacity
          }}
        >
          {/* Hero Content */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} transition={{ duration: 1, ease: "easeOut" }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `${primary}15`, padding: '8px 20px', borderRadius: '50px', marginBottom: '2rem' }}
            >
              <Activity size={16} color={primary} />
              <span style={{ color: primary, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Live Impact Program</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900, color: dark, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '1.5rem' }}
            >
              Redefining <br/>
              <span style={{ position: 'relative', color: 'transparent', WebkitTextStroke: `1.5px ${dark}` }}>Strength.</span><br/>
              <span style={{ background: `linear-gradient(120deg, ${primary}, ${accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Rewriting Destinies.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: '1.25rem', color: '#555', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '550px', fontWeight: 500 }}
            >
              Women reinvest up to 90% of their income back into their families. Empowering a woman isn't just an initiative—it's the highest-yielding investment in humanity.
            </motion.p>


          </div>

          {/* Hero Dynamic Image Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '80%', margin: '0 auto', marginTop: '-14rem' }}
          >
            <img src={womenEmpowermentImg} alt="Empowerment" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- 2. THE REALITY (DATA DRIVEN INSIGHTS) --- */}
      <section style={{ padding: '8rem 5%', background: dark, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-50%', right: '-20%', width: '1000px', height: '1000px', background: `radial-gradient(circle, ${primary}20 0%, transparent 60%)`, borderRadius: '50%', zIndex: 0 }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-1px' }}>The Power of <span style={{ color: primary }}>Parity</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '700px', margin: '1rem auto 0' }}>Global data proves that investing in women is the most effective way to lift entire communities out of poverty.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {[
              { stat: "90%", title: "Income Reinvestment", desc: "Women reinvest up to 90% of their income into their families, compared to 30-40% for men.", icon: <Heart /> },
              { stat: "$28T", title: "Economic Boost", desc: "Advancing women's equality could add $28 trillion to global GDP by 2025.", icon: <Globe /> },
              { stat: "2.5x", title: "Education Impact", desc: "Children of educated mothers are 2.5 times more likely to survive past the age of five.", icon: <BookOpen /> }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '30px', textAlign: 'center' }}
              >
                <div style={{ width: '60px', height: '60px', background: `${primary}20`, color: primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>{item.icon}</div>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>{item.stat}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: accent }}>{item.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.6, fontSize: '1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID (ULTRA PREMIUM INITIATIVES) --- */}
      <section style={{ padding: '10rem 5%', background: '#fafafa', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ color: primary, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Strategic Initiatives</span>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: dark, lineHeight: 1.1, marginTop: '1rem' }}>The <span style={{ color: primary }}>Architecture</span> of Change.</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
            gridAutoRows: 'minmax(300px, auto)', 
            gap: '2rem' 
          }}>
            
            {/* Bento Block 1: Large (Skill Dev) */}
            <TiltCard className={isMobile ? "" : "col-span-2 row-span-2"} intensity={8}>
              <div style={{ background: dark, borderRadius: '40px', padding: '4rem', height: '100%', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', background: `radial-gradient(ellipse at right, ${primary}40 0%, transparent 70%)` }}></div>
                <Target size={50} color={accent} style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2 }}>Vocational & Digital Literacy</h3>
                <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: 1.7, maxWidth: '400px', marginBottom: '2rem' }}>We don't just teach skills; we build careers. From advanced tailoring to digital accounting, we equip women to thrive in the modern economy.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['15+ Skill Centers Across State', 'AI & Digital Marketing Basics', 'Industry-Certified Diplomas'].map((li, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', fontWeight: 600 }}>
                      <div style={{ width: '8px', height: '8px', background: accent, borderRadius: '50%' }}></div> {li}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>

            {/* Bento Block 2: Wide (Microfinance) */}
            <TiltCard className={isMobile ? "" : "col-span-2 row-span-1"} intensity={10}>
              <div style={{ background: primary, borderRadius: '40px', padding: '3rem', height: '100%', color: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Zap size={150} color="#fff" style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }} />
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Micro-Capital Engine</h3>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, maxWidth: '90%' }}>Providing collateral-free seed funding and establishing Self Help Groups (SHGs) to spark rural entrepreneurship.</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '10px', paddingTop: '1.5rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900 }}><AnimatedCounter to={2} prefix="₹" suffix=".5Cr+" /></span>
                  <span style={{ fontWeight: 600, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Capital Deployed</span>
                </div>
              </div>
            </TiltCard>

            {/* Bento Block 3: Small (Health) */}
            <TiltCard className={isMobile ? "" : "col-span-1 row-span-1"} intensity={15}>
              <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '40px', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Heart size={40} color={primary} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: dark, marginBottom: '1rem' }}>Holistic Health</h3>
                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>Maternal care, menstrual hygiene, and nutritional support for strong communities.</p>
              </div>
            </TiltCard>

            {/* Bento Block 4: Small (Rights) */}
            <TiltCard className={isMobile ? "" : "col-span-1 row-span-1"} intensity={15}>
              <div style={{ background: accent, borderRadius: '40px', padding: '2.5rem', height: '100%', color: dark, display: 'flex', flexDirection: 'column' }}>
                <Shield size={40} color={dark} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Legal Advocacy</h3>
                <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 500 }}>Protecting rights, offering free legal aid, and conducting self-defense workshops.</p>
              </div>
            </TiltCard>

          </div>
        </div>
      </section>



      {/* --- 4. KEY PILLARS OF EMPOWERMENT (NEW IMAGE SECTION) --- */}
      <section style={{ padding: '8rem 5%', background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`, zIndex: 0 }}></div>
            <img src={women3Img} alt="Women Empowerment Journey" style={{ width: '100%', height: 'auto', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }} />
          </motion.div>

          {/* Right: Main Points */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span style={{ color: primary, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Core Focus Areas</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: dark, lineHeight: 1.1, margin: '1rem 0 2.5rem' }}>
              Building a <span style={{ color: accent }}>Foundation</span> for Lasting Change.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: <BookOpen size={24} />, title: "Education & Leadership", desc: "Equipping women with the knowledge and confidence to take on leadership roles in their communities." },
                { icon: <TrendingUp size={24} />, title: "Economic Independence", desc: "Providing financial literacy, vocational training, and access to micro-credit to ensure self-reliance." },
                { icon: <Heart size={24} />, title: "Health & Well-being", desc: "Ensuring access to maternal health resources, nutritional support, and mental wellness programs." },
                { icon: <Shield size={24} />, title: "Rights & Advocacy", desc: "Creating awareness about legal rights and providing strong support systems against gender-based issues." }
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: '#f8f9fa' }}
                  style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', borderRadius: '20px', transition: 'background 0.3s ease', cursor: 'default' }}
                >
                  <div style={{ width: '60px', height: '60px', background: `${primary}15`, color: primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: dark, marginBottom: '0.5rem' }}>{point.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- 5. VISION & CTA --- */}
      <section style={{ padding: '8rem 5%', background: dark, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-50%', left: '-20%', width: '1000px', height: '1000px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '40%', zIndex: 0 }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '2rem' }}>
            Empower a Woman.<br/>
            <span style={{ color: accent }}>Transform a Nation.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#aaa', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
            The data is clear. The need is urgent. Join our mission to create an unstoppable wave of female leadership and financial independence.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/donate')}
            style={{ 
              background: `linear-gradient(45deg, ${primary}, #b71c1c)`, color: '#fff', padding: '1.5rem 4rem', 
              borderRadius: '50px', fontWeight: 900, border: 'none', cursor: 'pointer', fontSize: '1.2rem',
              textTransform: 'uppercase', letterSpacing: '2px', boxShadow: `0 20px 40px ${primary}40`,
              display: 'inline-flex', alignItems: 'center', gap: '15px'
            }}
          >
            Sponsor a Future <ArrowUpRight size={24} />
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default WomanEmpowerment;
