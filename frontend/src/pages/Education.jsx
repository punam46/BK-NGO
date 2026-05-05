import React, { useState, useEffect, useRef } from 'react';
import sanakeImg from '../assets/sanake_school.png';
import sanskarLogo from '../assets/sanskar.jpeg';
import gurukulLogo from '../assets/gurukul.jpeg';

export const renderText = (text) => {
  if (typeof text !== 'string') return text;
  return text.split('BK').map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}
      {i < arr.length - 1 && <span style={{ color: 'red' }}>BK</span>}
    </React.Fragment>
  ));
};

const FloatingDecoration = ({ emoji, top, left, delay, duration }) => (
  <div style={{
    position: 'absolute',
    top,
    left,
    fontSize: '2.5rem',
    opacity: 0.1,
    animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none',
    zIndex: -1,
    filter: 'blur(1px)'
  }}>
    {emoji}
  </div>
);

const FloatingImage = ({ src, top, left, width, delay, duration }) => (
  <img 
    src={src} 
    alt="decoration"
    style={{
      position: 'absolute',
      top,
      left,
      width: width || '200px',
      opacity: 0.15,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      zIndex: -1
    }}
  />
);

const EducationItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
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

  return (
    <div
      ref={itemRef}
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
        animation: 'none', // Remove the moving gradient as it might be too much with floating items
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        flexWrap: 'wrap',
        boxShadow: item.bgAnimated ? '0 20px 60px rgba(0,0,0,0.05)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {item.decorations && item.decorations.map((dec, i) => (
        <FloatingDecoration key={i} {...dec} />
      ))}
      {item.illustrations && item.illustrations.map((ill, i) => (
        <FloatingImage key={i} {...ill} />
      ))}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--pratham-yellow)',
          padding: '0.5rem 1rem',
          fontWeight: '800',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          animation: isVisible ? 'revealFromLeft 0.8s both' : 'none'
        }}>
          {item.tag}
        </div>
        <h2 style={{ 
          fontSize: item.title.includes('Sanskar') ? '2.2rem' : '2.5rem', 
          fontWeight: '800', 
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          whiteSpace: item.title.includes('Sanskar') ? 'nowrap' : 'normal',
          animation: item.title.includes('Sanskar') ? 'float 3s ease-in-out infinite' : 'none'
        }}>
          {item.title.split('').map((char, i) => (
            <span key={i} style={{ 
              display: 'inline-block', 
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              animation: isVisible ? `typewriter 0.3s ease-out ${0.4 + i * 0.03}s both` : 'none'
            }}>
              {char}
            </span>
          ))}
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: '#555',
          textAlign: 'justify'
        }}>
          {renderText(item.description)}
        </p>
      </div>
      <div className={isVisible ? "pop-up-card" : ""} style={{ 
        flex: '1', 
        minWidth: '300px',
        height: '400px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        position: 'relative',
        borderRadius: '20px'
      }}>
        <img 
          src={item.image} 
          alt={item.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: isVisible ? 'scale(1)' : 'scale(1.2)',
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }} 
        />
      </div>
    </div>
  );
};

const Education = () => {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [shouldSwipe, setShouldSwipe] = useState(false);
  const [activeSeniorSlide, setActiveSeniorSlide] = useState(0);
  const seniorScrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSeniorSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldSwipe(true);
    }, 500);
    
    const removeTimer = setTimeout(() => {
      setIsIntroActive(false);
    }, 1600); // Remove from DOM after animation completes (500 + 1100 duration)
    
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  const educationItems = [
    {
      tag: "Foundational Learning",
      title: "Building Bright Futures",
      description: "BK Education and Welfare Society foundational literacy and numeracy programs target children in their most critical developmental years. By focusing on the basics of reading, writing, and arithmetic, we ensure that every child has the tools they need to succeed in school and beyond. We use interactive teaching methods and local language support to make learning accessible and enjoyable.",
      image: "/educational_initiatives_bg_1776918506592.png"
    },
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
      name: "GURUKUL VIDYANIKETAN",
      info: "A traditional yet modern residential school focused on holistic development and foundational learning.",
      image: gurukulLogo,
      link: "https://bkgurukul.in/",
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

      {/* Intro Swipe Overlay */}
      {isIntroActive && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: 'url("/src/assets/edu.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 9999,
          transition: 'transform 1.1s cubic-bezier(0.65, 0, 0.35, 1)',
          transform: shouldSwipe ? 'translateX(-100%)' : 'translateX(0)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0))'
          }} />
        </div>
      )}

      {/* Philosophy Section */}
      <section style={{ 
        padding: '8rem 5%', 
        textAlign: 'center',
        position: 'relative',
        background: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/src/assets/main.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4))'
        }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '900', 
            marginBottom: '2rem',
            letterSpacing: '4px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            <span style={{ color: '#ff3b3b' }}>BK</span> <span style={{ color: 'var(--pratham-yellow)' }}>Education and Welfare Society PHILOSOPHY</span>
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', 
            fontWeight: '700', 
            fontStyle: 'italic',
            lineHeight: '1.6',
            color: '#fff',
            maxWidth: '800px',
            margin: '0 auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            "We believe that every child, regardless of their background, deserves a foundation of quality education that unlocks their full potential."
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#fff',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {educationItems.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>


      {/* Our Schools Section */}
      <section style={{ padding: '6rem 5%', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem' }}>
              Our <span style={{ color: '#e53935' }}>Schools</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--pratham-yellow)', margin: '0 auto' }}></div>
          </div>

          <style>{`
            .school-card-modern {
              background: #ffffff;
              border-radius: 24px;
              padding: 3.5rem 2.5rem;
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
              min-height: 450px;
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
              font-size: 1.6rem;
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem' 
          }}>
            {schoolData.map((school, idx) => (
              school.isLogo ? (
                <a 
                  key={idx}
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="school-card-modern"
                >
                  <div className="school-logo-container">
                    <img src={school.image} alt={school.name} />
                  </div>
                  
                  <h3>{school.name}</h3>
                  <p>{school.info}</p>
                  
                  <span className="visit-btn">
                    Visit Website
                  </span>
                </a>
              ) : (
                <a 
                  key={idx}
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
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.8rem' }}>{school.name}</h3>
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
              )
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: 'linear-gradient(rgba(224, 242, 241, 0.85), rgba(224, 242, 241, 0.85)), url("/blue_watercolor_wash.png") center/cover no-repeat',
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {renderText("Student Testimonials")}
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Hear from the children and seniors whose lives have been transformed through our education initiatives.
          </p>
          
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: '#333' }}>Foundational & Primary Level</h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2.5rem', 
              flexWrap: 'wrap' 
            }}>
              {[
                { id: 'z18YX4x1Lw8', title: 'Testimonial 1' },
                { id: 'Jof92fozWuk', title: 'Testimonial 2' },
                { id: 'cPLrVlE2uRQ', title: 'Testimonial 3' }
              ].map((video, idx) => (
                <div key={idx} style={{ 
                  width: '100%', 
                  maxWidth: '315px', 
                  height: '500px', // Reduced height to crop
                  background: '#000',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                  border: '8px solid #333',
                  position: 'relative'
                }}>
                  <iframe 
                    width="100%" 
                    height="560px" // Original height
                    src={`https://www.youtube.com/embed/${video.id}?controls=0&modestbranding=1&rel=0`}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0'
                    }}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '5rem', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: '#333' }}>Higher Secondary & High School Seniors</h3>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(calc(-${activeSeniorSlide * 100}% - ${activeSeniorSlide * 1.5}rem))`,
              padding: '1rem 0',
              width: '100%'
            }}>
              {[
                {
                  quote: "The guidance I received during my final years of high school was life-changing. From career counseling to competitive exam preparation, BK Education and Welfare Society provided the support I needed to secure a university placement.",
                  author: "Rahul Sharma",
                  role: "High School Senior, Batch of 2024"
                },
                {
                  quote: "I never thought I could pursue higher education until I joined the BK Education and Welfare Society scholarship program. They didn't just give me resources; they gave me the confidence to dream big.",
                  author: "Priya Verma",
                  role: "Higher Secondary Student"
                },
                {
                  quote: "The mentorship at BK Education and Welfare Society helped me navigate my board exams with confidence. Their workshops on time management were exactly what I needed during my final year.",
                  author: "Sneha Patil",
                  role: "High School Graduate"
                }
              ].map((card, idx) => (
                <div key={idx} style={{
                  flex: '0 0 100%',
                  background: '#fff',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  textAlign: 'left',
                  position: 'relative',
                  borderLeft: '6px solid var(--pratham-yellow)',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    opacity: 0.5,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <svg className="quote-animate" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--pratham-yellow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-1-2.25-2.25-2.25h-4.5C2.125 2.75 1.125 3.75 1.125 5v5.25c0 1.25 1 2.25 2.25 2.25h2.25c0 2.25-2.25 3.75-2.625 4.5"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-1-2.25-2.25-2.25h-4.5c-1.125 0-2.125 1-2.125 2.25v5.25c0 1.25 1 2.25 2.25 2.25h2.25c0 2.25-2.25 3.75-2.625 4.5"/>
                    </svg>
                  </div>
                  <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#555', marginBottom: '2rem', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>
                    "{card.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#eee' }}></div>
                    <div>
                      <h4 style={{ fontWeight: '800', fontSize: '1rem', margin: 0 }}>{card.author}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>{card.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots for the slider */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveSeniorSlide(i)}
                  style={{
                    width: i === activeSeniorSlide ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === activeSeniorSlide ? 'var(--pratham-yellow)' : '#ddd',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Illustration Transition */}
      <section style={{ textAlign: 'center', padding: '4rem 0 2rem', background: '#fff' }}>
        <img 
          src="/education_final_banner.webp" 
          alt="Education Banner" 
          style={{ 
            width: '100%', 
            maxWidth: '1400px', 
            opacity: 1,
            display: 'block',
            margin: '0 auto'
          }} 
        />
      </section>

      

      {/* Stats Section */}
      <section style={{ 
        padding: '8rem 5%', 
        background: 'var(--pratham-black)', 
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap', 
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--pratham-yellow)' }}>10k+</div>
            <div style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Students Empowered</div>
          </div>

          <div>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--pratham-yellow)' }}>500+</div>
            <div style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Trained Volunteers</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Help Us Shape the Future</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Your support can provide the books, tools, and teaching necessary to change a child's life forever.
        </p>
        <button style={{
          background: 'var(--pratham-yellow)',
          color: '#000',
          padding: '1.2rem 3.5rem',
          fontSize: '1.1rem',
          fontWeight: '800',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'all 0.3s ease'
        }}>
          Donate to Education
        </button>
      </section>
    </div>
  );
};

export default Education;
