import React from 'react';
import { renderText } from './Education';
import yogaHeroImg from '../assets/yoga_hero.png';
import yogaMeditationImg from '../assets/yoga_meditation.png';
import yogaCommunityImg from '../assets/yoga_community.png';
import yogaBannerImg from '../assets/yoga_banner.png';

const Yoga = () => {
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
      title: "Mindfulness & Meditation",
      description: "We bring the ancient wisdom of meditation to rural communities, helping individuals manage stress, improve focus, and find inner peace amidst life's challenges.",
      details: ["Guided Meditation", "Stress Management", "Mental Clarity"],
      icon: "🧘",
      image: yogaMeditationImg
    },
    {
      title: "Community Yoga Sessions",
      description: "Our weekly yoga classes in villages promote physical health, flexibility, and a sense of togetherness. We believe wellness is a collective journey.",
      details: ["Village Workshops", "Physical Wellness", "Social Connection"],
      icon: "🤝",
      image: yogaCommunityImg
    },
    {
      title: "Holistic Health Education",
      description: "Educating rural families about the importance of breathing techniques, balanced diet, and natural lifestyle choices for long-term health and vitality.",
      details: ["Pranayama Practice", "Natural Living", "Health Awareness"],
      icon: "🌿",
      image: yogaHeroImg
    }
  ];

  return (
    <div className="yoga-page" style={{ background: '#fff', minHeight: '100vh' }}>
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
          background: 'linear-gradient(135deg, #1a2e3b 0%, #000 100%)',
          minWidth: '400px',
          zIndex: 2
        }}>
          <h2 style={{ 
            fontSize: '1.1rem', 
            color: '#ffcc00', 
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
            Wellness for <span style={{ color: '#ffcc00' }}>Body & Soul</span>.
          </h1>
          <div style={{ 
            height: '4px', 
            background: '#ffcc00', 
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
            Integrating traditional yoga practices into rural life to enhance mental clarity, physical vitality, and emotional balance.
          </p>
        </div>
        <div style={{ 
          flex: '1.2', 
          position: 'relative',
          minHeight: '500px',
          minWidth: '400px'
        }}>
          <img 
            src={yogaHeroImg} 
            alt="Yoga Hero" 
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
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ffcc00', margin: 0 }}>5,000+</h3>
            <p style={{ fontSize: '0.9rem', color: '#fff', margin: 0 }}>Lives transformed through our rural yoga and meditation workshops.</p>
          </div>
        </div>
      </section>

      {/* Core Initiatives - Interactive Cards */}
      <section style={{ padding: '8rem 5% 6rem', background: '#fcfcfc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Our Wellness Path</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Promoting holistic health through structured yoga programs that cater to all ages and backgrounds.
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
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(255, 204, 0, 0.1)';
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
                        background: '#fff8e1', color: '#ffa000', 
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

      {/* Serenity Banner */}
      <section style={{ 
        padding: '10rem 5%', 
        color: '#fff', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${yogaBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Harmony is the Ultimate Goal.</h2>
          <p style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '3rem', lineHeight: '1.6', fontWeight: '300' }}>
            At BK Education and Welfare Society, we see yoga not just as exercise, but as a bridge to a more balanced and conscious life for everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Yoga;
