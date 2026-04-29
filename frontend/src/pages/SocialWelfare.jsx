import React, { useState, useEffect, useRef } from 'react';
import { renderText } from './Education';
import bloodCampImg from '../assets/g16.jpeg';
import socialWelfImg from '../assets/socialwelf.png';
import { Heart, Users, Shield, BookOpen, Scale, Wrench, ArrowRight, MessageCircle } from 'lucide-react';

const SocialWelfare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Auto-play logic for slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 6);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const welfareItems = [
    {
      title: "Social Awareness & Rights",
      description: "Extensive campaigns to raise awareness about critical social issues, including legal rights and gender equality.",
      icon: <Users className="w-8 h-8" />,
      image: "/social.png",
      color: "#3b82f6"
    },
    {
      title: "Community Welfare Services",
      description: "Direct and immediate support for underprivileged families through systemic resource distribution.",
      icon: <Heart className="w-8 h-8" />,
      image: "/cominp.jpg",
      color: "#ef4444"
    },
    {
      title: "Social Security Schemes",
      description: "Navigating and accessing various government social security benefits for the elderly and disabled.",
      icon: <Shield className="w-8 h-8" />,
      image: "/community_services_bg_1776918702641.png",
      color: "#10b981"
    },
    {
      title: "Women Empowerment",
      description: "Focusing on self-reliance through vocational training and self-help groups.",
      icon: <MessageCircle className="w-8 h-8" />,
      image: "/senior_counseling_bg_new_1776918822970.png",
      color: "#f59e0b"
    },
    {
      title: "Legal Aid Clinics",
      description: "Providing free legal consultation and representation for marginalized individuals.",
      icon: <Scale className="w-8 h-8" />,
      image: "/vocational_guidance_bg_1776918722666.png",
      color: "#8b5cf6"
    },
    {
      title: "Youth Skills Development",
      description: "Bridging the gap between education and employment with specialized skill training.",
      icon: <Wrench className="w-8 h-8" />,
      image: "/career_counseling_bg_new_1776918786013.png",
      color: "#ec4899"
    }
  ];

  const methodology = [
    { step: "01", title: "Identification", text: "Identifying families in dire need through grassroots surveys." },
    { step: "02", title: "Direct Relief", text: "Immediate assistance including food, health support, and shelter." },
    { step: "03", title: "Awareness", text: "Educating the community about their rights and government benefits." },
    { step: "04", title: "Empowerment", text: "Self-sustenance through skill-building and continuous mentoring." }
  ];

  const animations = `
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(255, 152, 0, 0.2); }
      50% { box-shadow: 0 0 40px rgba(255, 152, 0, 0.4); }
    }
    @keyframes slideInRight {
      from { transform: translateX(50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes revealLine {
      from { width: 0; }
      to { width: 100px; }
    }
    .hover-lift {
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .hover-lift:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
    }
    .parallax-bg {
      transition: transform 0.1s ease-out;
    }
    .stagger-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .stagger-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return (
    <div className="social-welfare-page" style={{ background: '#fff', color: '#1a1a1a', fontFamily: "'Inter', sans-serif" }}>
      <style>{animations}</style>

      {/* Modern Hero Section */}
      <section 
        id="hero"
        ref={el => sectionRefs.current[0] = el}
        style={{ 
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '100px 5%',
          background: '#0a0a0a',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 152, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 10s infinite ease-in-out'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s infinite ease-in-out reverse'
        }}></div>

        <div style={{ 
          maxWidth: '1200px', 
          width: '100%',
          position: 'relative', 
          zIndex: 10,
          textAlign: 'center'
        }}>
          <div className={`stagger-reveal ${isVisible.hero ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(255, 152, 0, 0.1)',
              color: '#ff9800',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 152, 0, 0.2)'
            }}>
              Our Mission
            </span>
          </div>
          
          <h1 className={`stagger-reveal ${isVisible.hero ? 'visible' : ''}`} style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: '900', 
            color: '#fff', 
            marginBottom: '2rem',
            lineHeight: '1',
            letterSpacing: '-4px',
            transitionDelay: '0.3s'
          }}>
            Upholding <span style={{ color: '#ff9800' }}>Dignity,</span><br />
            Empowering <span style={{ 
              background: 'linear-gradient(to right, #fff, #888)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>Lives.</span>
          </h1>

          <p className={`stagger-reveal ${isVisible.hero ? 'visible' : ''}`} style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: '#aaa', 
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            transitionDelay: '0.5s'
          }}>
            Through direct intervention and systemic awareness, BK Education and Welfare Society ensures that no individual is left behind in the journey of progress.
          </p>

          <div className={`stagger-reveal ${isVisible.hero ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
            <button style={{
              padding: '18px 45px',
              background: '#ff9800',
              color: '#000',
              border: 'none',
              borderRadius: '15px',
              fontWeight: '800',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 30px rgba(255, 152, 0, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
            >
              Explore Initiatives
            </button>
          </div>
        </div>
      </section>

      {/* Core Pillars Section - The Grid */}
      <section 
        id="pillars"
        ref={el => sectionRefs.current[1] = el}
        style={{ padding: '8rem 5%', background: '#fff' }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className={`stagger-reveal ${isVisible.pillars ? 'visible' : ''}`} style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: '900', 
              letterSpacing: '-2px',
              marginBottom: '1rem'
            }}>
              Our Core Pillars
            </h2>
            <div className={`stagger-reveal ${isVisible.pillars ? 'visible' : ''}`} style={{ 
              width: '80px', 
              height: '6px', 
              background: '#ff9800', 
              margin: '0 auto 2rem',
              borderRadius: '3px',
              transitionDelay: '0.2s'
            }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {welfareItems.map((item, index) => (
              <div 
                key={index}
                className={`hover-lift stagger-reveal ${isVisible.pillars ? 'visible' : ''}`}
                style={{
                  background: '#fff',
                  borderRadius: '32px',
                  padding: '2.5rem',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  transitionDelay: `${0.1 * index}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: `${item.color}15`,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.05rem' }}>{item.description}</p>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: item.color, fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                  LEARN MORE <ArrowRight size={16} />
                </div>
                
                {/* Decorative background number */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-10px',
                  fontSize: '8rem',
                  fontWeight: '900',
                  color: 'rgba(0,0,0,0.02)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}>
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - Interactive Flow */}
      <section 
        id="method"
        ref={el => sectionRefs.current[2] = el}
        style={{ 
          padding: '8rem 5%', 
          background: '#f8f9fa',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 className={`stagger-reveal ${isVisible.method ? 'visible' : ''}`} style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', letterSpacing: '-1px' }}>
                How We Create <br /><span style={{ color: '#ff9800' }}>Lasting Change</span>
              </h2>
              <p className={`stagger-reveal ${isVisible.method ? 'visible' : ''}`} style={{ fontSize: '1.15rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem', transitionDelay: '0.2s' }}>
                Our systematic approach to ensuring sustainable social welfare follows a proven four-step methodology that moves from immediate relief to total empowerment.
              </p>
              <div className={`stagger-reveal ${isVisible.method ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <img src={socialWelfImg} alt="Impact" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </div>
            </div>

            <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {methodology.map((m, index) => (
                <div 
                  key={index}
                  className={`stagger-reveal ${isVisible.method ? 'visible' : ''}`}
                  style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    background: '#fff', 
                    padding: '2rem', 
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    border: '1px solid #eee',
                    transitionDelay: `${0.2 * index}s`
                  }}
                >
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: '900', 
                    color: '#ff9800', 
                    opacity: 0.3,
                    minWidth: '50px'
                  }}>{m.step}</div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{m.title}</h4>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Slider - Cinematic Style */}
      <section 
        id="impact"
        ref={el => sectionRefs.current[3] = el}
        style={{ 
          padding: '10rem 0', 
          background: '#0a0a0a', 
          color: '#fff',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className={`stagger-reveal ${isVisible.impact ? 'visible' : ''}`} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', letterSpacing: '-2px' }}>
              Stories of <span style={{ color: '#ff9800' }}>Real Impact</span>
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ 
              display: 'flex', 
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {[
                {
                  tag: "Life-Saving",
                  title: "Blood Donation Camp",
                  desc: "Organizing regular blood donation camps to bridge the gap in local healthcare facilities. Every drop donated is a promise of hope.",
                  img: bloodCampImg,
                  color: "#ff9800"
                },
                {
                  tag: "Environmental",
                  title: "Ramshej Fort Preservation",
                  desc: "Protecting our historical monuments and local ecosystems. Our volunteers ensure heritage sites remain waste-free.",
                  img: "/ramshej_cleaning.jpg",
                  color: "#4caf50"
                },
                {
                  tag: "Social Justice",
                  title: "Equality & Awareness",
                  desc: "Celebrating Dr. Ambedkar's legacy through educational programs that emphasize equality and constitutional rights.",
                  img: "/ambedkar_jayanti.jpg",
                  color: "#2196f3"
                },
                {
                  tag: "Essentials",
                  title: "Clean Water Access",
                  desc: "Regular water supply drives in underprivileged areas, ensuring that no individual struggles for this basic necessity.",
                  img: "/water_supply_social.jpg",
                  color: "#00bcd4"
                },
                {
                  tag: "Protection",
                  title: "Stop Child Marriage",
                  desc: "Dedicated to eradicating the practice of child marriage through grassroots awareness and family workshops.",
                  img: "/infant_marriage.jpg",
                  color: "#9c27b0"
                },
                {
                  tag: "Safety",
                  title: "Empowerment Workshops",
                  desc: "Empowering children and women with confidence and self-defense skills. Awareness is the first shield.",
                  img: "/women_safety.jpg",
                  color: "#f44336"
                }
              ].map((item, i) => (
                <div key={i} style={{ 
                  flex: '0 0 100%', 
                  padding: '0 2rem',
                  opacity: currentSlide === i ? 1 : 0.2,
                  transition: 'opacity 1s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4rem',
                  flexWrap: 'wrap-reverse'
                }}>
                  <div style={{ flex: '1.2', minWidth: '350px' }}>
                    <div style={{ 
                      color: item.color, 
                      fontWeight: '800', 
                      letterSpacing: '2px', 
                      marginBottom: '1.5rem',
                      textTransform: 'uppercase'
                    }}>{item.tag}</div>
                    <h3 style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                      fontWeight: '900', 
                      marginBottom: '2rem',
                      lineHeight: '1',
                      letterSpacing: '-3px'
                    }}>{item.title}</h3>
                    <p style={{ 
                      fontSize: '1.4rem', 
                      lineHeight: '1.6', 
                      color: '#888',
                      marginBottom: '3rem'
                    }}>{item.desc}</p>
                    <button style={{
                      padding: '15px 35px',
                      background: 'transparent',
                      color: '#fff',
                      border: `2px solid ${item.color}`,
                      borderRadius: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: '0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = item.color; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      READ FULL STORY
                    </button>
                  </div>
                  <div style={{ 
                    flex: '1', 
                    minWidth: '350px',
                    height: '600px',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transform: currentSlide === i ? 'scale(1)' : 'scale(1.2)',
                        transition: 'transform 2s ease'
                      }} 
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      background: 'linear-gradient(to right, #0a0a0a, transparent 40%)'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Navigation */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginTop: '4rem',
              justifyContent: 'center'
            }}>
              {Array.from({ length: 6 }).map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '60px' : '15px',
                    height: '6px',
                    borderRadius: '10px',
                    background: currentSlide === idx ? '#ff9800' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: '8rem 5%', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Ready to make a <span style={{ color: '#ff9800' }}>Difference?</span></h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem', lineHeight: '1.8' }}>
            Your support can help us expand our reach and provide more essential services to those in need. Join our network of volunteers or contribute to our causes.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '18px 45px',
              background: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: '15px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>Join as Volunteer</button>
            <button style={{
              padding: '18px 45px',
              background: 'transparent',
              color: '#1a1a1a',
              border: '2px solid #1a1a1a',
              borderRadius: '15px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>Donate Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialWelfare;
