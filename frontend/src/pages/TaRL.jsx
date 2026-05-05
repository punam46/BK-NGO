import React, { useState } from 'react';
import TornHeader from '../components/TornHeader';
import { Shield } from 'lucide-react';

const TaRL = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      text: "At BK Education and Welfare Society, our mission has always been to empower the most vulnerable. Seeing the TaRL model bridge the foundational learning gap is the realization of our core vision. We aren't just teaching subjects; we are building the tools for lifelong success.",
      author: "Dr. Adv. Er. Bhagwan Nivrutti Elmame",
      role: "Founder & President",
      img: "/bkphoto.jpeg"
    },
    {
      text: "The activity-based learning approach has transformed my classroom from quiet rote learning to a vibrant hub of curiosity. Students are now actually excited to come to school!",
      author: "Prof. Kishor Nivrutti Yelmame",
      role: "Founder President",
      img: "/k1.jpeg"
    },
    {
      text: "Holistic development is at the heart of our mission. Integrating physical wellness with foundational learning ensures that every child is not only educated but also healthy and resilient.",
      author: "Dnyaneshwar Nikalje",
      role: "Yoga & Physical Wellness Trainer",
      img: "/D1.jpeg"
    },
    {
      text: "Physical fitness and mental conditioning are the bedrock of a child's overall development. By integrating specialized training, we ensure that our students are not only academically proficient but also physically resilient and disciplined.",
      author: "Nandkishor Ghuge",
      role: "Senior Fitness & Conditioning Coach",
      img: "/ghuge_sir.jpeg",
      objectPosition: "top"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <section style={{ 
        position: 'relative', 
        width: '100%',
        minHeight: '600px',
        background: 'linear-gradient(to right, #d34b07 30%, #f07030 100%)',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* White Backing for Image to keep faces light */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          background: '#fff',
          opacity: 0.1,
          zIndex: 0
        }}></div>

        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '65%',
          height: '100%',
          backgroundImage: 'url("/tarl_hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'brightness(1.2) contrast(0.9)',
          maskImage: 'linear-gradient(to right, transparent, black 80%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 5%', display: 'flex', alignItems: 'center', height: '100%', color: '#fff', position: 'relative', zIndex: 10, padding: windowWidth < 768 ? '0 5%' : '0' }}>
          <div style={{ maxWidth: '900px', textAlign: 'left', paddingTop: windowWidth < 768 ? '4rem' : '2rem', marginLeft: '0' }}>
            <h1 style={{ 
              fontSize: windowWidth < 768 ? '2.5rem' : '3.8rem', 
              fontWeight: '900', 
              marginBottom: '1.5rem', 
              lineHeight: 1.1, 
              letterSpacing: '-1px',
              whiteSpace: windowWidth < 768 ? 'normal' : 'nowrap'
            }}>EDUCATIONAL SUPPORT</h1>
            <p style={{ fontSize: windowWidth < 768 ? '1.1rem' : '1.3rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '800px', textAlign: 'justify', lineHeight: '1.6' }}>
              Formed with the foundational idea of "Education for all", focusing on foundational literacy and arithmetic skills for underprivileged children. We are dedicated to bridging the learning gap through innovative, community-driven models that ensure every child has the tools to unlock their full potential and build a brighter future.
              <br /><br />
              Our program implements the 'Teaching at the Right Level' (TaRL) methodology, which evaluates each child's current learning status rather than their grade level. By grouping children based on their actual abilities, we provide tailored instruction that accelerates progress in reading and mathematics, ensuring that no child is left behind in their educational journey.
            </p>
          </div>
        </div>

      </section>

      {/* NEW: Foundational Learning Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          {/* Text Content */}
          <div style={{ flex: '1', minWidth: '350px' }}>
            <div style={{
              display: 'inline-block',
              background: '#FFC107',
              padding: '0.6rem 1.2rem',
              fontWeight: '900',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.5rem',
              borderRadius: '4px'
            }}>
              Foundational Learning
            </div>
            <h2 style={{ 
              fontSize: windowWidth < 768 ? '2.2rem' : '3.5rem', 
              fontWeight: '900', 
              color: '#1a1a1a', 
              marginBottom: '2rem',
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              Building Bright Futures
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#555',
              textAlign: 'justify'
            }}>
              <span style={{ color: '#d81b60', fontWeight: '800' }}>BK</span> EDUCATION AND WELFARE SOCIETY foundational literacy and numeracy programs target children in their most critical developmental years. By focusing on the basics of reading, writing, and arithmetic, we ensure that every child has the tools they need to succeed in school and beyond. We use interactive teaching methods and local language support to make learning accessible and enjoyable.
            </p>
          </div>

          {/* Image Content */}
          <div style={{ 
            flex: '1', 
            minWidth: windowWidth < 768 ? '100%' : '350px',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
            height: windowWidth < 768 ? '300px' : '450px'
          }}>
            <img 
              src="/educational_initiatives_bg_1776918506592.png" 
              alt="Building Bright Futures" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Our Educational Philosophy (TaRL) Section */}
      <section style={{ padding: '6rem 5%', background: '#fdfdfd' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '350px' }}>
            <h2 style={{ 
              fontSize: '2.8rem', 
              fontWeight: '900', 
              color: '#1a1a1a', 
              marginBottom: '2rem',
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic'
            }}>
              Our Educational <span style={{ color: '#ff8c42' }}>Philosophy</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
              Traditional education systems often focus on completing the curriculum based on grade level, leaving many children behind if they haven't mastered basic concepts.
            </p>
            <div style={{ 
              background: '#fffdf5', 
              padding: '2.5rem', 
              borderRadius: '24px', 
              borderLeft: '8px solid #ff8c42',
              boxShadow: '0 15px 35px rgba(255, 140, 66, 0.1)'
            }}>
              <p style={{ fontSize: '1.25rem', color: '#333', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <span style={{ color: '#ff8c42' }}>Teaching at Right Level (TaRL)</span> flips this approach. Instead of teaching to the grade, we teach to the child's actual learning level.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.7' }}>
                Our <strong style={{ color: '#1a1a1a' }}>30-50 day learning cycles</strong> focus on building strong foundational skills in reading and basic arithmetic, ensuring no child is left behind.
              </p>
            </div>
          </div>
          <div style={{ flex: '0.8', minWidth: '350px' }}>
            <div style={{ 
              position: 'relative',
              padding: '2.5rem',
              background: '#fcfcf0',
              borderRadius: '30px',
              textAlign: 'center',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '4.5rem', fontWeight: '900', color: '#ff8c42', marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif" }}>30-50</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', textTransform: 'uppercase', letterSpacing: '3px' }}>Day Cycles</div>
              <div style={{ margin: '1.5rem auto', width: '50px', height: '4px', background: '#ff8c42', opacity: 0.3 }}></div>
              <p style={{ color: '#666', fontStyle: 'italic', fontSize: '1.1rem' }}>Rapid progress through level-based grouping and activity-driven engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section style={{ 
        padding: '10rem 0', 
        background: 'url("/yellow_watercolor_wash.png") center/cover no-repeat',
        textAlign: 'center',
        width: '100%',
        marginTop: '-5rem',
        position: 'relative',
        zIndex: 2,
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 8%' }}>
          <h2 style={{ fontSize: windowWidth < 768 ? '2.2rem' : '3.5rem', fontWeight: '900', marginBottom: '2rem', color: '#1a1a1a' }}>Our Vision</h2>
          <p style={{ fontSize: windowWidth < 768 ? '1.1rem' : '1.6rem', lineHeight: '1.7', color: '#1a1a1a', fontWeight: '500' }}>
            <span style={{ color: '#e53935', fontWeight: '800' }}>BK Education and Welfare Society</span> is committed to making <strong>schools</strong> and <strong>communities</strong> <strong>future-ready</strong> where every <strong>child</strong>, <strong>youth</strong> and <strong>woman</strong> has the <strong>education</strong>, <strong>tools</strong> and <strong>opportunities</strong> to thrive in an ever-changing world. 
            By implementing innovative learning models like <strong>TaRL</strong>, providing specialized <strong>vocational training</strong> for self-reliance, and leading <strong>environmental</strong> and <strong>public health</strong> initiatives, we strive to build a foundation of <strong>dignity</strong> and <strong>sustainable progress</strong> for all.
          </p>
        </div>
      </section>

      {/* Unified Blue Narrative Section (Philosophy + Impact) */}
      <section style={{ 
        padding: '8rem 4%', 
        background: 'url("/blue_watercolor_wash.png") center/cover no-repeat fixed',
        position: 'relative', 
        zIndex: 20,
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        marginTop: '-10rem' 
      }}>
        <div className="container" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: windowWidth < 992 ? '1fr' : '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
            <div style={{
              background: 'linear-gradient(145deg, #ffffff, #f1f3f6)',
              padding: '3.5rem 2.5rem',
              borderRadius: '0px',
              borderLeft: '10px solid #FFC107',
              boxShadow: '0 50px 100px rgba(0,0,0,0.2)',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '2.5rem' }}>
                The <span style={{ color: '#e53935' }}>BK</span> Education Approach
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Assessment-first mentality",
                  "Grouped by level, not grade",
                  "Activity-based learning",
                  "Rapid progress in 30-50 days",
                  "Empowering local communities"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600', color: '#333' }}>
                    <span style={{ color: '#e53935', fontSize: '1.4rem' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ 
              width: '100%',
              background: 'linear-gradient(145deg, #ffffff, #f1f3f6)',
              padding: '2.5rem',
              borderRadius: '0px',
              boxShadow: '0 50px 100px rgba(0,0,0,0.2)'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#555' }}>▶ See BK Education In Action</h4>
              <div style={{ aspectRatio: '16 / 9', background: '#000' }}>
                <iframe 
                  width="100%" height="100%" 
                  src="https://www.youtube.com/embed/Qm8d6k22oWY" 
                  title="TaRL Approach" frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: '#fff', padding: '5rem 4rem', borderRadius: '30px', boxShadow: '0 40px 100px rgba(0,0,0,0.15)' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2.5rem', color: '#1a1a1a', textAlign: 'center' }}>
                Why <span style={{ color: '#e53935' }}>TaRL</span> Matters?
              </h2>
              <div style={{ fontSize: '1.2rem', lineHeight: '1.9', color: '#444', textAlign: 'left' }}>
                <p style={{ marginBottom: '2rem' }}>Traditional education systems often focus on completing the curriculum based on grade level, leaving many children behind if they haven't mastered basic concepts.</p>
                <p style={{ marginBottom: '2rem' }}><strong>Teaching at Right Level (TaRL)</strong> flips this approach. Instead of teaching to the grade, we teach to the child's actual learning level.</p>
                <p>Our <strong>30-50 day learning cycles</strong> focus on building strong foundational skills in reading and basic arithmetic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Process Section */}
      <section style={{ padding: '10rem 4%', background: '#fff', textAlign: 'center', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '5rem', color: '#1a1a1a' }}>
            Our <span style={{ color: '#e53935' }}>Process</span>
          </h2>

          <style>{`
            .process-card-3d::after {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.8) 0%, transparent 50%);
              opacity: 0;
              transition: opacity 0.3s;
              pointer-events: none;
              z-index: 5;
            }
            .process-card-3d:hover::after {
              opacity: 0.4;
            }
          `}</style>
          
          <div className="process-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1200 ? '1fr 1fr' : 'repeat(4, 1fr)', 
            gap: '2.5rem',
            perspective: '1000px'
          }}>
            {[
              { 
                step: '01', 
                title: 'Assess', 
                color: '#FFB300', 
                text: "Quickly evaluate each child's reading and arithmetic levels using simple tools." 
              },
              { 
                step: '02', 
                title: 'Group', 
                color: '#e53935', 
                text: "Children are grouped by their current learning level rather than age or grade." 
              },
              { 
                step: '03', 
                title: 'Engage', 
                color: '#d81b60', 
                text: "Teachers use high-energy, activity-based methods to teach foundational skills." 
              },
              { 
                step: '04', 
                title: 'Evolve', 
                color: '#1a1a1a', 
                text: "Regular re-assessments allow children to move to higher level groups as they improve." 
              }
            ].map((s, i) => (
              <div 
                key={i} 
                className="process-card-3d"
                style={{
                  background: '#fff',
                  padding: '4rem 2rem',
                  borderRadius: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05), 0 1px 1px rgba(0,0,0,0.02)',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid #f0f0f0',
                  transformStyle: 'preserve-3d'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--x', `${x}%`);
                  e.currentTarget.style.setProperty('--y', `${y}%`);
                  
                  // Tilt effect based on mouse position
                  const rotateX = (y - 50) / 5;
                  const rotateY = (x - 50) / -5;
                  e.currentTarget.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 50px 100px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = s.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#f0f0f0';
                }}
              >
                {/* Large Background Number */}
                <div style={{ 
                  position: 'absolute', 
                  top: '2rem', 
                  right: '2rem', 
                  fontSize: '5rem', 
                  fontWeight: '900', 
                  color: s.color, 
                  opacity: 0.08,
                  lineHeight: 1,
                  transform: 'translateZ(20px)'
                }}>{s.step}</div>

                <h4 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '900', 
                  color: s.color, 
                  marginBottom: '1.5rem',
                  transform: 'translateZ(40px)'
                }}>{s.title}</h4>
                
                <p style={{ 
                  color: '#666', 
                  fontSize: '1.05rem', 
                  lineHeight: '1.8',
                  transform: 'translateZ(30px)',
                  fontWeight: '500'
                }}>{s.text}</p>

                {/* Bottom Border Accent */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '20%',
                  width: '60%',
                  height: '4px',
                  background: s.color,
                  borderRadius: '2px 2px 0 0',
                  opacity: 0.3
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Testimonials Section */}
      <section style={{ 
        padding: '10rem 0', 
        background: '#d81b60', 
        color: '#fff',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', marginBottom: '5rem', padding: '0 4%' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', color: '#fff' }}>Help Us Reach <span style={{ color: '#FFC107' }}>More Children</span></h2>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Your support can help us implement TaRL in more schools and communities,
            giving every child the foundation they need to succeed in life.
          </p>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Slider Container */}
          <div style={{ position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
            <div style={{ 
              display: 'flex', 
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ 
                  flex: '0 0 100%', 
                  padding: '0 1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{ position: 'relative', marginTop: '4rem', maxWidth: '600px', width: '100%' }}>
                    <div style={{
                      background: '#fff',
                      color: '#444',
                      padding: '5rem 2.5rem 3rem',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      position: 'relative',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      {/* Profile Image */}
                      <img src={t.img} alt={t.author} style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '-45px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: '5px solid #fff',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        objectFit: 'cover',
                        objectPosition: t.objectPosition || 'center'
                      }} />

                      <span style={{
                        fontSize: '6rem',
                        position: 'absolute',
                        top: '1.5rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        opacity: 0.1,
                        fontFamily: 'serif',
                        lineHeight: 1,
                        color: '#d81b60'
                      }}>“</span>
                      
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8', 
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 1,
                        marginBottom: '2rem'
                      }}>"{t.text}"</p>

                      <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.2rem', color: '#1a1a1a' }}>{t.author}</h4>
                        <p style={{ fontSize: '0.95rem', color: '#d81b60', fontWeight: '700' }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              style={{
                position: 'absolute',
                top: '55%',
                left: '20px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#fff',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
                zIndex: 20,
                backdropFilter: 'blur(5px)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              &#10094;
            </button>
            <button 
              onClick={nextSlide}
              style={{
                position: 'absolute',
                top: '55%',
                right: '20px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#fff',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
                zIndex: 20,
                backdropFilter: 'blur(5px)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              &#10095;
            </button>

            {/* Pagination Dots */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '12px', 
              marginTop: '4rem' 
            }}>
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: i === currentSlide ? '#FFC107' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaRL;
