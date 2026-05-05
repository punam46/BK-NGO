import React, { useState, useEffect } from 'react';
import { renderText } from './Education';

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

      {/* Premium Hero Section */}
      <section style={{
        padding: '2rem 5% 4rem',
        background: 'linear-gradient(to right, #fce4ec 0%, #f8bbd0 100%)',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '4rem',
        minHeight: '70vh'
      }}>
        <div style={{ flex: '1.2', minWidth: '350px' }}>
          <h2 style={{
            fontSize: '1.1rem',
            color: '#e91e63',
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
            Empowering Women. <br />
            <span style={{ color: '#e91e63' }}>Transforming</span> Communities.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#555',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '3rem'
          }}>
            We believe that empowering a woman empowers an entire generation. Our programs aim to foster independence, ensure safety, and build leadership among women in rural and urban areas alike.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ borderLeft: '4px solid #e91e63', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '800' }}>Equal Opportunities</h4>
              <p style={{ margin: 0, color: '#666' }}>Building a balanced society</p>
            </div>
          </div>
        </div>
        <div style={{
          flex: '1',
          position: 'relative',
          minWidth: windowWidth < 768 ? '100%' : '400px',
          minHeight: windowWidth < 768 ? '450px' : '550px',
          marginTop: windowWidth < 768 ? '2rem' : '0'
        }}>
          {/* Top-Left Dotted Pattern */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '10%',
            width: '120px',
            height: '100px',
            backgroundImage: 'radial-gradient(#ccc 2px, transparent 2px)',
            backgroundSize: '15px 15px',
            zIndex: 0,
            opacity: 0.5
          }} />

          {/* Background Decorative Circle */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(233, 30, 99, 0.05) 0%, transparent 70%)',
            zIndex: 0
          }} />

          {/* Image */}
          <div style={{
            position: 'absolute',
            top: '5%',
            left: '0',
            width: '100%',
            height: '90%',
            zIndex: 2,
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            animation: 'fadeInUp 1s ease both'
          }}>
            <img src="/woman_empowerment.png" alt="Women Empowerment" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
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
