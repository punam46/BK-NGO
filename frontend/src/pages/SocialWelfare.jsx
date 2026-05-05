import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Heart, 
  Users, 
  Shield, 
  BookOpen, 
  Scale, 
  Wrench, 
  MessageCircle,
  Search,
  Package,
  Lightbulb,
  Rocket
} from 'lucide-react';

import bloodCampImg from '../assets/g16.jpeg';
import socialWelfImg from '../assets/g18.jpeg';
import g42 from '../assets/G42.jpeg';
import g43 from '../assets/G43.jpeg';
import g45 from '../assets/G45.jpeg';
import g48 from '../assets/G48.jpeg';
import g57 from '../assets/G57.jpeg';
import g58 from '../assets/G58.jpeg';
import g49 from '../assets/G49.jpeg';
import g50 from '../assets/G50.jpeg';
import g51 from '../assets/G51.jpeg';
import g52 from '../assets/G52.jpeg';
import g53 from '../assets/G53.jpeg';
import g54 from '../assets/G54.jpeg';
import g55 from '../assets/G55.jpeg';
import './SocialWelfare.css';

const SocialWelfare = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const methodology = [
    { step: "01", title: "Identification", text: "Identifying families and individuals in dire need through grassroots surveys.", icon: <Search className="w-6 h-6" /> },
    { step: "02", title: "Direct Relief", text: "Providing immediate assistance including food, health support, and shelter.", icon: <Package className="w-6 h-6" /> },
    { step: "03", title: "Awareness", text: "Educating the community about their long-term rights and government benefits.", icon: <Lightbulb className="w-6 h-6" /> },
    { step: "04", title: "Empowerment", text: "Enabling self-sustenance through skill-building and continuous mentoring.", icon: <Rocket className="w-6 h-6" /> },
  ];

  const welfareItems = [
    {
      title: "Social Awareness & Rights",
      description: "Extensive campaigns to raise awareness about critical social issues, including legal rights and gender equality.",
      icon: <Users className="w-8 h-8" />,
      color: "#3b82f6"
    },
    {
      title: "Community Welfare Services",
      description: "Direct and immediate support for underprivileged families through systemic resource distribution.",
      icon: <Heart className="w-8 h-8" />,
      color: "#ef4444"
    },
    {
      title: "Social Security Schemes",
      description: "Navigating and accessing various government social security benefits for the elderly and disabled.",
      icon: <Shield className="w-8 h-8" />,
      color: "#10b981"
    },
    {
      title: "Women Empowerment",
      description: "Focusing on self-reliance through vocational training and self-help groups for financial independence.",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "#f59e0b"
    },
    {
      title: "Legal Aid Clinics",
      description: "Providing free legal consultation and representation for marginalized individuals ensuring justice for all.",
      icon: <Scale className="w-8 h-8" />,
      color: "#8b5cf6"
    },
    {
      title: "Youth Skills Development",
      description: "Bridging the gap between education and employment with specialized skill training in modern trades.",
      icon: <Wrench className="w-8 h-8" />,
      color: "#ec4899"
    }
  ];

  const initiatives = [
    {
      tag: "Life-Saving Initiatives",
      title: "Blood Donation Camp",
      desc: "Our society organizes regular blood donation camps to bridge the gap between supply and demand in local healthcare facilities. By mobilizing community members and volunteers, we ensure that life-saving blood is available for those in critical need.",
      desc2: "These camps are a testament to our collective spirit. Every drop donated is a promise of hope.",
      img: bloodCampImg,
      color: "#FFC107",
    },
    {
      tag: "Environmental Stewardship",
      title: "Mountain Cleaning: Ramshej Fort",
      desc: "Protecting our historical monuments and local ecosystems is a core pillar of our social work. Our volunteers regularly trek to the historic Ramshej Fort to conduct extensive cleaning drives.",
      desc2: "We promote a culture of environmental responsibility and respect for our ancestors' legacy.",
      img: "/ramshej_cleaning.jpg",
      color: "#2e7d32",
    },
    {
      tag: "Social Justice & Equality",
      title: "Celebrating Dr. Ambedkar Jayanti",
      desc: "We honor the visionary leadership and legacy of Dr. Babasaheb Ambedkar by celebrating his birth anniversary with profound respect. Our society conducts educational programs and community dialogues.",
      desc2: "We reaffirm our commitment to empowering the marginalized and upholding constitutional rights.",
      img: "/ambedkar_jayanti.jpg",
      color: "#0d47a1",
    },
    {
      tag: "Essential Services",
      title: "Clean Water Access",
      desc: "Ensuring access to clean drinking water is a fundamental human right. BK Education and Welfare Society regularly organizes water supply drives in underprivileged areas.",
      desc2: "Our goal is to provide immediate relief while fostering awareness about water conservation and hygiene.",
      img: "/water_supply_social.jpg",
      color: "#03a9f4",
    },
    {
      tag: "Social Protection",
      title: "Stop Child Marriage",
      desc: "Dedicated to eradicating child marriage through grassroots awareness and community workshops. We work closely with families to emphasize the importance of education.",
      desc2: "Ensuring every girl has the right to a childhood and a future of her choice is our priority.",
      img: "/infant_marriage.jpg",
      color: "#673ab7",
    },
    {
      tag: "Safety Initiatives",
      title: "Personal Safety & Empowerment",
      desc: "Our 'Good Touch & Bad Touch' workshops empower children with the confidence to identify and report inappropriate behavior, creating a safer environment.",
      desc2: "Our Women Safety programs provide essential self-defense training and legal awareness.",
      img: "/women_safety.jpg",
      color: "#ffa000",
    },
  ];

  const galleryImages = [
    { src: g42, alt: "Social Welfare Activity 1" },
    { src: g45, alt: "Social Welfare Activity 4" },
    { src: g57, alt: "Social Welfare Activity 5" },
    { src: g48, alt: "Social Welfare Activity 7" },
    { src: g49, alt: "Social Welfare Activity 8" },
    { src: g50, alt: "Social Welfare Activity 9" },
    { src: g51, alt: "Social Welfare Activity 10" },
    { src: g52, alt: "Social Welfare Activity 11" },
    { src: g53, alt: "Social Welfare Activity 12" },
    { src: g54, alt: "Social Welfare Activity 13" },
    { src: g55, alt: "Social Welfare Activity 14" },
    { src: g58, alt: "Social Welfare Activity 15" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % initiatives.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [initiatives.length]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % initiatives.length);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="sw-page" ref={containerRef}>
      {/* ===== HERO SECTION ===== */}
      <section className="sw-hero">
        <div className="sw-hero-bg">
          <div className="sw-hero-blob blob-1"></div>
          <div className="sw-hero-blob blob-2"></div>
        </div>
        
        <div className="sw-hero-content">
          <motion.span 
            className="sw-hero-eyebrow"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
          >
            Social Transformation
          </motion.span>
          
          <motion.h1 
            className="sw-hero-title"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {["Upholding", "Dignity,"].map((word, i) => (
              <motion.span key={i} variants={fadeInUp} style={{ display: 'inline-block', marginRight: '15px' }}>{word}</motion.span>
            ))}
            <br />
            <motion.span 
              variants={fadeInUp} 
              className="sw-hero-accent"
              style={{ color: '#FFC107' }}
            >
              Empowering Lives.
            </motion.span>
          </motion.h1>

          <motion.p 
            className="sw-hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Through direct intervention and systemic awareness, we ensure that no individual is left behind. Our initiatives provide both immediate relief and long-term security to marginalized communities.
          </motion.p>
        </div>

        <div className="sw-scroll-indicator">
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>SCROLL</span>
          <div className="sw-scroll-line"></div>
        </div>
      </section>

      {/* ===== METHODOLOGY SECTION ===== */}
      <section className="sw-methodology">
        <div className="sw-container">
          <div className="sw-section-header">
            <motion.span 
              className="sw-section-eyebrow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Framework
            </motion.span>
            <motion.h2 
              className="sw-section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              How We Create Change
            </motion.h2>
            <motion.p 
              className="sw-section-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              A systematic approach to ensuring sustainable social welfare through four interconnected phases of impact.
            </motion.p>
          </div>

          <motion.div 
            className="sw-path-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {methodology.map((m, idx) => (
              <motion.div key={idx} className="sw-path-step" variants={fadeInUp}>
                <div className="sw-step-number-bg">{m.step}</div>
                <div className="sw-step-icon-wrap">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOCUS AREAS SECTION ===== */}
      <section className="sw-focus">
        <div className="sw-container">
          <div className="sw-section-header">
            <span className="sw-section-eyebrow">Strategic Focus</span>
            <h2 className="sw-section-title">Key Areas of Impact</h2>
            <p className="sw-section-subtitle">Comprehensive social services designed to uplift every segment of the community.</p>
          </div>

          <motion.div 
            className="sw-focus-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {welfareItems.map((item, idx) => (
              <motion.div key={idx} className="sw-focus-card" variants={fadeInUp}>
                <div className="sw-focus-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="sw-focus-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== INITIATIVES SLIDER ===== */}
      <section className="sw-initiatives">
        <div className="sw-container">
          <div className="sw-section-header">
            <span className="sw-section-eyebrow">Visual Stories</span>
            <h2 className="sw-section-title">Recent Initiatives</h2>
          </div>

          <div className="sw-slider-outer">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                className="sw-slider-main"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="sw-slider-content-side">
                  <span className="sw-slide-tag" style={{ color: initiatives[currentSlide].color }}>{initiatives[currentSlide].tag}</span>
                  <h3 className="sw-slide-title">{initiatives[currentSlide].title}</h3>
                  <p className="sw-slide-desc">{initiatives[currentSlide].desc}</p>
                  <p className="sw-slide-desc-2">{initiatives[currentSlide].desc2}</p>
                  
                  <div className="sw-slider-nav">
                    <button className="sw-nav-btn" onClick={handlePrev}><ChevronLeft size={24} /></button>
                    <div className="sw-slide-counter">
                      <span className="sw-current-num">{String(currentSlide + 1).padStart(2, '0')}</span>
                      <span style={{ opacity: 0.3, margin: '0 10px' }}>/</span>
                      <span>{String(initiatives.length).padStart(2, '0')}</span>
                    </div>
                    <button className="sw-nav-btn" onClick={handleNext}><ChevronRight size={24} /></button>
                  </div>
                </div>

                <div className="sw-slider-image-side">
                  <motion.div 
                    className="sw-slide-image"
                    style={{ backgroundImage: `url(${initiatives[currentSlide].img})` }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 8 }}
                  />
                  <div className="sw-slide-overlay" />
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="sw-progress-bar-wrap">
              <motion.div 
                className="sw-progress-bar-fill"
                style={{ background: initiatives[currentSlide].color }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / initiatives.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT GALLERY ===== */}
      <section className="sw-gallery-sec">
        <div className="sw-container">
          <div className="sw-section-header">
            <motion.span 
              className="sw-section-eyebrow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Impact in Action
            </motion.span>
            <motion.h2 
              className="sw-section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Program Gallery
            </motion.h2>
            <motion.p 
              className="sw-section-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              A visual glimpse into our various social welfare initiatives and community outreach programs.
            </motion.p>
          </div>

          <motion.div 
            className="sw-gallery-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx} 
                className="sw-gallery-item"
                variants={fadeInUp}
              >
                <div className="sw-gallery-img-wrap">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="sw-gallery-overlay">
                    <span className="sw-gallery-zoom">+</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL BANNER SECTION ===== */}
      <section className="sw-banner-sec">
        <div className="sw-banner-container">
          <motion.div 
            className="sw-banner-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <img src={socialWelfImg} alt="Empowerment" className="sw-banner-img" />
            <div className="sw-banner-overlay">
              <div className="sw-banner-text">
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Building a Future <br /> Where No One is Left Behind.
                </motion.h3>
                <motion.button 
                  className="sw-nav-btn"
                  style={{ width: 'auto', padding: '0 40px', borderRadius: '50px', display: 'flex', gap: '15px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/involved')}
                >
                  Join Our Mission <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialWelfare;
