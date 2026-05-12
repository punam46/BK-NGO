import React, { useState, useEffect } from 'react';
import { renderText } from './Education';

import womenEmpowermentImg from '../assets/Women-Empowerment.webp';

const WomanEmpowerment = () => {
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
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
      40% { transform: translateY(-10px) translateX(-50%); }
      60% { transform: translateY(-5px) translateX(-50%); }
    }
  `;

  const initiatives = [
    {
      title: "Skill Development & Livelihood",
      description: "Equipping women with vocational skills, financial literacy, and entrepreneurial support to become financially independent and leaders in their communities.",
      details: ["Vocational Training", "Financial Literacy", "Microfinance"],
      icon: "💼",
    },
    {
      title: "Health & Hygiene Awareness",
      description: "Conducting awareness programs on menstrual hygiene, reproductive health, and overall well-being, while providing access to essential healthcare resources.",
      details: ["Health Camps", "Hygiene Kits", "Nutrition Counseling"],
      icon: "🌸",
    },
    {
      title: "Women's Safety & Rights",
      description: "Empowering women with the knowledge of their legal rights, offering self-defense training, and creating a robust support network against domestic violence.",
      details: ["Legal Awareness", "Self-Defense", "Counseling"],
      icon: "🛡️",
    }
  ];

  return (
    <div className="woman-empowerment-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <style>{animations}</style>

      {/* Immersive Hero Section */}
      <section style={{
        height: '85vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${womenEmpowermentImg})`,
        backgroundColor: '#f0f9ff',
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        {/* Content removed to make background clearly visible as requested */}
        <div style={{ position: 'relative', zIndex: 10 }}></div>

        {/* Decorative Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>Explore</span>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #fff, transparent)' }}></div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section style={{ padding: '8rem 5% 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Our Focus Areas</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Providing comprehensive support to ensure women have the tools, knowledge, and confidence to succeed in every sphere of life.
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
                  e.currentTarget.style.borderColor = '#e91e63';
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
                  background: '#fce4ec',
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
                      fontSize: '0.8rem', fontWeight: '700', color: '#e91e63',
                      background: '#fce4ec', padding: '0.4rem 1rem', borderRadius: '15px'
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
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
        color: '#1a1a1a',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '5rem', color: '#e91e63', lineHeight: '1', display: 'block', marginBottom: '0.5rem' }}>&ldquo;</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.4', color: '#2e3440' }}>
            When women are empowered and can claim their rights and access to land, leadership, opportunities and choices, economies grow, food security is enhanced and prospects are improved for current and future generations.
          </h2>
          <div style={{ width: '50px', height: '4px', background: '#e91e63', margin: '0 auto 2rem' }}></div>
          <p style={{ fontSize: '1rem', color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>BK Education and Welfare Society</p>
        </div>
      </section>
    </div>
  );
};

export default WomanEmpowerment;
