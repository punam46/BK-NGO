import React, { useState, useEffect, useRef } from 'react';
import { renderText } from './Education';
import bloodCampImg from '../assets/g16.jpeg';
import socialWelfImg from '../assets/socialwelf.png';

const SocialWelfare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 6);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Animation Styles
  const slideAnimationStyle = `
    @keyframes slideFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes imageZoom {
      from { transform: scale(1.15); }
      to { transform: scale(1); }
    }
    .active-slide-text {
      animation: slideFadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .active-slide-img {
      animation: imageZoom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;
  const animations = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes reveal {
      from { width: 0; }
      to { width: 100%; }
    }
    @media (max-width: 992px) {
      .methodology-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 600px) {
      .methodology-grid {
        grid-template-columns: 1fr !important;
      }
      .initiative-card {
        padding: 1.5rem !important;
        gap: 2rem !important;
      }
      .initiative-card h3 {
        font-size: 1.8rem !important;
      }
      .initiative-img-container {
        height: 300px !important;
      }
    }
  `;

  const welfareItems = [
    {
      title: "Social Awareness & Rights",
      description: "BK Education and Welfare Society conducts extensive campaigns to raise awareness about critical social issues, including legal rights, gender equality, and environmental protection. By empowering community members with knowledge about government welfare schemes and constitutional rights, we enable them to make informed decisions for their families.",
      icon: "📢",
      image: "/social.png"
    },
    {
      title: "Community Welfare Services",
      description: "BK Education and Welfare Society provides direct and immediate support for underprivileged families through systemic resource distribution. This includes food drives, winter clothing distributions, and providing essential household items to those in extreme need.",
      icon: "🤝",
      image: "/cominp.jpg"
    },
    {
      title: "Social Security Schemes",
      description: "We help community members navigate and access various government social security benefits, ensuring that those entitled to support—such as the elderly, widowed, or disabled—receive their rightful aid without administrative hurdles.",
      icon: "🛡️",
      image: "/community_services_bg_1776918702641.png"
    },
    {
      title: "Women Empowerment",
      description: "Focusing on self-reliance through vocational training and self-help groups. We empower women to become financially independent and lead their communities towards progressive social change.",
      icon: "👩‍💼",
      image: "/senior_counseling_bg_new_1776918822970.png"
    },
    {
      title: "Legal Aid Clinics",
      description: "Providing free legal consultation and representation for marginalized individuals who cannot afford professional legal services, ensuring that justice is accessible to everyone regardless of their financial status.",
      icon: "⚖️",
      image: "/vocational_guidance_bg_1776918722666.png"
    },
    {
      title: "Youth Skills Development",
      description: "Bridging the gap between education and employment by providing specialized skill training in modern trades, helping the youth from underprivileged backgrounds secure sustainable livelihoods.",
      icon: "🛠️",
      image: "/career_counseling_bg_new_1776918786013.png"
    }
  ];

  const methodology = [
    { step: "01", title: "Identification", text: "Identifying families and individuals in dire need through grassroots surveys." },
    { step: "02", title: "Direct Relief", text: "Providing immediate assistance including food, health support, and shelter." },
    { step: "03", title: "Awareness", text: "Educating the community about their long-term rights and government benefits." },
    { step: "04", title: "Empowerment", text: "Enabling self-sustenance through skill-building and continuous mentoring." }
  ];

  return (
    <div className="social-welfare-page" style={{ background: '#fff', minHeight: '100vh', paddingBottom: '6rem' }}>
      <style>{animations}</style>

      {/* Philosophy/Intro Section */}
      <section style={{ 
        padding: '4rem 5% 2rem', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #fff 0%, #f9f9f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            color: 'var(--pratham-yellow)', 
            fontWeight: '900', 
            marginBottom: '1.5rem', 
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {renderText("BK Education and Welfare Society")}
          </h2>
          <h1 style={{ 
            fontSize: '3.2rem', 
            fontWeight: '900', 
            color: '#1a1a1a', 
            marginBottom: '2rem',
            lineHeight: '1.2',
            letterSpacing: '-2px'
          }}>
            Upholding Dignity, Empowering Lives.
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#555', 
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Through direct intervention and systemic awareness, BK Education and Welfare Society ensures that no individual is left behind. Our social welfare initiatives are designed to provide both immediate relief and long-term security to the marginalized sections of society.
          </p>
        </div>
      </section>


      {/* Methodology Section */}
      <section style={{ 
        padding: '2rem 5% 6rem', 
        background: '#fcfcfc',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Watercolor Background Effect */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/yellow_watercolor_wash.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'hue-rotate(280deg) saturate(2) brightness(0.9)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem' }}>How We Create Change</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Our systematic approach to ensuring sustainable social welfare.</p>
          </div>
          <div className="methodology-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {methodology.map((m, index) => (
              <div key={index} style={{ 
                textAlign: 'center', 
                padding: '3rem 2rem',
                background: '#e0f7fa',
                borderRadius: '32px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                border: '1px solid #b2ebf2',
                animation: `fadeInUp 0.8s ease forwards ${index * 0.2}s, float 4s ease-in-out infinite ${index * 0.5}s`,
                opacity: 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 188, 212, 0.2), 0 10px 20px rgba(0,0,0,0.05)';
                e.currentTarget.style.background = '#b2ebf2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                e.currentTarget.style.background = '#fce4ec';
              }}
              >
                <div style={{ 
                  fontSize: '4rem', 
                  fontWeight: '900', 
                  color: 'rgba(0, 188, 212, 0.1)', 
                  marginBottom: '-3rem',
                  transition: 'all 0.4s ease'
                }}>{m.step}</div>
                <h4 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '800', 
                  marginBottom: '1.2rem', 
                  position: 'relative',
                  color: '#1a1a1a'
                }}>{m.title}</h4>
                <div style={{ 
                  width: '40px', 
                  height: '4px', 
                  background: '#00bcd4', 
                  margin: '0 auto 1.5rem',
                  borderRadius: '2px'
                }}></div>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.7', fontWeight: '500' }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Initiatives Slider */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem' }}>Our Recent Initiatives</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Discover how we are making a direct impact on the ground.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Slider Container */}
            <div style={{ overflow: 'hidden' }}>
              <div style={{ 
                display: 'flex', 
                transition: 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
                transform: `translateX(-${currentSlide * 100}%)`
              }}>
                {[
                  {
                    tag: "Life-Saving Initiatives",
                    title: "BK Education and Welfare Society: Blood Donation Camp",
                    desc: "Our society organizes regular blood donation camps to bridge the gap between supply and demand in local healthcare facilities. By mobilizing community members and volunteers, we ensure that life-saving blood is available for those in critical need, especially during emergencies.",
                    desc2: "These camps are more than just donation drives; they are a testament to the collective spirit of the BK Education and Welfare Society. Every drop donated is a promise of hope.",
                    img: bloodCampImg,
                    color: "#d81b60"
                  },
                  {
                    tag: "Environmental Stewardship",
                    title: "Mountain Cleaning & Heritage Preservation: Ramshej Fort",
                    desc: "Protecting our historical monuments and local ecosystems is a core pillar of our social work. Our volunteers regularly trek to the historic Ramshej Fort to conduct extensive cleaning drives, ensuring that this sacred heritage site remains free from plastic waste.",
                    desc2: "Through these mountain cleaning initiatives, BK Education and Welfare Society promotes a culture of environmental responsibility and respect for our ancestors' legacy.",
                    img: "/ramshej_cleaning.jpg",
                    color: "#2e7d32"
                  },
                  {
                    tag: "Social Justice & Equality",
                    title: "Celebrating Equality: Dr. Babasaheb Ambedkar Jayanti",
                    desc: "We honor the visionary leadership and legacy of Dr. Babasaheb Ambedkar by celebrating his birth anniversary with profound respect. Our society conducts educational programs and community dialogues that emphasize equality and justice.",
                    desc2: "BK Education and Welfare Society reaffirms its commitment to empowering the marginalized and upholding the constitutional rights of every citizen.",
                    img: "/ambedkar_jayanti.jpg",
                    color: "#0d47a1"
                  },
                  {
                    tag: "Essential Services",
                    title: "Clean Water Access: Serving the Community",
                    desc: "Ensuring access to clean drinking water is a fundamental human right. BK Education and Welfare Society regularly organizes water supply drives in underprivileged areas, especially during the harsh summer months, to prevent dehydration and support families in need.",
                    desc2: "Our goal is to provide immediate relief while fostering awareness about water conservation and hygiene, ensuring that no individual has to struggle for this basic necessity.",
                    img: "/water_supply_social.jpg",
                    color: "#03a9f4"
                  },
                  {
                    tag: "Social Protection",
                    title: "Stop Child Marriage: Protecting Futures",
                    desc: "BK Education and Welfare Society is dedicated to eradicating the practice of child marriage through grassroots awareness and community workshops. We work closely with families and local leaders to emphasize the importance of education and the health risks of early marriage.",
                    desc2: "Ensuring every girl has the right to a childhood and a future of her choice is our priority. We empower girls with knowledge of their rights and provide support systems to keep them in school.",
                    img: "/infant_marriage.jpg",
                    color: "#673ab7"
                  },
                  {
                    tag: "Safety Initiatives",
                    title: "Personal Safety & Empowerment: Women & Children",
                    desc: "Our 'Good Touch & Bad Touch' workshops empower children with the confidence to identify and report inappropriate behavior, creating a safer environment at home and school. We believe awareness is the first shield for our children.",
                    desc2: "In addition, our Women Safety programs provide essential self-defense training and legal awareness. We are building a community where every woman and child feels secure, informed, and empowered to stand up for their safety.",
                    img: "/women_safety.jpg",
                    color: "#ffa000"
                  }
                ].map((item, i) => (
                  <div key={i} style={{ 
                    flex: '0 0 100%', 
                    padding: '0 10px',
                    opacity: currentSlide === i ? 1 : 0.4,
                    transition: 'opacity 0.8s ease'
                  }}>
                    <style>{slideAnimationStyle}</style>
                    <div className="initiative-card" style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: windowWidth < 768 ? '2rem' : '4rem', 
                      flexWrap: 'wrap',
                      background: '#fff',
                      padding: windowWidth < 768 ? '1.5rem' : '3rem',
                      borderRadius: '40px',
                      boxShadow: currentSlide === i ? '0 40px 80px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.05)',
                      transform: currentSlide === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      border: '1px solid #f0f0f0'
                    }}>
                      <div style={{ flex: '1', minWidth: windowWidth < 768 ? '100%' : '350px' }}>
                        <h2 className={currentSlide === i ? 'active-slide-text' : ''} style={{ 
                          fontSize: '1rem', 
                          color: item.color, 
                          fontWeight: '900', 
                          marginBottom: '1rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '2px',
                          animationDelay: '0.1s',
                          opacity: currentSlide === i ? 1 : 0
                        }}>{item.tag}</h2>
                        <h3 className={currentSlide === i ? 'active-slide-text' : ''} style={{ 
                          fontSize: windowWidth < 768 ? '1.8rem' : '2.5rem', 
                          fontWeight: '900', 
                          color: '#1a1a1a', 
                          marginBottom: '1.5rem', 
                          lineHeight: '1.2',
                          animationDelay: '0.2s',
                          opacity: currentSlide === i ? 1 : 0
                        }}>{item.title}</h3>
                        <p className={currentSlide === i ? 'active-slide-text' : ''} style={{ 
                          fontSize: '1.1rem', 
                          lineHeight: '1.8', 
                          color: '#555', 
                          textAlign: 'justify',
                          animationDelay: '0.3s',
                          opacity: currentSlide === i ? 1 : 0
                        }}>{item.desc}<br /><br />{item.desc2}</p>
                      </div>
                      <div className="initiative-img-container" style={{ 
                        flex: '1', 
                        minWidth: windowWidth < 768 ? '100%' : '350px', 
                        borderRadius: '30px', 
                        overflow: 'hidden', 
                        boxShadow: '0 30px 60px rgba(0,0,0,0.1)', 
                        height: windowWidth < 768 ? '300px' : '450px',
                        position: 'relative'
                      }}>
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className={currentSlide === i ? 'active-slide-img' : ''}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 1.2s ease'
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Navigation Controls */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginTop: '1rem',
              justifyContent: 'center'
            }}>
              <button 
                onClick={() => setCurrentSlide(prev => (prev - 1 + 6) % 6)}
                style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '18px',
                  border: '1px solid #eee',
                  background: '#fff',
                  color: '#333',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  transition: '0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--pratham-yellow)'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#333'; }}
              >&#10094;</button>
              <button 
                onClick={() => setCurrentSlide(prev => (prev + 1) % 6)}
                style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '18px',
                  border: '1px solid #eee',
                  background: '#fff',
                  color: '#333',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  transition: '0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--pratham-yellow)'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#333'; }}
              >&#10095;</button>
            </div>
          </div>
        </div>
      </section>


      {/* New Social Welfare Banner Section */}
      <section style={{
        width: '100%',
        padding: '1rem 5% 4rem',
        background: '#fff'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          overflow: 'hidden',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
        }}>
          <img 
            src={socialWelfImg} 
            alt="Social Welfare" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </section>
    </div>
  );
};

export default SocialWelfare;
