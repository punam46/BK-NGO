import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import childrenStudying from '../assets/children_studying.png';
import childrenExtremeLeft from '../assets/children_extreme_left.png';
import skillDev from '../assets/skill dev.png';
import seniorCitizenImg from '../assets/G42.jpeg';
import bloodDonationImg from '../assets/g16.jpeg';
import cleanWaterImg from '../assets/g25.jpeg';
import socialWelfareImpactImg from '../assets/g18.jpeg';
import socialWelfOriginal from '../assets/socialwelf.png';

const Home = () => {
  const carouselRef = useRef(null);
  const separatorRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSeparatorVisible, setIsSeparatorVisible] = useState(false);
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);
  const [activeWwdCard, setActiveWwdCard] = useState(null);

  const heroSlides = [
    {
      title: "Women Safety & Empowerment",
      text: "Conducting self-defense training and legal awareness workshops to ensure a secure and empowered future for every woman.",
      image: "/women_safety_hero.jpg",
      layout: "magazine",
      bgPosition: "center 20%",
      bgSize: "cover",
      bgColor: "#fff"
    },
    {
      title: "Every Smile Tells a Story of Hope",
      text: "Building a brighter future through education and care, one happy face at a time.",
      image: childrenExtremeLeft,
      layout: "magazine",
      bgPosition: "left center",
      bgSize: "cover",
      bgColor: "#fff"
    },
    {
      title: "Rural Community Empowerment",
      text: "Fostering sustainable growth and self-reliance in rural areas through community-driven initiatives.",
      image: "/rural_women_empowerment.png",
      layout: "magazine",
      bgPosition: "center center",
      bgSize: "cover",
      bgColor: "#fff"
    },
    {
      title: "Skill Development",
      text: "Empowering communities through practical workshops and technical skills for a sustainable future.",
      image: "/skill_development_new.png",
      layout: "magazine",
      bgPosition: "center center",
      bgSize: "cover",
      bgColor: "#fff"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstElementChild?.offsetWidth || 420;
      const scrollAmount = direction === 'next' ? cardWidth + 20 : -(cardWidth + 20);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className={`hero hero-${heroSlides[activeSlide].layout}`}
        style={{ 
          backgroundImage: `url("${heroSlides[activeSlide].image}")`,
          backgroundPosition: heroSlides[activeSlide].bgPosition,
          backgroundSize: heroSlides[activeSlide].bgSize,
          backgroundRepeat: 'no-repeat',
          backgroundColor: heroSlides[activeSlide].bgColor,
          transition: 'background-image 0.8s ease-in-out, background-position 0.8s ease-in-out, background-size 0.8s ease-in-out'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content" key={activeSlide}>
            <h1>{heroSlides[activeSlide].title}</h1>
            <p>{heroSlides[activeSlide].text}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              style={{ cursor: 'pointer' }}
            ></span>
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
          minHeight: '650px',
          height: 'auto',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: '-2rem 0 0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '6rem 2% 2rem',
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
          backgroundImage: 'url("/blue_watercolor_wash.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95,
          zIndex: 5,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
        }}></div>

        <div className="responsive-container">
          <div className={`scroll-reveal ${isSeparatorVisible ? 'active' : ''}`} style={{ 
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', 
            marginBottom: '1.5rem', 
            color: '#1a1a1a', 
            fontWeight: '800',
            whiteSpace: 'nowrap',
            transitionDelay: '0.2s'
          }}>
            <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society (NGO)
          </div>
          
          <div className={`scroll-reveal ${isSeparatorVisible ? 'active' : ''}`} style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#444', 
            fontWeight: '500',
            transitionDelay: '0.5s'
          }}>
            <p style={{ marginBottom: '1.2rem' }}>
              The <span style={{ color: '#e53935', fontWeight: 'bold' }}>BK</span> Education and Welfare Society (NGO) has been formed with the foundational idea of <strong>"Education for all"</strong> and creating widespread awareness regarding health, environment, and social issues. Established in 2011, we are committed to supporting the social growth of physically challenged individuals by providing free guidance for competitive exams and government placements.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              In addition to our core missions, we provide critical support to students from economically weaker sections through fee reductions. As part of our socio-economic contribution to society, we have introduced India's first national <strong>Bilingual Newspaper</strong> that focuses exclusively on positive news.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              Our unique <strong>"One Village One Reporter"</strong> system generates meaningful employment at the village, Tehsil, and district levels. Our weekly newsletter provides essential updates on current affairs, great personalities, and general knowledge for rural communities and students preparing for competitive exams, including listings for all government and public sector vacancies.
            </p>
            <p>
              We prioritize environmental conservation and public health through active campaigns for tree plantation and dedicated programs for drinking water supply, fostering a healthier and more sustainable society for all.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do" ref={whatWeDoRef} style={{ 
        padding: '0 0 2rem', 
        background: 'linear-gradient(to bottom, #00BFA5 55%, #fff 55%)', /* Restored original teal */
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Artistic Watercolor Illustration Texture - Top Half Only */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '55%', 
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
              fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', 
              color: '#ffffff', 
              margin: '0', 
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>What We Do</h2>
          </div>
        </div>

        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2.5rem',
          padding: '0 4%',
          position: 'relative',
          zIndex: 5
        }}>
          {/* Card 1: Education */}
          <div 
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`} 
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 0 ? null : 0);
              }
            }}
            style={{ 
              background: '#fff', 
              borderRadius: '16px', 
              textAlign: 'center', 
              padding: '2.5rem 2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.2s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src="/education_card.png" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Education</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 2: Social Welfare */}
          <div 
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`} 
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 1 ? null : 1);
              }
            }}
            style={{ 
              background: '#fff', 
              borderRadius: '16px', 
              textAlign: 'center', 
              padding: '2.5rem 2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.4s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={socialWelfOriginal} alt="Social Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Social Welfare</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 3: Environment */}
          <div 
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`} 
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 2 ? null : 2);
              }
            }}
            style={{ 
              background: '#fff', 
              borderRadius: '16px', 
              textAlign: 'center', 
              padding: '2.5rem 2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.6s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src="/rural_community_hub.png" alt="Environment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Environmental Care</h3>
            <div style={{ width: '25px', height: '3px', background: '#00BFA5', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>
          </div>

          {/* Card 4: Exam Guidance */}
          <div 
            className={`wwd-card scroll-reveal-right ${isWhatWeDoVisible ? 'active' : ''}`} 
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveWwdCard(activeWwdCard === 3 ? null : 3);
              }
            }}
            style={{ 
              background: '#fff', 
              borderRadius: '16px', 
              textAlign: 'center', 
              padding: '2.5rem 2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              transition: 'all 0.4s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: '0.8s',
              cursor: 'pointer'
            }}
          >

            <div className="wwd-image-container" style={{ position: 'relative', zIndex: 1, height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img src="/what_we_do_pwd_exam.png" alt="Exam Prep" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Competitive Exam Prep (PwD)</h3>
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
          alignItems: 'center', 
          gap: '4rem',
          maxWidth: '1600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Column: Text & CTA */}
          <div style={{ zIndex: 2 }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              color: '#333', 
              lineHeight: '1.1',
              fontWeight: '800',
              marginBottom: '2rem'
            }}>
              How do you want to <span style={{ color: '#ffd54f', fontFamily: '"Dancing Script", cursive' }}>help society</span> <br/>
              today?
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666', 
              lineHeight: '1.6', 
              marginBottom: '3rem',
              maxWidth: '450px'
            }}>
              Your smallest contribution makes a big difference to society. 
              We count on the generosity of people like you to be able to create real change through our society's initiatives!
            </p>
          </div>

          {/* Right Column: Carousel */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            <div className="carousel-nav" style={{
              position: 'absolute',
              left: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <button 
                onClick={() => scroll('prev')}
                style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: '#fff', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer', fontSize: '1.2rem', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#ffd54f'}
                onMouseLeave={(e) => e.target.style.background = '#fff'}
              >←</button>
              <button 
                onClick={() => scroll('next')}
                style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: '#fff', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer', fontSize: '1.2rem', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#ffd54f'}
                onMouseLeave={(e) => e.target.style.background = '#fff'}
              >→</button>
            </div>
            
            <div 
              ref={carouselRef}
              className="impact-carousel" style={{
              display: 'flex',
              gap: '2rem',
              overflowX: 'auto', /* Allow scrolling */
              paddingBottom: '2rem',
              width: '100%',
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              minWidth: 0,
              paddingLeft: '10px'
            }}>
              {/* Impact Card 1 */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src="/impact_education_1776673692428.png" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', top: '20px', right: '0', background: '#ffd54f',
                    padding: '0.5rem 1.2rem', fontWeight: '800', fontSize: '0.9rem',
                    borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'
                  }}>SAVE TAX</div>
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>SUPPORT CHILDREN'S EDUCATION</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Help them stay in school</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 2: Social Welfare */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src={socialWelfareImpactImg} alt="Social Welfare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>SOCIAL WELFARE</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Empowering communities for a better tomorrow</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card: Clean Water Access */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src={cleanWaterImg} alt="Clean Water Access" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>CLEAN WATER ACCESS</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Ensuring safe and clean drinking water for rural communities.</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 3 */}
              <Link 
                to="/donate"
                className="impact-card" style={{
                minWidth: '420px',
                flex: '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src="/ashram_donate.jpg" alt="Ashram School" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>DONATE TO AN ASHRAM SCHOOL</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Support holistic education and traditional learning for rural youth</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </Link>

              {/* Impact Card 4 */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src="/healthcare_all.jpg" alt="Healthcare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>HEALTHCARE FOR ALL</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Building a healthier society together</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 5: Senior Citizen Welfare */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src={seniorCitizenImg} alt="Senior Citizen Welfare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>SENIOR CITIZEN WELFARE</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Enhancing the quality of life for our elders</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>

              {/* Impact Card 6: Blood Donation Camps */}
              <div 
                className="impact-card" style={{
                minWidth: window.innerWidth <= 768 ? '85vw' : '420px',
                flex: window.innerWidth <= 768 ? '0 0 85vw' : '0 0 420px',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
              }}>
                <div style={{ position: 'relative', height: '360px' }}>
                  <img src={bloodDonationImg} alt="Blood Donation Camps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px' }}>BLOOD DONATION CAMPS</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Saving lives through regular community drives</p>
                  <div style={{ width: '100%', height: '8px', background: '#ffd54f', marginTop: '1.5rem', borderRadius: '0 0 16px 16px', position: 'absolute', bottom: 0, left: 0 }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Impact Section */}
      <section className="stats-impact-section" style={{
        padding: '3rem 4% 5rem',
        backgroundImage: 'url("/blue_watercolor_wash.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        marginBottom: '-120px', /* Overlap with banner */
        marginTop: '0', /* Re-introduce clear gap as requested */
        position: 'relative',
        zIndex: 2,
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)'
      }}>
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto 5rem'
        }}>
          {/* Stat 1 */}
          <div className="stat-item">
            <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '1rem' }}>Activities in</h4>
            <div style={{ fontSize: '5rem', fontWeight: '800', color: '#ff9800', lineHeight: 1 }}>36</div>
            <p style={{ marginTop: '1rem', color: '#444', fontWeight: '600' }}>districts</p>
          </div>

          {/* Stat 2 */}
          <div className="stat-item">
            <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '1rem' }}>Children reached</h4>
            <div style={{ fontSize: '5rem', fontWeight: '800', color: '#ff9800', lineHeight: 1 }}>10K</div>
            <p style={{ marginTop: '1rem', color: '#444', fontWeight: '600' }}>through direct programs and <br/> government partnerships</p>
          </div>

          {/* Stat 3 */}
          <div className="stat-item">
            <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '1rem' }}>Social Welfare & Environmental Care</h4>
            <div style={{ fontSize: '5rem', fontWeight: '800', color: '#ff9800', lineHeight: 1 }}>300+</div>
            <p style={{ marginTop: '1rem', color: '#444', fontWeight: '600' }}>Impactful programs and <br/> rehabilitation projects</p>
          </div>

          {/* Stat 4 */}
          <div className="stat-item">
            <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '1rem' }}>Youth reached</h4>
            <div style={{ fontSize: '5rem', fontWeight: '800', color: '#ff9800', lineHeight: 1 }}>1K+</div>
            <p style={{ marginTop: '1rem', color: '#444', fontWeight: '600' }}>through vocational/non-<br/>vocational courses</p>
          </div>
        </div>

        {/* Group Photo Banner with Fade Effect */}
        <div className="group-photo-banner" style={{
          width: '100%',
          height: '600px',
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%), url("/main_impact_banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          backgroundRepeat: 'no-repeat',
          marginTop: '-6rem', /* Deeper overlap for better mixing */
          position: 'relative',
          zIndex: 1,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskComposite: 'intersect'
        }}>
          {/* Yellow Logo Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '60px',
            height: '60px',
            background: '#ffc107',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              background: '#fff',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
            }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
