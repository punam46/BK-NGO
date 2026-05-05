import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bloodCampImg from '../assets/g16.jpeg';
import seniorWelfareImg from '../assets/G42.jpeg';
import tribalHeroNew from '../assets/TRIBAL2.jpg';
// Using the new tribal hero asset for consistency
const tribalImg = tribalHeroNew;

const renderText = (text) => {
  if (typeof text !== 'string') return text;
  return text.split('BK').map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}
      {i < arr.length - 1 && <span style={{ color: 'red' }}>BK</span>}
    </React.Fragment>
  ));
};

const ProgramCard = ({ program, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      style={{
        display: 'flex',
        flexDirection: window.innerWidth < 992 ? 'column' : (isEven ? 'row' : 'row-reverse'),
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        border: '1px solid #eee',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        position: 'relative',
        margin: '2rem 0'
      }}
      className="program-horizontal-card program-card-hover"
    >

      {/* Image Container */}
      <div style={{
        flex: '0 0 50%',
        minHeight: window.innerWidth < 768 ? '300px' : '450px',
        position: 'relative',
        overflow: 'hidden',
        background: program.fit === 'contain' ? '#fcfcfc' : 'transparent'
      }}>
        <img
          src={program.image}
          alt={program.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: program.fit || 'cover',
            display: 'block',
            transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: program.fit === 'contain' ? '3rem' : '0'
          }}
        />
        {/* Image Overlay Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(${isEven ? 'to right' : 'to left'}, transparent, rgba(255,255,255,0.05))`,
          pointerEvents: 'none'
        }}></div>
      </div>

      {/* Content Container */}
      <div style={{
        flex: '1',
        padding: window.innerWidth < 768 ? '2.5rem' : '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: '#fff'
      }}>
        <div style={{
          display: 'inline-block',
          background: program.color || 'var(--pratham-yellow)',
          color: '#fff',
          padding: '0.6rem 1.4rem',
          marginBottom: '2rem',
          borderRadius: '8px',
          fontWeight: '900',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          boxShadow: `0 10px 20px ${program.color}33`
        }}>
          {program.icon} {program.title}
        </div>

        <h3 style={{
          fontSize: window.innerWidth < 768 ? '1.8rem' : '2.5rem',
          fontWeight: '900',
          color: '#1a1a1a',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          letterSpacing: '-1px'
        }}>
          {program.title}
        </h3>

        {program.description.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex} style={{
            color: '#555',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            textAlign: 'justify'
          }}>
            {renderText(paragraph)}
          </p>
        ))}

      </div>
    </div>
  );
};

const Programs = () => {
  const animations = `
    @keyframes typewriter {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes revealFromLeft {
      0% { transform: translateX(-100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeInUp {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .program-card-hover:hover {
      transform: translateY(-12px);
      box-shadow: 0 40px 80px rgba(0,0,0,0.15) !important;
    }
    .program-card-hover:hover img {
      transform: scale(1.1) rotate(1deg);
    }
    .shimmer-box {
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
      animation: shimmer 3s infinite;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
    }
  `;

  const programData = [
    {
      title: "Tribal Development",
      description: "We are deeply committed to the upliftment of tribal communities. By respecting and preserving their cultural heritage, we provide modern educational and economic opportunities to foster self-reliance and inclusive growth.\\n\\nOur initiatives include mobile health clinics, women's self-help groups, and forest-based livelihood programs that respect traditional practices while providing paths to sustainable development.",
      icon: "🏹",
      color: "#795548",
      image: tribalImg
    },



    {
      title: "Senior Citizen Welfare",
      description: "Dedicated to enhancing the quality of life for our seniors through comprehensive support systems, health check-ups, and social engagement activities. BK Education and Welfare Society provides a platform for senior citizens to live with dignity and respect, offering them medical assistance and a community where they can share their wisdom and experiences.\\n\\nWe organize regular wellness workshops and recreational outings, ensuring that our elders remain active and connected. By fostering intergenerational bonds, we create a society that values its heritage and cares for those who paved the path for our future.",
      icon: "👴👵",
      color: "#4caf50",
      image: seniorWelfareImg
    },
    {
      title: "Disability Affair",
      description: "Creating an inclusive society where physically challenged individuals have equal opportunities for growth and expression. BK Education and Welfare Society provides assistive devices, vocational training, and specialized educational support to help individuals with disabilities overcome barriers and lead independent lives.\n\nWe also work on community awareness to reduce stigma and promote accessibility in public spaces, ensuring that every individual, regardless of their physical abilities, can contribute meaningfully to the progress of our nation.",
      icon: "♿",
      color: "#607d8b",
      image: "/disability_affair.png"
    },



    {
      title: "Orphan Support",
      description: "Providing a loving home, quality education, and comprehensive care for orphaned and abandoned children. BK Education and Welfare Society works to ensure that every child, regardless of their family circumstances, has access to a safe environment and the resources needed to build a bright future.\n\nOur support includes residential facilities, nutritional care, psychological counseling, and formal schooling. We aim to nurture these children into confident, self-reliant individuals who can lead meaningful lives and contribute positively to society.",
      icon: "🏠👶",
      color: "#ff5722",
      image: "/orphan_support.png"
    },
    {
      title: "Rural Development",
      description: "Transforming rural landscapes through sustainable agriculture practices, infrastructure improvements, and digital literacy. BK Education and Welfare Society works closely with village panchayats to implement water harvesting systems, solar energy solutions, and modern farming techniques.\n\nBy bridging the digital divide, we provide rural youth with access to online education and government services, ensuring that the benefits of progress reach the heart of our rural communities and reduce the need for distress migration to urban centers.",
      icon: "🚜",
      color: "#ffc107",
      image: "/rural_community_hub.png"
    },
    {
      title: "Volunteer Programs",
      description: "BK Education and Welfare Society volunteer initiatives encourage active participation from community members and professionals who wish to contribute their skills and time towards meaningful social causes. We offer diverse opportunities ranging from teaching and mentoring to participating in field awareness drives.\n\nBy joining our network, volunteers gain hands-on experience in social work and play a direct role in the transformation of lives. We believe that collective action is the key to sustainable social change, and every volunteer brings a unique value to our mission.",
      icon: "❤️",
      color: "#d81b60",
      image: "/volunteer_programs.jpg"
    },
    {
      title: "Child Marriage Awareness",
      description: "BK Education and Welfare Society is dedicated to eradicating the harmful practice of child marriage through aggressive grassroots awareness, community workshops, and legal advocacy. We work tirelessly to educate families about the severe health, psychological, and social consequences of early marriage, ensuring that every child is protected.\n\nOur initiatives focus on keeping girls in school and empowering them with the knowledge of their legal rights. By partnering with local authorities and community influencers, we create a strong support system that prioritizes a child's education and well-being over outdated traditions, fostering a future where every child can grow to their full potential.",
      icon: "🚫💍",
      color: "#3d5afe",
      image: "/infant_marriage.jpg"
    },
    {
      title: "Safety & Empowerment",
      description: "Protecting our children and women through proactive awareness and education. Our 'Good Touch & Bad Touch' workshops are specifically designed to empower children with the confidence to identify, voice, and report inappropriate behavior, creating a safer school and home environment.\n\nIn parallel, our Women Safety programs provide essential self-defense training, legal awareness, and mental health support. We believe that knowledge is the strongest shield, and by educating the most vulnerable members of our society, we are building a community that is not only vigilant but also resilient and empowered.",
      icon: "🛡️👩",
      color: "#ff9800",
      image: "/women_safety.jpg"
    },
    {
      title: "Blood Donation Camps",
      description: "Coordinating life-saving blood donation drives in partnership with major hospitals and blood banks to ensure a steady supply for medical emergencies in our community. These camps also serve as awareness platforms to educate the public about the health benefits and critical need for regular blood donation.\n\nOur team ensures a safe and hygienic environment for all donors, and we maintain a database of voluntary donors who can be reached during urgent requirements, creating a vital lifeline for patients in need of immediate transfusions.",
      icon: "🩸",
      color: "#e53935",
      image: bloodCampImg
    },
    {
      title: "Donation to Ashram School",
      description: "Supporting residential 'Ashram Schools' by providing essential educational materials, infrastructure improvements, and daily necessities for students from tribal and rural backgrounds. We focus on enhancing the living and learning conditions of these students who stay away from home to pursue education.\n\nThrough our regular donation drives, we provide items such as stationary, uniforms, hygiene kits, and sports equipment, ensuring that these residential institutions can provide a holistic and supportive environment for every child's growth.",
      icon: "🏫",
      color: "#8e24aa",
      image: "/ashram_custom.jpg"
    }
  ];

  return (
    <div className="programs-page">
      <style>{animations}</style>
      {/* Simplified Hero Section with Torn Edge */}
      <section className="page-hero" style={{
        minHeight: '35vh',
        background: '#d34b07',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        padding: '2rem 0 4rem'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
            fontWeight: '900',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Our Programs
          </h1>
          <div style={{ 
            width: '60px', 
            height: '4px', 
            background: '#fff', 
            margin: '1.5rem auto 0',
            opacity: 0.6
          }}></div>
        </div>

        {/* Torn Edge Effect */}
        <div style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          width: '100%',
          height: '60px',
          zIndex: 10,
          filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.15))'
        }}>
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path 
              d="M0,0 L1200,0 L1200,80 L1180,75 L1160,85 L1140,70 L1120,90 L1100,75 L1080,85 L1060,70 L1040,80 L1020,75 L1000,85 L980,70 L960,90 L940,75 L920,85 L900,70 L880,80 L860,75 L840,85 L820,70 L800,90 L780,75 L760,85 L740,70 L720,80 L700,75 L680,85 L660,70 L640,90 L620,75 L600,85 L580,70 L560,80 L540,75 L520,85 L500,70 L480,90 L460,75 L440,85 L420,70 L400,80 L380,75 L360,85 L340,70 L320,90 L300,75 L280,85 L260,70 L240,80 L220,75 L200,85 L180,70 L160,90 L140,75 L120,85 L100,70 L80,80 L60,75 L40,85 L20,70 L0,90 Z" 
              fill="#f8f9fa" 
            />
          </svg>
        </div>
      </section>

      {/* Programs List - Horizontal Layout */}
      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {programData.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', background: 'var(--pratham-yellow)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Want to make a difference?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Whether through volunteering or support, your contribution helps us expand these programs to more people in need.
          </p>
          <button style={{
            background: 'var(--pratham-black)',
            color: '#fff',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Get Involved Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
