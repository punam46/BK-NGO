import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutInfographic from '../assets/About.png';
import boysSmilingImg from '../assets/boys_smiling_red.png';
import volunteersImg from '../assets/volunteers_smiling_faces.png';
import ghugeImg from '../assets/ghuge sir.jpeg';
import sanskarLogo from '../assets/sanskar.jpeg';
import gurukulLogo from '../assets/gurukul.jpeg';
import bkLogo from '../assets/logo.jpeg';
import sportsLogo from '../assets/bkSportsLogo.jpeg';
import bkTimesLogo from '../assets/bk-times-logo.jpg';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import ThreeDCarousel from '../components/ThreeDCarousel';
import { renderText } from './Education';

// 3D Card component for Sites
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

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
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // add this illustration t h
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Bank PO Exam Topper",
      quote: "The adaptive learning tools and one-on-one mentoring helped me crack the IBPS PO exam. I'm now serving as a probationary officer at a nationalized bank.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Software Developer",
      quote: "The vocational training program equipped me with modern web development skills. Today, I'm working remotely for a tech startup and mentoring others.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };



  const teamMembers = [
    { img: "/bkphoto.jpeg", name: "Dr. Adv. Er. Bhagwan Nivrutti Elmame", role: "Bench Magistrate (Member) of the Child Welfare Committee", pos: "top center" },
    { img: "/k1.jpeg", name: "Prof. Kishor Nivrutti Yelmame", role: "Founder President", pos: "top center" },
    { img: "/D1.jpeg", name: "Dnyaneshwar Nikalje", role: "Yoga & Physical Wellness Trainer", pos: "top center" },
    { img: p1, name: "Preeti Dube", role: "Master of Quantitative Aptitude and Mathematics", pos: "top center" },
    { img: p2, name: "Sushant Dughad", role: "Master of Logical Reasoning", pos: "top center" },
    { img: p3, name: "Dnaneshwar Rathod", role: "Specialization in General Science and General Knowledge", pos: "top center" },
    { img: p4, name: "Nandkishor Ghuge", role: "MPSC UPSC Aspirants & Gov Exams Specialist", pos: "top center" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Auto-slide effect for continuous motion
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  const institutionData = [
    {
      name: "BK Sports Academy",
      url: "www.bksports.in",
      link: "https://www.bksports.in/",
      logo: sportsLogo
    },
    {
      name: "BK Times",
      url: "www.bktimes.co.in",
      link: "https://www.bktimes.co.in/",
      logo: bkTimesLogo
    },
    {
      name: "BK Science Academy",
      url: "www.bkscience.in",
      link: "https://www.bkscience.in/",
      logo: bkLogo
    },
    {
      name: "BK Career Academy",
      url: "bkeducation.co.in",
      link: "https://bkeducation.co.in/",
      logo: bkLogo
    },
    {
      name: "SANSKAR ENGLISH MEDIUM SCHOOL",
      url: "www.bksanskar.in",
      link: "https://www.bksanskar.in/",
      logo: sanskarLogo
    },
    {
      name: "BK GURUKUL VIDYANIKETAN",
      url: "bkgurukul.in",
      link: "https://bkgurukul.in/",
      logo: gurukulLogo
    }
  ];


  return (
    <div className="about-page">
      {/* Modern Hero Section */}
      <section style={{
        padding: '11rem 5% 4rem', /* Further increased for even more clearance */
        background: '#fcfcf0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>

          {/* Left Content */}
          <div style={{ flex: '1.2', minWidth: '350px' }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: '900',
              color: '#333',
              lineHeight: '0.95',
              marginBottom: '2.5rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-3px'
            }}>
              Change Today.<br />
              <span style={{
                color: '#ff8c42',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: '900',
                fontSize: '1.05em',
                letterSpacing: '-1px',
                display: 'inline-block',
                marginTop: '0.2rem'
              }}>Change Tomorrow.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
              color: '#555',
              lineHeight: '1.7',
              maxWidth: '650px'
            }}>
              <span style={{ color: '#e53935', fontWeight: 'bold' }}>BK</span> Education and Welfare Society was founded in 2011 with the foundational idea of "Education for all". Since then, we have transformed this conviction into a powerful movement for social change—empowering India's youth through extensive social welfare initiatives, tribal education programs, and diverse community development projects on the path to a brighter, more inclusive future.
            </p>
          </div>

          {/* Right Visuals (Static Infographic Wheel) */}
          <div style={{ flex: '1', position: 'relative', minWidth: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '650px',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12))',
              borderRadius: '50%',
              overflow: 'hidden'
            }}>
              <img 
                src={AboutInfographic} 
                alt="BK Educational Society Programs Wheel" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secretary Profile Section */}
      <section className="about-profile-section" style={{ padding: '6rem 4%', background: '#fff' }}>
        <div className="container about-profile-grid" style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6rem',
          alignItems: 'start',
          padding: '0 4%'
        }}>
          {/* Photo Column */}
          <div className="profile-photo-col" style={{ position: 'relative', animation: 'fadeUp 1s ease-out forwards', flex: '1', minWidth: '400px' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: '#f9f9f9',
              padding: '10px'
            }}>
              <img
                src="/bkphoto.jpeg"
                alt="Dr. Adv. Er. Bhagwan Nivrutti Elmame"
                style={{ width: '100%', borderRadius: '12px 12px 0 0', display: 'block', objectFit: 'cover', objectPosition: 'top', height: '400px' }}
              />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#333', marginBottom: '0.3rem' }}>Dr. Adv. Er. Bhagwan Nivrutti Elmame</h3>
                <p style={{ fontSize: '1.05rem', color: '#000', fontWeight: '600' }}>Secretary, <span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="experience-badge desktop-only" style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              background: '#fff',
              padding: '1.2rem',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(255, 193, 7, 0.25)', /* Warm Golden Glow */
              borderLeft: '6px solid #FFC107', /* Primary Brand Yellow */
              textAlign: 'center',
              minWidth: '140px',
              zIndex: 10,
              animation: 'float 3s ease-in-out infinite'
            }}>
              <strong style={{ display: 'block', fontSize: '1.8rem', color: '#333', lineHeight: 1 }}>20+</strong>
              <span style={{ color: '#e53935', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>Years Experience</span>
            </div>
          </div>

          {/* Biography Column */}
          <div className="profile-bio-col" style={{ flex: '1.5', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.8rem', color: '#1a1a1a', marginBottom: '2rem', fontWeight: '800' }}>Leadership with <span style={{ color: '#e53935' }}>Vision</span></h2>

            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
              <p style={{ marginBottom: '1.2rem' }}>
                <strong>Dr. Adv. Er. Bhagwan Nivrutti Elmame</strong> is a distinguished academician, legal professional, administrator, and media leader with over two decades of dedicated experience in the fields of education, law, governance, and social development. His professional journey reflects a remarkable combination of academic excellence, legal expertise, institutional leadership, and commitment to public welfare.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                As the <strong>Chief Editor of <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</strong>, he actively promotes responsible journalism, public awareness, and the dissemination of knowledge related to legal, educational, social, and governance issues. Through his visionary leadership, the organization continuously works toward creating an informed, empowered, and socially responsible society.
              </p>
              <p>
                In his role as the <strong>Secretary of <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</strong>, Dr. Elmame leads various educational and social initiatives focused on community development, youth empowerment, social justice, and equal opportunities for all sections of society. His dedication has played a vital role in strengthening the organization’s mission of serving humanity through education and welfare activities.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="about-intro-section" style={{
        padding: '5rem 0',
        background: 'linear-gradient(rgba(249, 249, 249, 0.7), rgba(249, 249, 249, 0.7)), url("/yellow_watercolor_wash.png") center/cover no-repeat',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 8%',
          position: 'relative',
          zIndex: 2
        }}>
          {/* 3D Introduction Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFC107',
            padding: '0.8rem 2rem',
            marginBottom: '2.5rem',
            borderRadius: '8px',
            color: '#1a1a1a',
            fontWeight: '900',
            fontSize: '1.1rem',
            letterSpacing: '2px',
            boxShadow: `
              0 1px 0 #cc9a06,
              0 2px 0 #b38705,
              0 3px 0 #997304,
              0 4px 0 #806104,
              0 5px 0 #664d03,
              0 10px 20px rgba(0,0,0,0.2)
            `,
            transform: 'perspective(1000px) rotateX(5deg) translateY(-2px)',
            transition: 'all 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 1px 0 #cc9a06, 0 2px 0 #b38705, 0 3px 0 #997304, 0 4px 0 #806104, 0 5px 0 #664d03, 0 10px 20px rgba(0,0,0,0.2)';
          }}
          >
            <span style={{ marginRight: '12px', opacity: 0.7 }}>&gt;</span> INTRODUCTION
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1.5rem', color: '#1a1a1a', fontWeight: '800' }}>
            <span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society (NGO)
          </h2>

          <div style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.15rem)', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong><span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society</strong> is a dedicated non-governmental organization committed to promoting education, social welfare, and community development for the betterment of society. The organization actively works in areas such as education development, tribal welfare, child development, women empowerment, orphan support, rural development, disability affairs, and public awareness programs. Through various social initiatives, awareness campaigns, educational support activities, and welfare programs, the society aims to empower underprivileged communities and create equal opportunities for growth, dignity, and self-reliance. The NGO also encourages youth participation, social responsibility, and community engagement to build a stronger and more inclusive society.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The organization further promotes health and wellness through yoga and awareness initiatives focused on physical and mental well-being. <strong><span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society</strong> continuously works toward social justice, child protection, educational guidance, and support for vulnerable individuals by organizing welfare activities and community-driven programs. With a vision of creating an educated, healthy, and socially responsible society, the NGO remains committed to serving humanity through compassion, leadership, and sustainable social development initiatives across different communities and regions.
            </p>
            <p>
              Our institutions work with a shared vision of providing quality education, skill development, career guidance, sports training, and social awareness to students and communities. Through platforms such as <strong><span style={{ color: '#e53935' }}>BK</span> Sports Academy, <span style={{ color: '#e53935' }}>BK</span> Times, <span style={{ color: '#e53935' }}>BK</span> Science Academy, <span style={{ color: '#e53935' }}>BK</span> Career Academy, Sanskar English Medium School, and <span style={{ color: '#e53935' }}>BK</span> Gurukul Vidyaniketan</strong>, we aim to nurture knowledge, discipline, creativity, leadership, and social responsibility among individuals. Each institution is dedicated to excellence in its respective field while contributing toward the overall mission of educational growth, youth empowerment, and nation-building through accessible and value-based learning opportunities.
            </p>
          </div>
        </div>
      </section>
      {/* Key Focus Areas */}
      <section className="about-programs-preview" style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', padding: '0 4%' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '1.2rem' }}>
            Our Key <span style={{ color: '#e53935' }}>Programs</span>
          </h2>
          <div style={{ width: '80px', height: '5px', background: '#FFC107', margin: '0 auto', borderRadius: '10px' }}></div>
        </div>

        <ThreeDCarousel />
      </section>

      {/* Our Institutions Section */}
      <section className="about-institutions-section" style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div style={{ width: '6px', height: '45px', background: '#e53935', marginRight: '15px', borderRadius: '4px' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#004d99', margin: 0 }}>
              Our Institutions
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', 
            gap: '1.5rem' 
          }}>
            {institutionData.map((inst, idx) => (
              <motion.a 
                key={idx}
                href={inst.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#ffffff',
                  padding: '1.2rem 1.8rem',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid #eef2f6',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#3182ce';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#eef2f6';
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid #f0f0f0', 
                  marginRight: '1.2rem',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff'
                }}>
                  <img src={inst.logo} alt={inst.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 0.2rem 0', lineHeight: '1.2' }}>
                    {inst.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#3182ce', fontWeight: '600' }}>{inst.url}</span>
                    <div style={{ 
                      background: '#bee3f8', 
                      borderRadius: '4px', 
                      width: '18px', 
                      height: '18px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #d81b60 0%, #ad1457 100%)', /* Deeper 3D Gradient */
        padding: '5rem 0 5rem',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4%', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.8rem 2.2rem',
              marginBottom: '2rem',
              borderRadius: '6px',
              color: '#fff',
              fontWeight: '900',
              fontSize: '1.2rem',
              letterSpacing: '3px',
              border: '2px solid rgba(255,255,255,0.4)',
              textTransform: 'uppercase'
            }}>
              OUR TEAM
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              opacity: 0.9,
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              color: '#fff',
              textShadow: `
                0 1px 0 #c2185b,
                0 2px 0 #ad1457,
                0 3px 0 #880e4f,
                0 4px 0 #560633,
                0 10px 20px rgba(0,0,0,0.4)
              `
            }}>
              Managing <br /> Committee
            </h2>
            <div style={{ width: '60px', height: '6px', background: '#FFC107', margin: '0 auto 2rem', borderRadius: '10px' }}></div>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.95)',
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              <strong><span style={{ color: '#fff' }}>BK</span> Educational and Welfare Society</strong>'s leadership collective of Directors provides strategic direction to achieve our organizational objectives.
            </p>
          </div>

          {/* Infinite Continuous Slider */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '3rem 0',
            width: '100vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
          }}>
            <motion.div 
              animate={{
                x: [0, -2400] // Adjust based on content width
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                display: 'flex',
                gap: '4rem',
                width: 'max-content',
                padding: '0 2rem'
              }}
            >
              {/* Duplicate the team members for a seamless loop */}
              {[...teamMembers, ...teamMembers, ...teamMembers].map((member, i) => (
                <div key={i} style={{
                  width: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#fff',
                  flexShrink: 0
                }}>
                  {/* Circular Image Container with 3D Depth */}
                  <div style={{
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: `
                      0 15px 35px rgba(0,0,0,0.5),
                      0 5px 15px rgba(0,0,0,0.3),
                      inset 0 0 25px rgba(255,255,255,0.1)
                    `,
                    marginBottom: '1.8rem',
                    flexShrink: 0,
                    background: '#fff',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: member.pos || 'center'
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'center', padding: '0 1rem' }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '900', 
                      marginBottom: '0.4rem', 
                      color: '#fff', 
                      lineHeight: '1.2',
                      minHeight: '2.5rem'
                    }}>
                      {member.name}
                    </h4>
                    <div style={{ width: '30px', height: '2px', background: '#FFC107', margin: '0.4rem auto 0.8rem', borderRadius: '10px' }}></div>
                    <p style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: '800', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1.2px', 
                      color: 'rgba(255,255,255,0.9)', 
                      lineHeight: '1.4' 
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
