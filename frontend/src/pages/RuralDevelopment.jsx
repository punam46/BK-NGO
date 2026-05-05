import React, { useEffect, useRef } from 'react';
import { renderText } from './Education';
import treePlantationImg from '../assets/ai_reforestation.png';
import waterSupplyImg from '../assets/ai_water.png';
import ruralHeroImg from '../assets/ai_rural_hero.png';
import agricultureImg from '../assets/ai_agriculture.png';
import conservationImg from '../assets/ai_conservation_banner.png';

const RuralDevelopment = () => {
  const animations = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes growLine {
      from { width: 0; }
      to { width: 80px; }
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
      title: "Reforestation & Tree Plantation",
      description: "BK Education and Welfare Society is deeply committed to restoring our local ecosystems. We organize massive tree plantation drives across rural mountains and barren lands, planting thousands of native saplings to combat soil erosion and promote biodiversity.",
      details: ["Native Species Focus", "Soil Conservation", "Community Managed Forests"],
      icon: "🌳",
      image: treePlantationImg
    },
    {
      title: "Clean Water Infrastructure",
      description: "Addressing the critical need for safe drinking water in remote villages. Our programs include installing borewells, water purification systems, and regular water supply drives during peak drought months.",
      details: ["Borewell Installation", "Filtration Systems", "Drought Relief Drives"],
      icon: "💧",
      image: waterSupplyImg
    },
    {
      title: "Sustainable Agriculture",
      description: "Empowering rural farmers with knowledge of modern, sustainable farming techniques that increase yield while preserving soil health and reducing chemical dependency.",
      details: ["Organic Farming Guidance", "Resource Management", "Farmer Workshops"],
      icon: "🌾",
      image: agricultureImg
    }
  ];

  return (
    <div className="rural-development-page" style={{ background: '#fff', minHeight: '100vh' }}>
      <style>{animations}</style>

      {/* Modern Split Hero Section */}
      <section style={{ 
        display: 'flex', 
        minHeight: '85vh', 
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          flex: '1', 
          padding: '6rem 8% 4rem', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a2e1f 0%, #000 100%)',
          minWidth: '400px',
          zIndex: 2
        }}>
          <h2 style={{ 
            fontSize: '1.1rem', 
            color: 'var(--pratham-yellow)', 
            fontWeight: '900', 
            marginBottom: '1.5rem', 
            letterSpacing: '3px',
            textTransform: 'uppercase',
            animation: 'fadeInUp 1s ease forwards'
          }}>
            {renderText("BK Education and Welfare Society")}
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            lineHeight: '1',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease forwards 0.2s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}>
            Greening the <span style={{ color: 'var(--pratham-yellow)' }}>Rural</span> Landscape.
          </h1>
          <div style={{ 
            height: '4px', 
            background: 'var(--pratham-yellow)', 
            width: '80px', 
            marginBottom: '2.5rem',
            animation: 'growLine 1s ease forwards 0.5s'
          }}></div>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#ccc', 
            lineHeight: '1.6', 
            maxWidth: '500px',
            animation: 'fadeInUp 1s ease forwards 0.4s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}>
            Transforming rural lives through sustainable environmental practices, clean water access, and eco-conscious community development.
          </p>
        </div>
        <div style={{ 
          flex: '1.2', 
          position: 'relative',
          minHeight: '500px',
          minWidth: '400px'
        }}>
          <img 
            src={ruralHeroImg} 
            alt="Rural Development" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              animation: 'slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.2)',
            maxWidth: '300px',
            animation: 'fadeInUp 1s ease forwards 0.8s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--pratham-yellow)', margin: 0 }}>10,000+</h3>
            <p style={{ fontSize: '0.9rem', color: '#fff', margin: 0 }}>Saplings planted across the region in our recent drives.</p>
          </div>
        </div>
      </section>

      {/* Core Initiatives - Interactive Cards */}
      <section style={{ padding: '8rem 5% 6rem', background: '#fcfcfc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Our Rural Focus</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Building a sustainable future for our rural communities through targeted environmental and infrastructural interventions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {initiatives.map((item, index) => (
              <div key={index} className="scroll-reveal active" style={{
                background: '#fff',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                transition: 'all 0.5s ease',
                position: 'relative',
                border: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 105, 92, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.2rem', color: '#1a1a1a' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7', marginBottom: '2rem' }}>{item.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {item.details.map((detail, idx) => (
                      <span key={idx} style={{ 
                        background: '#f0f4f2', color: '#00695c', 
                        padding: '0.4rem 1rem', borderRadius: '20px', 
                        fontSize: '0.85rem', fontWeight: '700' 
                      }}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Banner */}
      <section style={{ 
        padding: '6rem 5%', 
        background: '#1b5e20', 
        color: '#fff', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.8), rgba(27, 94, 32, 0.8)), url(${conservationImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2rem' }}>Every Tree Planted is a Promise to the Future.</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem', lineHeight: '1.6' }}>
            At BK Education and Welfare Society, we believe that rural development and environmental stewardship go hand-in-hand. By restoring our greenery, we secure the livelihoods and health of our village communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RuralDevelopment;
