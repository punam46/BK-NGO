import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutUsBanner from '../assets/about_us_hero_banner.png';
import boysSmilingImg from '../assets/boys_smiling_red.png';
import volunteersImg from '../assets/volunteers_smiling_faces.png';
import ghugeImg from '../assets/ghuge sir.jpeg';
import ThreeDCarousel from '../components/ThreeDCarousel';
import { renderText } from './Education';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    { img: "/bkphoto.jpeg", name: "Dr. Adv. Er. Bhagwan Nivrutti Elmame", role: "Bench Magistrate (Member) of the Child Welfare Committee", pos: "center" },
    { img: "/k1.jpeg", name: "Prof. Kishor Nivrutti Yelmame", role: "Founder President", pos: "right center" },
    { img: "/D1.jpeg", name: "Dnyaneshwar Nikalje", role: "Yoga & Physical Wellness Trainer", pos: "top center" },
    { img: ghugeImg, name: "Nandkishor Ghuge", role: "Senior Fitness & Conditioning Coach", pos: "top center" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="about-page">
      {/* Modern Hero Section */}
      <section style={{ 
        padding: '6rem 5% 4rem', 
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
              <span style={{ color: '#e53935', fontWeight: 'bold' }}>BK</span> Education and Welfare Society was founded in 2011 with the foundational idea of "Education for all". Since then, we have transformed this conviction into a powerful movement for social change, empowering India's youth and nurturing talent on the path to a brighter, more educated future.
            </p>
          </div>

          {/* Right Visuals (Overlapping Images) */}
          <div style={{ flex: '1', position: 'relative', minWidth: '400px', minHeight: '500px' }}>
            {/* Dotted Patterns */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '120px',
              height: '120px',
              backgroundImage: 'radial-gradient(#ddd 2px, transparent 2px)',
              backgroundSize: '15px 15px',
              zIndex: 0
            }} />
            <div style={{
              position: 'absolute',
              bottom: '5%',
              left: '15%',
              width: '150px',
              height: '150px',
              backgroundImage: 'radial-gradient(#ddd 2px, transparent 2px)',
              backgroundSize: '15px 15px',
              zIndex: 0
            }} />

            {/* Image 1 (Left) */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: '0',
              width: '60%',
              zIndex: 2,
              borderRadius: '40px 40px 10px 40px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}>
              <img src={boysSmilingImg} alt="Students" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Image 2 (Right Overlapping) */}
            <div style={{
              position: 'absolute',
              top: '15%',
              right: '0',
              width: '70%',
              zIndex: 1,
              borderRadius: '10px 40px 40px 40px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
            }}>
              <img src={volunteersImg} alt="Volunteers" style={{ width: '100%', display: 'block' }} />
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
          <div className="profile-photo-col" style={{ position: 'relative', animation: 'fadeUp 1s ease-out forwards', flex: '1', minWidth: '300px' }}>
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
                  style={{ width: '100%', borderRadius: '12px 12px 0 0', display: 'block' }} 
                />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#333', marginBottom: '0.3rem' }}>Dr. Adv. Er. Bhagwan Nivrutti Elmame</h3>
                  <p style={{ fontSize: '0.95rem', color: '#000', fontWeight: '600' }}>Secretary, <span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society</p>
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
                <strong>Dr. Adv. Er. Bhagwan Nivrutti Elmame</strong> is a seasoned academician, legal professional, administrator, and media leader with more than two decades of rich experience in the fields of education, law, governance, and social development. His career reflects a unique blend of academic excellence, practical legal expertise, institutional leadership, and public service.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                He currently serves as the <strong>Chief Editor of <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</strong>, where he actively contributes to responsible journalism, public awareness, and dissemination of knowledge on contemporary legal, social, and governance issues. In addition, he holds the position of <strong>Secretary of <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society</strong>, leading various initiatives aimed at promoting education, social justice, and community empowerment.
              </p>
              <p>
                Dr. Elmame is also entrusted with a significant quasi-judicial responsibility as a <strong>Bench Magistrate (Member)</strong> 
                of the Child Welfare Committee under the Government of Maharashtra, where he plays a vital role in safeguarding 
                child rights, ensuring rehabilitation, and implementing child protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section" style={{ 
        padding: '8rem 0', 
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
          {/* Orange Introduction Tag */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            background: '#FFC107', 
            padding: '0.6rem 1.5rem', 
            marginBottom: '2rem',
            borderRadius: '4px',
            color: '#1a1a1a',
            fontWeight: '800',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            letterSpacing: '1px'
          }}>
            <span style={{ marginRight: '10px' }}>&gt;</span> INTRODUCTION
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1.5rem', color: '#1a1a1a', fontWeight: '800' }}>
            <span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society (NGO) <span style={{ fontSize: '1rem', verticalAlign: 'middle', background: '#f5f5f5', padding: '4px 10px', borderRadius: '4px', border: '1px solid #ddd', color: '#666', fontWeight: '600' }}>Reg. No. F-12121</span>
          </h2>
          
          <div style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.15rem)', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The <strong><span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society (NGO)</strong> was formed with the core vision of <strong>"Education for all"</strong> and creating widespread awareness about health, environment, and social issues. Since 2011, we have been dedicated to fostering social growth and empowering communities through diverse interventions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We are deeply committed to supporting physically challenged individuals by providing free guidance for competitive exams and helping them secure government placements. Additionally, we provide meaningful support to students from economically weaker sections through significant fee reductions, ensuring that financial barriers do not hinder academic progress.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              As part of our socio-economic contribution, we introduced the first national <strong>Bilingual News Paper</strong> that exclusively features positive news. Through our <strong>"One Village One Reporter"</strong> system, we generate employment at the village, Tehsil, and district levels. Our weekly newsletter keeps rural communities and students updated on current affairs, general knowledge, and all public sector vacancies.
            </p>
            <p>
              Beyond education and media, we take active responsibility for the environment and public health. We conduct large-scale tree plantation campaigns and implement programs to ensure safe drinking water supply, striving to uplift society through every initiative.
            </p>
          </div>
        </div>
      </section>
      {/* Key Focus Areas */}
      <section className="about-programs-preview" style={{ padding: '6rem 0', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', padding: '0 4%' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>
            Our Key <span style={{ color: '#e53935' }}>Programs</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#FFC107', margin: '0 auto' }}></div>
        </div>

        <ThreeDCarousel />
      </section>

      {/* Our Team Section */}
      <section style={{ 
        position: 'relative',
        background: '#d81b60', /* Radiant Crimson Pink */
        padding: '8rem 0 6rem',
        color: '#fff'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 8vw, 4.5rem)', 
            textAlign: 'center', 
            marginBottom: '6rem', 
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            opacity: 0.9,
            lineHeight: '1'
          }}>Our Team</h2>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: windowWidth < 768 ? '2rem' : '5rem', 
            alignItems: 'flex-start' 
          }}>
            {/* Left Content Block: Managing Committee */}
            <div style={{ flex: '1.6', minWidth: windowWidth < 768 ? '100%' : '350px', paddingLeft: windowWidth < 768 ? '0' : '5%' }}>
              <div style={{ 
                padding: '2.5rem 0',
                borderRadius: '24px'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
                  fontWeight: '900', 
                  marginBottom: '1.2rem', 
                  lineHeight: '1.1',
                  color: '#fff'
                }}>
                  Managing <br/> Committee
                </h3>
                <p style={{ 
                  fontSize: '1.05rem', 
                  lineHeight: '1.8', 
                  color: 'rgba(255,255,255,0.95)',
                  marginBottom: '2rem'
                }}>
                  <span style={{ fontWeight: 'bold' }}><span style={{ color: '#fff' }}>BK</span> Educational and Welfare Society</span>'s leadership collective comprising of Regional and Functional Directors who provide strategic direction to organizational objectives.
                </p>
                <div style={{ 
                  width: '100%', 
                  height: '2px', 
                  background: 'rgba(255,255,255,0.4)', 
                  marginTop: '1rem' 
                }}></div>


              </div>
            </div>

            {/* Right Content Block: Team Slider */}
            <div style={{ 
              flex: '2', 
              position: 'relative', 
              overflow: 'hidden', 
              paddingBottom: '2rem',
              minWidth: windowWidth < 768 ? '100%' : '400px'
            }}>
              <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${currentSlide * (windowWidth < 768 ? 100 : 50)}%)`,
                padding: '0 0.5rem'
              }}>
                {teamMembers.map((member, i) => (
                  <div key={i} style={{ 
                    flex: windowWidth < 768 ? '0 0 100%' : '0 0 calc(50% - 0.75rem)', 
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '450px',
                      background: '#ffffff', 
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      color: '#fff'
                    }}>
                      <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.pos || 'center' }} />
                      
                      {/* Overlay for Text */}
                      <div style={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: '3rem 1.8rem 1.8rem',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                        textAlign: 'left'
                      }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: '#fff', lineHeight: '1.3' }}>{member.name}</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.9, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#FFC107' }}>{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div style={{ 
                position: 'absolute', 
                bottom: '1rem', 
                right: '1.5rem', 
                display: 'flex', 
                gap: '12px', 
                zIndex: 30 
              }}>
                <button 
                  onClick={prevSlide}
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: '0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#FFC107'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  &#10094;
                </button>
                <button 
                  onClick={nextSlide}
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: '0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#FFC107'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
