import React, { useState, useEffect } from 'react';
import { renderText } from './Education';

const DisabilityAffairs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const animations = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .scroll-reveal {
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .scroll-reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const initiatives = [
    {
      title: "Competitive Exam Preparation",
      description: "We provide specialized coaching and study materials for persons with disabilities (PwD) preparing for various government and competitive examinations. Our focus is on breaking barriers and ensuring equal opportunities in the public sector.",
      details: ["Specialized Coaching", "Adaptive Study Material", "Mock Tests & Guidance"],
      icon: "📚",
      image: "/what_we_do_pwd_exam.png"
    },
    {
      title: "Vocational & Skill Training",
      description: "Empowering individuals with disabilities through practical vocational training programs that match their unique skills with market demands, fostering financial independence.",
      details: ["Technical Skills", "Soft Skills Training", "Job Placement Support"],
      icon: "⚙️",
      image: "/vocational_hero.png"
    },
    {
      title: "Advocacy & Awareness",
      description: "Raising awareness about the rights of PwD and helping them access government benefits, disability certificates, and various welfare schemes designed for their support.",
      details: ["Rights Awareness", "Scheme Navigation", "Legal Guidance"],
      icon: "🤝",
      image: "/social_awareness_bg.png"
    }
  ];

  return (
    <div className="disability-affairs-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <style>{animations}</style>

      {/* Premium Hero Section */}
      <section style={{ 
        padding: '6rem 5% 4rem', 
        background: 'linear-gradient(to right, #f8f9fa 0%, #e9ecef 100%)',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '4rem',
        minHeight: '70vh'
      }}>
        <div style={{ flex: '1.2', minWidth: '350px' }}>
          <h2 style={{ 
            fontSize: '1.1rem', 
            color: '#e53935', 
            fontWeight: '900', 
            marginBottom: '1.5rem', 
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            {renderText("BK Education and Welfare Society")}
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '900', 
            color: '#1a1a1a', 
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>
            Inclusive Education. <br/>
            <span style={{ color: '#e53935' }}>Unlimited</span> Potential.
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#555', 
            lineHeight: '1.6', 
            maxWidth: '600px',
            marginBottom: '3rem'
          }}>
            We believe that disability is not a barrier to success. Our dedicated programs for PwD are designed to provide the support, resources, and training needed to excel in competitive fields.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ borderLeft: '4px solid #e53935', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '800' }}>Free Coaching</h4>
              <p style={{ margin: 0, color: '#666' }}>For all competitive government exams</p>
            </div>
          </div>
        </div>
        <div style={{ 
          flex: '1', 
          position: 'relative', 
          minWidth: windowWidth < 768 ? '100%' : '400px', 
          minHeight: windowWidth < 768 ? '350px' : '500px',
          marginTop: windowWidth < 768 ? '2rem' : '0'
        }}>
          {/* Dotted Patterns */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '150px',
            height: '150px',
            backgroundImage: 'radial-gradient(#e53935 2px, transparent 2px)',
            backgroundSize: '15px 15px',
            zIndex: 0,
            opacity: 0.15,
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '5%',
            left: '15%',
            width: '180px',
            height: '180px',
            backgroundImage: 'radial-gradient(#e53935 2px, transparent 2px)',
            backgroundSize: '15px 15px',
            zIndex: 0,
            opacity: 0.15,
            borderRadius: '50%'
          }} />

          {/* Background Decorative Circle */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(229, 57, 53, 0.05) 0%, transparent 70%)',
            zIndex: 0
          }} />

          {/* Solid Red Circle */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '180px',
            height: '180px',
            background: '#e53935',
            borderRadius: '50%',
            zIndex: 0,
            opacity: 0.8,
            animation: 'fadeInUp 1s ease both 0.4s'
          }} />

          {/* Solid Decorative Circle */}
          <div style={{
            position: 'absolute',
            bottom: '5%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: '#fff5f5',
            borderRadius: '50%',
            zIndex: 0,
            border: '2px solid #ffcdd2',
            animation: 'fadeInUp 1s ease both 0.6s'
          }} />

          {/* Image 1 (Left - Wheelchair training) */}
          <div style={{
            position: 'absolute',
            top: '5%',
            left: '0',
            width: '55%',
            zIndex: 2,
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            animation: 'fadeInUp 1s ease both'
          }}>
            <img src="/disability_affair.png" alt="Students" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* Image 2 (Right Overlapping - Skill Dev) */}
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '0',
            width: '70%',
            zIndex: 1,
            borderRadius: '500px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            animation: 'fadeInUp 1.2s ease both 0.2s'
          }}>
            <img src="/skill_development_new.png" alt="Skill Development" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section style={{ padding: '8rem 5% 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Empowering with Accessibility</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              From specialized exam coaching to legal advocacy, our initiatives are tailored to meet the specific needs of the PwD community.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {initiatives.map((item, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '32px',
                padding: '3rem 2.5rem',
                boxShadow: '0 15px 45px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0',
                transition: 'all 0.4s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#e53935';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#f0f0f0';
              }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  background: '#fff5f5',
                  width: '80px',
                  height: '80px',
                  lineHeight: '80px',
                  borderRadius: '20px'
                }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.2rem', color: '#1a1a1a' }}>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>{item.description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  {item.details.map((detail, idx) => (
                    <span key={idx} style={{ 
                      fontSize: '0.8rem', fontWeight: '700', color: '#e53935', 
                      background: '#fff5f5', padding: '0.4rem 1rem', borderRadius: '15px' 
                    }}>{detail}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#1a1a1a', 
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '4rem', color: '#e53935', lineHeight: '1', display: 'block', marginBottom: '1rem' }}>&ldquo;</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.4' }}>
            Our mission is to create a world where every individual, regardless of their physical challenges, has the tools and confidence to achieve their dreams.
          </h2>
          <div style={{ width: '50px', height: '4px', background: '#e53935', margin: '0 auto 2rem' }}></div>
          <p style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>BK Education and Welfare Society</p>
        </div>
      </section>
    </div>
  );
};

export default DisabilityAffairs;
