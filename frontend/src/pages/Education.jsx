import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import sanakeImg from '../assets/sanake_school.png';
import sanskarLogo from '../assets/sanskar.jpeg';
import gurukulLogo from '../assets/gurukul.jpeg';
import bkLogo from '../assets/logo.jpeg';
import tarlImg from '../assets/tarl.avif';
import rahulPortrait from '../assets/rahul_portrait.png';
import sunitaPortrait from '../assets/sunita_portrait.png';
import karanPortrait from '../assets/karan.png';
import mayaPortrait from '../assets/maya.png';
import volunteerPortrait from '../assets/volunteer_portrait.png';
import women3Img from '../assets/women3.png';
import { BookOpen, GraduationCap, School, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCarousel } from '@/components/ui/testimonial';


// 3D Card component with mouse tracking
const Interactive3DCard = ({ children, intensity = 15, scale = 1.05 }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scale : 1})`);
  }, [intensity, scale, isHovered]);

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

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

export const renderText = (text) => {
  if (typeof text !== 'string') return text;
  return text.split('BK').map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}
      {i < arr.length - 1 && <span style={{ color: '#ff3b3b' }} className="font-bold glow-text">BK</span>}
    </React.Fragment>
  ));
};

const FloatingDecoration = ({ emoji, top, left, delay, duration, size = '2.5rem' }) => (
  <div style={{
    position: 'absolute',
    top,
    left,
    fontSize: size,
    opacity: 0.15,
    animation: `float3D ${duration}s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none',
    zIndex: -1,
    filter: 'blur(1px) drop-shadow(0 0 20px rgba(255,193,7,0.3))',
    transform: 'translateZ(0)',
    willChange: 'transform'
  }}>
    {emoji}
  </div>
);

const FloatingImage = ({ src, top, left, width, delay, duration, rotation = 0 }) => (
  <img 
    src={src} 
    alt="decoration"
    style={{
      position: 'absolute',
      top,
      left,
      width: width || '200px',
      opacity: 0.2,
      animation: `float3D ${duration}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      zIndex: -1,
      transform: `rotate(${rotation}deg) translateZ(0)`,
      filter: 'drop-shadow(0 0 30px rgba(255,193,7,0.4))'
    }}
  />
);

const EducationItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const itemRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsRevealed(true), 300);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '4rem',
        marginBottom: '6rem',
        padding: item.bgAnimated ? '8rem 5%' : '0',
        borderRadius: item.bgAnimated ? '60px' : '0',
        background: item.bgAnimated ? 'linear-gradient(180deg, #fff 0%, #fffdf5 15%, #fffdf5 85%, #fff 100%)' : 'transparent',
        backgroundSize: '100% 100%',
        animation: 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? `translateY(0) translateZ(0)` 
          : `translateY(50px) translateZ(0)`,
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
        flexWrap: 'wrap',
        boxShadow: item.bgAnimated ? '0 20px 60px rgba(0,0,0,0.05)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        perspective: '1000px'
      }}
    >
      {item.decorations && item.decorations.map((dec, i) => (
        <FloatingDecoration key={i} {...dec} />
      ))}
      {item.illustrations && item.illustrations.map((ill, i) => (
        <FloatingImage key={i} {...ill} />
      ))}
      
      {/* Animated Background Particles */}
      {isRevealed && item.bgAnimated && (
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                background: `rgba(255, ${193 + Math.random() * 62}, 7, ${Math.random() * 0.3 + 0.1})`,
                borderRadius: '50%',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + 's'
              }}
            />
          ))}
        </div>
      )}

      <div style={{ 
        flex: '1', 
        minWidth: '300px',
        transform: `translateZ(${mousePos.y * 0.3}px) translateX(${mousePos.x * 0.1}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, var(--pratham-yellow) 0%, #ff9800 100%)',
          padding: '0.5rem 1rem',
          fontWeight: '800',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          animation: isVisible ? 'revealFromLeft 0.8s both' : 'none',
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
          borderRadius: '8px',
          transform: 'translateZ(20px)'
        }}>
          {item.tag}
        </div>
        <h2 style={{
          fontSize: item.title.includes('Sanskar') ? '2.2rem' : '2.5rem',
          fontWeight: '900',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          whiteSpace: item.title.includes('Sanskar') ? 'nowrap' : 'normal',
          animation: item.title.includes('Sanskar') ? 'float 3s ease-in-out infinite' : 'none',
          textShadow: isVisible ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
          transform: `translateZ(${isVisible ? 30 : 0}px)`,
          transition: 'transform 0.5s ease-out'
        }}>
          {item.title.split('').map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                whiteSpace: char === ' ' ? 'pre' : 'normal',
                animation: isVisible
                  ? `typewriter 0.3s ease-out ${0.4 + i * 0.03}s both`
                  : 'none',
                textShadow: isVisible ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {char}
            </span>
          ))}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#555',
          textAlign: 'justify',
          transform: `translateZ(${isRevealed ? 20 : 0}px)`,
          opacity: isRevealed ? 1 : 0,
          transition: 'all 0.8s ease-out'
        }}>
          {renderText(item.description)}
        </p>
        
        {/* Interactive Stats Bar */}
        {item.stats && (
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {item.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  transform: `translateZ(${isRevealed ? 20 : 0}px)`,
                  opacity: isRevealed ? 1 : 0,
                  transition: `all 0.8s ease-out ${0.5 + i * 0.1}s`
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'var(--pratham-yellow)',
                  lineHeight: 1
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#888',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div
        className={isVisible ? "pop-up-card" : ""}
        style={{
          flex: '1',
          minWidth: '300px',
          height: '400px',
          overflow: 'hidden',
          boxShadow: `
            ${mousePos.x !== 0 || mousePos.y !== 0 
              ? `${mousePos.x * 2}px ${mousePos.y * 2}px 40px rgba(0,0,0,0.15)`
              : '0 20px 40px rgba(0,0,0,0.1)'
            }`,
          position: 'relative',
          borderRadius: '20px',
          transform: `
            perspective(1000px) 
            rotateX(${-mousePos.y * 0.2}deg) 
            rotateY(${mousePos.x * 0.2}deg)
            scale(${isHovered ? 1.02 : 1})
          `,
          transition: 'all 0.3s ease-out',
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(
            circle at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%,
            rgba(255, 193, 7, 0.1) 0%,
            transparent 50%
          )`,
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.3s ease-out',
          pointerEvents: 'none',
          zIndex: 1
        }} />
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transform: `
              scale(${isVisible ? 1 : 1.2})
              translateZ(0)
            `,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: `brightness(${1 + Math.abs(mousePos.y) * 0.01})`
          }}
        />
        
        {/* Hover Overlay with Info */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '2rem',
          color: '#fff',
          transform: 'translateZ(30px)'
        }} className="hoverOverlay">
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              Click to Explore
            </h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Discover more details about this initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const navigate = useNavigate();
  const [activeSeniorSlide, setActiveSeniorSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const seniorScrollRef = useRef(null);
  const videoScrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSeniorSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const [activeInitiative, setActiveInitiative] = useState(0);

  const educationalInitiatives = [
    {
      tag: "Foundational Learning",
      title: "Building Bright Futures",
      description: "BK Education and Welfare Society foundational literacy and numeracy programs target children in their most critical developmental years. By focusing on the basics of reading, writing, and arithmetic, we ensure that every child has the tools they need to succeed.",
      image: tarlImg,
      videoUrl: "Qm8d6k22oWY",
      icon: <BookOpen size={32} />
    },
    {
      tag: "Digital Literacy",
      title: "Bridging the Digital Divide",
      description: "We equip students from rural backgrounds with essential computer skills and internet literacy, ensuring they are competitive in today's technology-driven world.",
      image: "/src/assets/children_studying.png",
      videoUrl: "Qm8d6k22oWY",
      icon: <GraduationCap size={32} />
    },
    {
      tag: "Tribal Education",
      title: "Ashram School Support",
      description: "Dedicated support for tribal schools, focusing on providing high-quality educational resources, health hygiene workshops, and nutritional support to children in remote areas.",
      image: "/src/assets/main.jpg",
      videoUrl: "Qm8d6k22oWY",
      icon: <School size={32} />
    }
  ];

  const educationGalleryImages = [
    "/src/assets/children_studying.png",
    "/src/assets/boys_smiling_red.png",
    sanakeImg,
    "/src/assets/volunteers_smiling_faces.png",
    "/bkphoto.jpeg",
    tarlImg,
    "/educational_initiatives_bg_1776918506592.png",
    "/main_impact_banner.jpg"
  ];

  const seniorTestimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      avatar: rahulPortrait,
      description: "The guidance I received during my final years of high school was life-changing. From career counseling to competitive exam preparation, BK Education and Welfare Society provided the support I needed to secure a university placement."
    },
    {
      id: 2,
      name: "Priya Verma",
      avatar: mayaPortrait,
      description: "I never thought I could pursue higher education until I joined the BK Education and Welfare Society scholarship program. They didn't just give me resources; they gave me the confidence to dream big."
    },
    {
      id: 3,
      name: "Sneha Patil",
      avatar: sunitaPortrait,
      description: "The mentorship at BK Education and Welfare Society helped me navigate my board exams with confidence. Their workshops on time management were exactly what I needed during my final year."
    },
    {
      id: 4,
      name: "Aniket Shinde",
      avatar: karanPortrait,
      description: "The science laboratories and equipment supported by the BK Science Academy gave me hands-on experience that textbooks could never match. It truly inspired my passion for research."
    },
    {
      id: 5,
      name: "Rohan Joshi",
      avatar: volunteerPortrait,
      description: "From standard study materials to regular test series, the academic rigour and support from the instructors prepared me perfectly for my entrance exams. I am forever grateful."
    },
    {
      id: 6,
      name: "Divya Kulkarni",
      avatar: women3Img,
      description: "The teachers didn't just teach subjects; they mentored us through personal struggles. The emotional and financial support of the society helped my family keep me in school."
    }
  ];

  const schoolData = [
    {
      name: "SANSKAR ENGLISH MEDIUM SCHOOL",
      info: "Providing high-quality English medium education to students from all walks of life, bridging the educational divide.",
      image: sanskarLogo,
      link: "https://www.bksanskar.in/",
      isLogo: true
    },
    {
      name: "BK GURUKUL VIDYANIKETAN",
      info: "A traditional yet modern residential school focused on holistic development and foundational learning.",
      image: gurukulLogo,
      link: "https://bkgurukul.in/",
      isLogo: true
    },
    {
      name: "BK EDUCATIONAL AND WELFARE SOCIETY",
      info: "Empowering students with comprehensive educational resources and modern learning tools.",
      image: bkLogo,
      link: "https://bkeducation.co.in/",
      isLogo: true
    },
    {
      name: "BK SCIENCE ACADEMY",
      info: "Fostering scientific curiosity and excellence through specialized learning and practical knowledge.",
      image: bkLogo,
      link: "https://bkscience.in/",
      isLogo: true
    }
  ];

  const animations = `
    @keyframes kenBurns {
      0% { transform: scale(1) translate(0, 0); }
      50% { transform: scale(1.15) translate(-2%, -2%); }
      100% { transform: scale(1) translate(0, 0); }
    }
    @keyframes floatAround {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(30px, -50px) rotate(5deg); }
      66% { transform: translate(-20px, 20px) rotate(-5deg); }
    }
    .animated-school-card {
      position: relative;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 4px solid #fff;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    .animated-school-card:hover {
      transform: translateY(-20px) scale(1.02);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
      border-color: var(--pratham-yellow);
    }
    .animated-school-card:hover .ken-burns-bg {
      filter: brightness(0.6) saturate(1.2);
    }
    .floating-shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(40px);
      z-index: 0;
      opacity: 0.4;
      animation: floatAround 15s infinite ease-in-out;
    }
    @keyframes typewriter {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes revealFromLeft {
      0% { transform: translateX(-20px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes pulse-quote {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.15); opacity: 0.8; }
      100% { transform: scale(1); opacity: 0.5; }
    }
    @keyframes popIn {
      0% { transform: scale(0.9) translateY(30px); opacity: 0; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }
    .pop-up-card {
      animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      animation-delay: 1.8s; /* Start after swipe begins */
      opacity: 0;
    }
    .quote-animate {
      animation: pulse-quote 4s infinite ease-in-out;
    }
  `;

  return (
    <div className="education-page" style={{ background: '#fff', position: 'relative' }}>
      <style>{animations}</style>


      {/* Philosophy Section */}
      <section style={{ 
        height: '100vh',
        minHeight: '800px',
        textAlign: 'center',
        position: 'relative',
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/src/assets/main.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)'
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          zIndex: 1
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 5%' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '-5rem' }}
          >
            <h2 style={{ 
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', 
                fontWeight: '900', 
                marginBottom: '1rem',
                lineHeight: '1.2', 
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                textShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 80px rgba(255,193,7,0.3)'
              }}>
                <span style={{ color: '#ff3b3b' }}>BK</span> <span style={{ color: '#fff' }}>EDUCATION AND WELFARE SOCIETY PHILOSOPHY</span>
              </h2>
          </motion.div>

          {/* Overlapping Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px',
              padding: '3rem 2rem',
              maxWidth: '800px',
              margin: '3rem auto 0',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <Quote size={40} color="#ffc107" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
            <p style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
              fontWeight: '600', 
              fontStyle: 'italic',
              lineHeight: '1.4',
              color: '#fff',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              "We believe that every child, regardless of their background, deserves a foundation of quality education that unlocks their full potential."
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }}
          >
            <div style={{ width: '30px', height: '50px', border: '2px solid #fff', borderRadius: '15px', position: 'relative' }}>
              <div style={{ width: '4px', height: '10px', background: '#ffc107', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', borderRadius: '2px' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED INITIATIVES SLIDER ===== */}
      <section style={{ padding: '2rem 5% 2rem 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div style={{ flex: 1 }}>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ color: '#ff3b3b', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
              >
                Our Initiatives
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                  fontWeight: 900, 
                  marginTop: '1rem', 
                  color: '#1a1a1a',
                  letterSpacing: '-2px',
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
                    0 20px 20px rgba(0,0,0,.15)
                  `
                }}
              >
                Driving <span style={{ color: '#ffc107' }}>Educational</span> Change
              </motion.h2>
            </div>
            

          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeInitiative}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: windowWidth < 968 ? '1fr' : '1fr 1.2fr', 
                gap: '4rem',
                alignItems: 'center',
                background: '#fcfcf0',
                padding: '4rem',
                borderRadius: '48px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ order: windowWidth < 968 ? 2 : 1 }}>
                <div style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem', 
                  background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '14px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.03)', marginBottom: '2rem',
                  border: '1px solid #eee'
                }}>
                  <div style={{ color: '#ffc107' }}>{educationalInitiatives[activeInitiative].icon}</div>
                  <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {educationalInitiatives[activeInitiative].tag}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  {educationalInitiatives[activeInitiative].title}
                </h3>
                
                <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                  {renderText(educationalInitiatives[activeInitiative].description)}
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => navigate('/donate')}
                    style={{ 
                      padding: '1.2rem 2.5rem', background: '#ffc107', color: '#1a1a1a', 
                      border: 'none', borderRadius: '16px', fontWeight: 800, cursor: 'pointer',
                      boxShadow: '0 10px 20px rgba(255,193,7,0.2)', transition: 'all 0.3s ease'
                    }}
                  >
                    Support Project
                  </button>
                  <button 
                    onClick={() => setActiveVideo(educationalInitiatives[activeInitiative].videoUrl)}
                    style={{ 
                      padding: '1.2rem 2.5rem', background: '#fff', color: '#1a1a1a', 
                      border: '1px solid #eee', borderRadius: '16px', fontWeight: 800, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Play size={18} fill="#1a1a1a" /> Watch Impact
                  </button>
                </div>
              </div>

              <div style={{ order: windowWidth < 968 ? 1 : 2, position: 'relative' }}>
                <div style={{ 
                  borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                  aspectRatio: '4/3', border: '8px solid #fff'
                }}>
                  <img 
                    src={educationalInitiatives[activeInitiative].image} 
                    alt={educationalInitiatives[activeInitiative].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                {/* Floating Quote Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ 
                    position: 'absolute', bottom: '-20px', left: '-20px', background: '#fff',
                    padding: '1.5rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    maxWidth: '280px', border: '1px solid #f0f0f0'
                  }}
                >
                  <Quote size={24} color="#ffc107" style={{ marginBottom: '0.75rem' }} />
                  <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#333', margin: 0, fontWeight: 500 }}>
                    Empowering every child with the gift of knowledge.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* Our Schools Section */}
      <section style={{ padding: '2rem 5% 6rem 5%', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '900', 
              color: '#1a1a1a', 
              marginBottom: '1rem',
              textShadow: `
                1px 1px 0px #fff,
                2px 2px 0px rgba(0,0,0,0.1),
                3px 3px 0px rgba(0,0,0,0.08),
                4px 4px 0px rgba(0,0,0,0.06),
                5px 5px 15px rgba(0,0,0,0.1)
              `
            }}>
              OUR <span style={{ color: '#ff3b3b' }}>SCHOOLS</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--pratham-yellow)', margin: '0 auto' }}></div>
          </div>

          <style>{`
            .school-card-modern {
              background: #ffffff;
              border-radius: 24px;
              padding: 2.5rem 1.5rem;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              border: 1px solid #eaeaea;
              box-shadow: 0 10px 30px rgba(0,0,0,0.04);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              text-decoration: none;
              height: 100%;
              min-height: 420px;
              position: relative;
              overflow: hidden;
            }
            .school-card-modern::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 0;
              background: #FFC107;
              transition: height 0.4s ease;
              z-index: 0;
            }
            .school-card-modern:hover {
              transform: translateY(-12px);
              box-shadow: 0 30px 60px rgba(0,0,0,0.08);
              border-color: #FFC107;
            }
            .school-card-modern:hover::before {
              height: 6px;
            }
            .school-logo-container {
              width: 160px;
              height: 160px;
              margin-bottom: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              z-index: 1;
              background: #fff;
              border-radius: 50%;
              padding: 15px;
              box-shadow: 0 15px 35px rgba(0,0,0,0.06);
            }
            .school-card-modern:hover .school-logo-container {
              transform: scale(1.1) translateY(-5px);
              box-shadow: 0 25px 50px rgba(0,0,0,0.1);
            }
            .school-logo-container img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }
            .school-card-modern h3 {
              color: #1a1a1a;
              font-size: 1.2rem;
              font-weight: 900;
              margin-bottom: 1rem;
              z-index: 1;
              line-height: 1.3;
            }
            .school-card-modern p {
              color: #666;
              font-size: 1.05rem;
              line-height: 1.7;
              margin-bottom: 2.5rem;
              z-index: 1;
              flex-grow: 1;
            }
            .school-card-modern .visit-btn {
              display: inline-block;
              padding: 0.9rem 2.5rem;
              background: #fdfdfd;
              color: #333;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 1px;
              border-radius: 30px;
              transition: all 0.3s ease;
              z-index: 1;
              border: 2px solid #eaeaea;
            }
            .school-card-modern:hover .visit-btn {
              background: #FFC107;
              border-color: #FFC107;
              color: #1a1a1a;
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 193, 7, 0.3);
            }
          `}</style>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth < 1200 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(4, 1fr)', 
            gap: '2rem' 
          }}>
            {schoolData.map((school, idx) => (
              <React.Fragment key={idx}>
                {school.isLogo ? (
                  <a 
                    href={school.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="school-card-modern"
                  >
                    <div className="school-logo-container">
                      <img src={school.image} alt={school.name} />
                    </div>
                    
                    <h3>
                      {school.name.includes("BK") ? (
                        <>
                          <span style={{ color: '#ff3b3b' }}>BK</span> {school.name.replace("BK", "")}
                        </>
                      ) : school.name}
                    </h3>
                    <p>{school.info}</p>
                    
                    <span className="visit-btn">
                      Visit Website
                    </span>
                  </a>
                ) : (
                  <a 
                    href={school.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-school-card"
                    style={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      borderRadius: '24px',
                      height: '450px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div 
                      className="ken-burns-bg"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url("${school.image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'all 0.8s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                    }} />
                    
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      padding: '3rem 2rem 2rem',
                      color: '#fff'
                    }}>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.8rem' }}>
                        {school.name.includes("BK") ? (
                          <>
                            <span style={{ color: '#ff3b3b' }}>BK</span> {school.name.replace("BK", "")}
                          </>
                        ) : school.name}
                      </h3>
                      <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.5', marginBottom: '1.5rem' }}>{school.info}</p>
                      <span style={{ 
                        display: 'inline-block',
                        padding: '0.6rem 1.5rem',
                        background: 'var(--pratham-yellow)',
                        color: '#000',
                        fontWeight: '800',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                      }}>
                        Visit Website
                      </span>
                    </div>
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#e0f2fe',
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            marginBottom: '1rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            color: '#000',
            textShadow: `
              1px 1px 0px #fff,
              2px 2px 0px rgba(0,0,0,0.1),
              3px 3px 0px rgba(0,0,0,0.08),
              4px 4px 0px rgba(0,0,0,0.06),
              5px 5px 15px rgba(0,0,0,0.15)
            `
          }}>
            {renderText("Student Testimonials")}
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Hear from the children and seniors whose lives have been transformed through our education initiatives.
          </p>

          {/* Featured Video Testimonials Carousel */}
          <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Student Success Stories
            </h3>
            
            {(() => {
              const videoCards = [
                  { 
                    id: 'z18YX4x1Lw8', 
                    name: 'Palak Wagh', 
                    role: 'Student', 
                    academy: 'BK SCIENCE ACADEMY',
                    badgeType: 'red-std'
                  },
                  { 
                    id: 'cPLrVlE2uRQ', 
                    name: 'Sidharth Jadhav', 
                    role: 'Student:', 
                    details: '(12th pcmb)',
                    academy: 'BK SCIENCE ACADEMY',
                    badgeType: 'red-italics'
                  },
                  { 
                    id: 'y65ArcDxITw', 
                    name: 'Roshani Shirsath', 
                    role: 'Student', 
                    academy: 'BK SCIENCE ACADEMY',
                    badgeType: 'red-std'
                  },
                  { 
                    id: 'wn7i39rNblw', 
                    name: 'Sushant Dughad', 
                    role: 'Reasoning Faculty', 
                    academy: 'BK GROUP OF EDUCATION',
                    badgeType: 'white-faculty'
                  },
                  { 
                    id: 'mFnRVNOI2_E', 
                    name: 'Student Story', 
                    role: 'Student', 
                    academy: 'BK SCIENCE ACADEMY',
                    badgeType: 'red-std'
                  }
              ];
              const total = videoCards.length;
              const getSlot = (idx) => {
                let d = idx - activeVideoIdx;
                if (d > total / 2) d -= total;
                if (d < -total / 2) d += total;
                return d;
              };
              const slotStyle = (slot) => {
                const ABS = Math.abs(slot);
                if (ABS > 2) return { display: 'none' };
                return {
                  scale:   slot === 0 ? 1 : ABS === 1 ? 0.85 : 0.7,
                  xPct:    slot === 0 ? 0 : slot * 110,
                  rotate:  0,
                  opacity: slot === 0 ? 1 : ABS === 1 ? 0.7 : 0.4,
                  zIndex:  slot === 0 ? 5 : ABS === 1 ? 4 : 3,
                  blur:    slot === 0 ? 0 : ABS === 1 ? 1 : 3,
                };
              };

              return (
                <div style={{ position: 'relative', height: '620px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '280px', height: '520px' }}>
                    {videoCards.map((card, idx) => {
                      const slot = getSlot(idx);
                      const style = slotStyle(slot);
                      if (!style || style.display === 'none') return null;

                      return (
                        <motion.div 
                          key={idx}
                          initial={false}
                          animate={{
                            x: `${style.xPct}%`,
                            scale: style.scale,
                            rotate: 0,
                            opacity: style.opacity,
                            zIndex: style.zIndex,
                            filter: `blur(${style.blur}px)`
                          }}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          onClick={() => {
                            if (slot === 0) {
                              setActiveVideo(card.id);
                            } else {
                              setActiveVideoIdx(idx);
                            }
                          }}
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '280px', 
                            height: '520px', 
                            background: '#1a1a1a',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: slot === 0 ? '0 30px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)',
                            border: '6px solid #fff',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '1.2rem',
                            boxSizing: 'border-box'
                          }}
                        >
                          {/* Header */}
                          <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '0.4rem 0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            height: '45px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                          }}>
                            <img src={bkLogo} style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover' }} alt="BK Logo" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <span style={{ fontSize: '9px', fontWeight: 900, color: '#ff3b3b', lineHeight: 1 }}>
                                {card.academy.includes('SCIENCE') ? 'BK SCIENCE' : 'BK GROUP'}
                              </span>
                              <span style={{ fontSize: '11px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '0.3px', lineHeight: 1.1 }}>
                                {card.academy.includes('SCIENCE') ? 'ACADEMY' : 'OF EDUCATION'}
                              </span>
                            </div>
                          </div>

                          {/* YouTube Thumbnail / Play Button */}
                          <div style={{
                            position: 'relative',
                            flexGrow: 1,
                            marginTop: '0.8rem',
                            marginBottom: '0.8rem',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: '#000',
                            border: '3px solid #333'
                          }}>
                            <img 
                              src={`https://img.youtube.com/vi/${card.id}/maxresdefault.jpg`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                              alt={card.name}
                            />
                            
                            {/* Play Button Overlay */}
                            <div style={{ 
                              position: 'absolute', 
                              top: '50%', 
                              left: '50%', 
                              transform: 'translate(-50%, -50%)',
                              zIndex: 2,
                              background: 'linear-gradient(135deg, #ff3b3b 0%, #c00 100%)',
                              width: '54px',
                              height: '54px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 0 15px rgba(255, 59, 59, 0.5)',
                              border: '3px solid #fff'
                            }}>
                              <Play size={20} color="#fff" fill="#fff" style={{ marginLeft: '2px' }} />
                            </div>
                          </div>

                          {/* Bottom Badge */}
                          {card.badgeType === 'red-std' && (
                            <div style={{
                              background: '#8b0000',
                              borderRadius: '16px',
                              padding: '0.5rem 1rem',
                              textAlign: 'center',
                              color: '#fff',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.9 }}>
                                {card.role}
                              </div>
                              <div style={{ fontSize: '1rem', fontWeight: 800 }}>
                                {card.name}
                              </div>
                            </div>
                          )}

                          {card.badgeType === 'red-italics' && (
                            <div style={{
                              background: '#8b0000',
                              borderRadius: '16px',
                              padding: '0.5rem 1rem',
                              textAlign: 'center',
                              color: '#fff',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.9 }}>
                                {card.role}
                              </div>
                              <div style={{ fontSize: '1rem', fontWeight: 800, fontStyle: 'italic', fontFamily: 'serif' }}>
                                {card.name}
                              </div>
                              <div style={{ fontSize: '0.7rem', opacity: 0.8, marginTop: '2px' }}>
                                {card.details}
                              </div>
                            </div>
                          )}

                          {card.badgeType === 'white-faculty' && (
                            <div style={{
                              background: '#fff',
                              borderRadius: '16px',
                              padding: '0.5rem 1rem',
                              textAlign: 'center',
                              color: '#1a1a1a',
                              border: '1px solid #ddd',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                            }}>
                              <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#1a1a1a' }}>
                                Name: {card.name}
                              </div>
                              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#555', marginTop: '2px' }}>
                                Designation : {card.role}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}

                    {/* Navigation Controls */}
                    <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 10 }}>
                      <button
                        onClick={() => setActiveVideoIdx((i) => (i - 1 + total) % total)}
                        style={{ background: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s ease', color: '#1a1a1a' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#ffc107'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a1a1a'; }}
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {videoCards.map((_, i) => (
                          <div key={i} onClick={() => setActiveVideoIdx(i)} style={{ width: i === activeVideoIdx ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === activeVideoIdx ? '#ff3b3b' : '#ddd', transition: 'all 0.3s ease', cursor: 'pointer' }} />
                        ))}
                      </div>
                      <button
                        onClick={() => setActiveVideoIdx((i) => (i + 1) % total)}
                        style={{ background: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s ease', color: '#1a1a1a' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#ffc107'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a1a1a'; }}
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
          

          <div style={{ marginTop: '5rem', position: 'relative' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Higher Secondary & High School Seniors
            </h3>
            <TestimonialCarousel 
              testimonials={seniorTestimonials} 
              className="max-w-2xl mx-auto" 
              showArrows={true} 
              showDots={true} 
            />
          </div>
        </div>
      </section>


      


      {/* Stats Section - Compact Stripe */}
      <section style={{ 
        padding: '3.5rem 5%', 
        background: '#0c121e', 
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: '1' }}>
              <AnimatedCounter end={400} suffix="+" />
            </div>
            <div style={{ width: '40px', height: '4px', background: '#ffc107', margin: '0.8rem auto' }} />
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '2px', color: '#aaa' }}>
              Selected Students
            </div>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: '1' }}>
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div style={{ width: '40px', height: '4px', background: '#ffc107', margin: '0.8rem auto' }} />
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '2px', color: '#aaa' }}>
              Trained Volunteers
            </div>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: '1' }}>
              <AnimatedCounter end={15000} suffix="+" />
            </div>
            <div style={{ width: '40px', height: '4px', background: '#ffc107', margin: '0.8rem auto' }} />
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '2px', color: '#aaa' }}>
              Students Empowered
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section style={{ padding: '10rem 5%', textAlign: 'center', background: '#fff' }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
          fontWeight: '900', 
          marginBottom: '1.5rem', 
          color: '#1a1a1a', 
          letterSpacing: '-2px',
          lineHeight: '1.1',
          textShadow: `
            1px 1px 0px #fff,
            2px 2px 0px rgba(0,0,0,0.1),
            3px 3px 0px rgba(0,0,0,0.08),
            4px 4px 0px rgba(0,0,0,0.06),
            5px 5px 15px rgba(0,0,0,0.1)
          `
        }}>
          Help Us Shape <span style={{ color: '#ff3b3b' }}>The Future</span>
        </h2>
        <p style={{ fontSize: '1.4rem', color: '#666', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
          Your support can provide the books, tools, and teaching necessary to change a child's life forever. Every small contribution counts.
        </p>
        <button 
          onClick={() => navigate('/donate')}
          style={{
            background: '#ffc107',
            color: '#1a1a1a',
            padding: '1.5rem 4rem',
            fontSize: '1.4rem',
            fontWeight: '900',
            border: 'none',
            borderRadius: '16px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            transition: 'all 0.1s ease',
            boxShadow: `
              0 10px 0 #d39e00,
              0 20px 30px rgba(0,0,0,0.2)
            `,
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(2px)';
            e.currentTarget.style.boxShadow = `
              0 8px 0 #d39e00,
              0 15px 25px rgba(0,0,0,0.2)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = `
              0 10px 0 #d39e00,
              0 20px 30px rgba(0,0,0,0.2)
            `;
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(10px)';
            e.currentTarget.style.boxShadow = '0 0px 0 #d39e00, 0 5px 10px rgba(0,0,0,0.1)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(2px)';
            e.currentTarget.style.boxShadow = `
              0 8px 0 #d39e00,
              0 15px 25px rgba(0,0,0,0.2)
            `;
          }}
        >
          DONATE TO EDUCATION
        </button>
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
              background: 'rgba(0,0,0,0.9)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '900px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                  fontSize: '20px'
                }}
              >
                ×
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

export default Education;
