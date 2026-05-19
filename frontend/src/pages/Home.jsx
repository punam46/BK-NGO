import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import childrenStudying from '../assets/children_studying.png';
import childrenExtremeLeft from '../assets/children_extreme_left.png';
import skillDev from '../assets/skill dev.png';
import seniorCitizenImg from '../assets/G42.jpeg';
import bloodDonationImg from '../assets/g16.jpeg';
import cleanWaterImg from '../assets/g25.jpeg';
import socialWelfareImpactImg from '../assets/g18.jpeg';
import socialWelfOriginal from '../assets/G42.jpeg';
import bkLogo from '../assets/logo.jpeg';
import g5 from '../assets/g5.jpg';
import womenEmpowermentImg from '../assets/Women-Empowerment.webp';
import newSmileImg from '../assets/6636163.jpg';
import childCare1Jpg from '../assets/child care 1.jpg';
import compataiveAvif from '../assets/compataive.avif';
import childCareImg from '../assets/child care.jpg';
import g30Img from '../assets/g30.jpeg';
import pwdImg from '../assets/pwd.jpg';
import home1Img from '../assets/Home1.png';
import home2Img from '../assets/Home2.png';
import home3Img from '../assets/Home3.png';
import home4Img from '../assets/Home4.png';
import home5Img from '../assets/Home5.png';
import home6Img from '../assets/Home6.png';
import home7Img from '../assets/Home7.png';
import home8Img from '../assets/home8.png';
import mainImg from '../assets/main.jpg';

const HOME_HERO_SLIDES = [home1Img, home2Img, home3Img, home4Img, home5Img, home6Img, home7Img, home8Img];
const Home = () => {
  const carouselRef = useRef(null);
  const separatorRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const [currentHero, setCurrentHero] = useState(0);
  const [isSeparatorVisible, setIsSeparatorVisible] = useState(false);
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeWwdCard, setActiveWwdCard] = useState(null);


  const stats = [
    { title: "Activities in", value: "36", label: "Districts" },
    { title: "Children reached", value: "10K", label: "Through direct programs and government partnerships" },
    { title: "Social Welfare & Environmental Care", value: "300+", label: "Impactful programs and rehabilitation projects" },
    { title: "Youth reached", value: "1K+", label: "Through vocational/non-vocational courses" }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-cycle hero images
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHero((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentHero]);

  // Observer for Separator Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSeparatorVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (separatorRef.current) observer.observe(separatorRef.current);
    return () => {
      if (separatorRef.current) observer.unobserve(separatorRef.current);
    };
  }, []);

  // Observer for What We Do Cards Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhatWeDoVisible(true);
        }
      },
      { threshold: 0.05 } /* more immediate trigger */
    );
    if (whatWeDoRef.current) observer.observe(whatWeDoRef.current);
    return () => {
      if (whatWeDoRef.current) observer.unobserve(whatWeDoRef.current);
    };
  }, []);

  // Auto-scroll logic for Impact Cards Carousel
  useEffect(() => {
    let interval;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!interval) {
            interval = setInterval(() => {
              if (carouselRef.current) {
                const carousel = carouselRef.current;
                const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;
                const cardWidth = carousel.firstElementChild?.offsetWidth || 300;

                if (carousel.scrollLeft >= maxScrollLeft - 20) {
                  carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                  carousel.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
                }
              }
            }, 3000);
          }
        } else {
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.01 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      clearInterval(interval);
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Cinematic Image Slider Hero Section */}
      <section
        className="hero"
        style={{
          width: '100%',
          height: windowWidth < 768 ? '28vh' : '85vh',
          position: 'relative',
          overflow: 'hidden',
          background: '#fff',
          marginTop: windowWidth < 768 ? '70px' : '130px'
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentHero}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1
            }}
          >
            <img
              src={HOME_HERO_SLIDES[currentHero]}
              alt="BK NGO Initiative"
              style={{
                width: '100%',
                height: '100%',
                objectFit: windowWidth < 768 ? 'contain' : 'cover',
                objectPosition: 'center'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: windowWidth < 768 ? '10px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 15
        }}>
          {HOME_HERO_SLIDES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentHero(idx)}
              style={{
                width: idx === currentHero ? '40px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentHero ? '#ff9800' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>


      {/* Panoramic Watercolor Separator */}
      <section
        className="watercolor-separator"
        ref={separatorRef}
        style={{
          backgroundImage: 'url("/watercolor_children_group.png")',
          width: '100%',
          minHeight: windowWidth < 768 ? '450px' : '900px',
          height: 'auto',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: '-2rem 0 0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: windowWidth < 768 ? 'center' : 'flex-end',
          padding: windowWidth < 768 ? '4rem 5% 2rem' : '6rem 2% 2rem',
          zIndex: 2
        }}
      >
        {/* Blue Watercolor Edge Transition */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          left: 0,
          width: '100%',
          height: '240px',
          background: 'linear-gradient(to bottom, transparent, #e0f2fe)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95,
          zIndex: 5,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
        }}></div>

        <div className={`scroll-reveal ${isSeparatorVisible ? 'active' : ''}`} style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
          marginBottom: '3rem',
          color: '#000000',
          fontWeight: '900',
          lineHeight: '1.2',
          whiteSpace: windowWidth < 768 ? 'normal' : 'nowrap',
          textAlign: 'center',
          transitionDelay: '0.2s',
          alignSelf: 'center',
          marginRight: windowWidth < 768 ? '0' : '12%' /* Subtle left bias as requested */
        }}>
          <span style={{ color: '#d32f2f' }}>BK</span> Education and Welfare Society (NGO)
        </div>

        <div className="responsive-container">
          <div className={`scroll-reveal ${isSeparatorVisible ? 'active' : ''}`} style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#000000',
            fontWeight: '500',
            transitionDelay: '0.5s',
            maxWidth: '900px'
          }}>
            <p style={{ marginBottom: '1.2rem' }}>
              The <span style={{ color: '#e53935', fontWeight: 'bold' }}>BK</span> Education and Welfare Society (NGO) has been formed with the foundational idea of <strong>"Education for all"</strong> and creating widespread awareness regarding health, environment, and social issues. Established in 2011, we are committed to supporting the social growth of physically challenged individuals by providing free guidance for competitive exams and government placements.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              In addition to our core missions, we provide critical support to students from economically weaker sections through fee reductions. As part of our socio-economic contribution to society, we have introduced India's first national <strong>BK Times Bilingual Newspaper</strong> that focuses exclusively on positive news.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              Our unique <strong>"One Village One Reporter"</strong> system generates meaningful employment at the village, Tehsil, and district levels. Our weekly newsletter provides essential updates on current affairs, great personalities, and general knowledge for rural communities and students preparing for competitive exams, including listings for all government and public sector vacancies.
            </p>

          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do" ref={whatWeDoRef} style={{
        padding: '0 0 2rem',
        background: windowWidth < 1024 ? '#00BFA5' : 'linear-gradient(to bottom, #00BFA5 55%, #fff 55%)', /* Restored original teal */
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Artistic Watercolor Illustration Texture - Top Half Only */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: windowWidth < 1024 ? '100%' : '55%',
          backgroundImage: 'url("/yellow_watercolor_wash.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          filter: 'hue-rotate(130deg) saturate(1.1) brightness(0.9)',
          mixBlendMode: 'multiply',
          opacity: 0.5,
          zIndex: 1
        }}></div>


        <div style={{
          position: 'relative',
          zIndex: 20,
          marginTop: '-1rem', /* Lowered further per request */
          marginBottom: '3.5rem'
        }}>
          {/* Professional Teal Banner - Restored */}
          <div style={{
            background: '#00BFA5',
            width: 'clamp(280px, 50%, 600px)',
            margin: '0 auto',
            padding: '1.2rem 2rem',
            textAlign: 'center',
            borderRadius: '16px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
            border: '2px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
              color: '#ffffff',
              margin: '0',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>What We Do</h2>
          </div>
        </div>

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          padding: '0 2%',
          maxWidth: '1600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5
        }}>
          {/* Card 1: Education */}
          <div
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`}
            onClick={() => {
              if (windowWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 0 ? null : 0);
              }
            }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.2s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '380px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={g5} alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div className="wwd-overlay" style={{
                transform: activeWwdCard === 0 ? 'translateY(0)' : undefined,
                opacity: activeWwdCard === 0 ? 1 : undefined,
                visibility: activeWwdCard === 0 ? 'visible' : undefined
              }}>
                <div className="divider"></div>
                <p>Providing quality education and digital learning support to underprivileged children.</p>
                <Link to="/programs/education" className="know-more-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Know More</Link>
                <div className="org-name"><span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1, minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Education</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 2: Social Welfare */}
          <div
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`}
            onClick={() => {
              if (windowWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 1 ? null : 1);
              }
            }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.4s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '380px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={seniorCitizenImg} alt="Social Work" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div className="wwd-overlay" style={{
                transform: activeWwdCard === 1 ? 'translateY(0)' : undefined,
                opacity: activeWwdCard === 1 ? 1 : undefined,
                visibility: activeWwdCard === 1 ? 'visible' : undefined
              }}>
                <div className="divider"></div>
                <p>Enhancing community health and well-being through essential support and awareness.</p>
                <Link to="/programs/social-welfare" className="know-more-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Know More</Link>
                <div className="org-name"><span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1, minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Social Welfare</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 3: Environment */}
          <div
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`}
            onClick={() => {
              if (windowWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 2 ? null : 2);
              }
            }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.6s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '380px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={socialWelfareImpactImg} alt="Environment" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div className="wwd-overlay" style={{
                transform: activeWwdCard === 2 ? 'translateY(0)' : undefined,
                opacity: activeWwdCard === 2 ? 1 : undefined,
                visibility: activeWwdCard === 2 ? 'visible' : undefined
              }}>
                <div className="divider"></div>
                <p>Leading mountain tree plantation and reforestation for a cleaner, greener future.</p>
                <Link to="/programs/rural-development" className="know-more-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Know More</Link>
                <div className="org-name"><span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1, minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Environmental Care</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 4: Exam Guidance */}
          <div
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`}
            onClick={() => {
              if (windowWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 3 ? null : 3);
              }
            }}
            style={{
              background: '#fff',
              borderRadius: '16px',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.8s',
              cursor: 'pointer'
            }}
          >
            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '380px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={pwdImg} alt="Exam Prep" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div className="wwd-overlay" style={{
                transform: activeWwdCard === 3 ? 'translateY(0)' : undefined,
                opacity: activeWwdCard === 3 ? 1 : undefined,
                visibility: activeWwdCard === 3 ? 'visible' : undefined
              }}>
                <div className="divider"></div>
                <p>Providing specialized exam guidance and support for persons with disabilities.</p>
                <Link to="/programs/disability-affair" className="know-more-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Know More</Link>
                <div className="org-name"><span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1, minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Competitive Exam Prep (PwD)</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>


        </div>
      </section>



      {/* Help Children Today Section */}
      <section className="help-section" style={{
        padding: '4rem 6% 2rem',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Yellow Watercolor Wash Background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/yellow_watercolor_wash.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25, /* Subtle yet noticeable yellow wash */
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>

        <div className="help-grid-container" style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 1100 ? '1fr' : '30% 70%',
          alignItems: 'center',
          gap: windowWidth < 1100 ? '2rem' : '4rem',
          maxWidth: '1600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Column: Text & CTA */}
          <div style={{ zIndex: 2 }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#333',
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.5rem'
            }}>
              How do you want <span style={{
                color: '#00BFA5',
                fontFamily: '"Dancing Script", cursive',
                fontSize: windowWidth < 768 ? '2.2rem' : '3rem',
                fontWeight: '700',
                display: 'inline-block',
                margin: '0.2rem 0',
                letterSpacing: '1px',
                textShadow: '0.5px 0.5px 0px #00BFA5'
              }}>help society</span> <br />
              today?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '450px'
            }}>
              Your smallest contribution makes a big difference to society.
              We count on the generosity of people like you to be able to create real change through our society's initiatives!
            </p>
          </div>

          {/* Right Column: Carousel */}
          <div style={{ position: 'relative', minHeight: windowWidth < 768 ? 'auto' : '500px', width: '100%', overflow: 'visible' }}>

            <div
              ref={carouselRef}
              className="impact-carousel" style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'scroll', /* Force scroll */
                paddingBottom: '2rem',
                width: '100%',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                minWidth: 0,
                paddingLeft: '5%',
                paddingRight: '5%'
              }}>
              {/* Impact Card 1 */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src="/impact_education_1776673692428.png" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: '20px', right: '0', background: '#ffd54f',
                    padding: '0.5rem 1.2rem', fontWeight: '800', fontSize: '0.9rem',
                    borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'
                  }}>SAVE TAX</div>
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>SUPPORT CHILDREN'S EDUCATION</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Help them stay in school</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 2: Social Welfare */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src={socialWelfareImpactImg} alt="Social Welfare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>SOCIAL WELFARE</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Empowering communities for a better tomorrow</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card: Clean Water Access */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src={cleanWaterImg} alt="Clean Water Access" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>CLEAN WATER ACCESS</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Ensuring safe and clean drinking water for rural communities.</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 3 */}
              <Link
                to="/donate"
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src={g5} alt="Ashram School" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>DONATE TO AN ASHRAM SCHOOL</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Support holistic education and traditional learning for rural youth</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </Link>

              {/* Impact Card 4 */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src="/healthcare_all.jpg" alt="Healthcare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>HEALTHCARE FOR ALL</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Building a healthier society together</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 5: Senior Citizen Welfare */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src={seniorCitizenImg} alt="Senior Citizen Welfare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>SENIOR CITIZEN WELFARE</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Enhancing the quality of life for our elders</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 6: Blood Donation Camps */}
              <div
                className="impact-card" style={{
                  minWidth: windowWidth <= 768 ? '85vw' : 'calc(48% - 1.5rem)',
                  flex: windowWidth <= 768 ? '0 0 85vw' : '0 0 calc(48% - 1.5rem)',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <img src={bloodDonationImg} alt="Blood Donation Camps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.8rem', letterSpacing: '1px' }}>BLOOD DONATION CAMPS</h4>
                  <p style={{ color: '#666', fontSize: '1.05rem' }}>Saving lives through regular community drives</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Impact Section */}
      {/* Integrated Stats & Photo Banner Section */}
      <section className="integrated-banner-section" style={{
        position: 'relative',
        width: '100%',
        marginTop: '0',
        zIndex: 5
      }}>
        <div className="group-photo-banner" style={{
          width: '100%',
          minHeight: windowWidth < 768 ? '450px' : '800px',
          backgroundImage: 'url("/main_impact_banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%', /* Fine-tuning to balance height and visibility */
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0',
          position: 'relative'
        }}>
          {/* Continuous Stats Marquee */}
          <div className="stats-marquee-container" style={{
            width: '100%',
            overflow: 'hidden',
            padding: windowWidth < 768 ? '1.5rem 0' : '3rem 0', /* Slightly tighter padding */
            position: 'relative',
            zIndex: 10,
            marginTop: windowWidth < 768 ? '0' : '-3rem', /* Reduced negative margin to create gap from cards above */
            background: 'rgba(0, 30, 60, 0.85)', /* Deep Navy Blue */
            backdropFilter: 'blur(15px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            {/* Gradient Edges for Smooth Transition */}
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: windowWidth < 768 ? '50px' : '150px',
              background: 'linear-gradient(to right, rgba(0, 30, 60, 1), transparent)', zIndex: 12, pointerEvents: 'none'
            }}></div>
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: 0, width: windowWidth < 768 ? '50px' : '150px',
              background: 'linear-gradient(to left, rgba(0, 30, 60, 1), transparent)', zIndex: 12, pointerEvents: 'none'
            }}></div>

            <motion.div
              animate={{
                x: [0, '-50%']
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                display: 'flex',
                gap: windowWidth < 768 ? '2rem' : '6rem',
                width: 'max-content',
                padding: '0 3rem'
              }}
            >
              {/* Double the items for seamless loop */}
              {[...stats, ...stats].map((stat, index) => (
                <div key={index} style={{
                  minWidth: windowWidth < 768 ? '260px' : '400px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0 1.5rem'
                }}>
                  <h4 style={{
                    fontSize: windowWidth < 768 ? '0.95rem' : '1.2rem',
                    fontWeight: '900',
                    color: '#ffffff',
                    marginBottom: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textAlign: 'center',
                    maxWidth: '280px',
                    margin: '0 auto 1.2rem',
                    lineHeight: '1.3',
                    opacity: 0.95
                  }}>
                    {stat.title}
                  </h4>
                  <div style={{
                    fontSize: windowWidth < 768 ? '2.5rem' : '3.5rem',
                    fontWeight: '900',
                    color: '#ff9800',
                    lineHeight: 1,
                    marginBottom: '0.8rem',
                    textShadow: '0 0 20px rgba(255, 152, 0, 0.4), 0 0 40px rgba(255, 152, 0, 0.2)',
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* Glow Effect Behind Number */}
                    <div style={{
                      position: 'absolute',
                      width: windowWidth < 768 ? '80px' : '120px',
                      height: windowWidth < 768 ? '80px' : '120px',
                      background: 'radial-gradient(circle, rgba(255, 152, 0, 0.15) 0%, transparent 70%)',
                      zIndex: -1,
                      filter: 'blur(10px)'
                    }}></div>
                    {stat.value}
                  </div>
                  <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: '600',
                    fontSize: windowWidth < 768 ? '0.85rem' : '1rem',
                    whiteSpace: 'normal',
                    maxWidth: '250px',
                    lineHeight: '1.5',
                    textAlign: 'center',
                    margin: '0 auto'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
