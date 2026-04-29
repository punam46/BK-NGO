import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bloodCampImg from '../assets/g16.jpeg';

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

  return (
    <div
      ref={cardRef}
      style={{
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        background: '#fff',
        borderRadius: '0',
        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid #eee',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        animation: isVisible ? `fadeInUp 0.8s ease-out both` : 'none'
      }}
      className="program-horizontal-card program-card-hover"
    >
      {/* Left side: Image */}
      <div style={{
        flex: '0 0 40%',
        minHeight: '350px',
        position: 'relative',
        overflow: 'hidden',
        background: program.fit === 'contain' ? '#f9f9f9' : 'transparent'
      }}>
        <img
          src={program.image}
          alt={program.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: program.fit || 'cover',
            display: 'block',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: program.fit === 'contain' ? '2rem' : '0'
          }}
        />
      </div>

      {/* Right side: Content */}
      <div style={{
        flex: '1',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <div style={{
          background: 'var(--pratham-yellow)',
          padding: '0.6rem 1.2rem',
          marginBottom: '1.5rem',
          borderRadius: '0',
          position: 'relative',
          overflow: 'hidden',
          animation: isVisible ? `revealFromLeft 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.4s both, float 4s ease-in-out infinite` : 'none'
        }}>
          <div className="shimmer-box"></div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#000',
            margin: 0,
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexWrap: 'wrap'
          }}>
            {program.title.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                  animation: isVisible ? `typewriter 0.3s ease-out ${0.6 + charIndex * 0.05}s both` : 'none'
                }}
              >
                {char}
              </span>
            ))}
          </h3>
        </div>

        {program.description.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex} style={{
            color: '#444',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            textAlign: 'justify',
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.8s ease-out ${0.8 + pIndex * 0.2}s`
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
      transform: translateY(-8px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
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
      description: "BK Education and Welfare Society is deeply committed to the upliftment of tribal communities by preserving their cultural heritage while providing modern educational and economic opportunities.\n\nKey Initiatives:\n• Mobile Health Clinics for remote hamlets\n• Tribal Women's Self-Help Groups (SHGs)\n• Forest-based livelihood support programs\n• Preservation of indigenous languages and arts\n• Vocational training in eco-friendly crafts",
      icon: "🏹",
      color: "#795548",
      image: "/tribal_development.png"
    },
    {
      title: "Disability Affair",
      description: "Creating an inclusive society where physically challenged individuals have equal opportunities for growth and expression. BK Education and Welfare Society provides assistive devices, vocational training, and specialized educational support to help individuals with disabilities overcome barriers and lead independent lives.\n\nWe also work on community awareness to reduce stigma and promote accessibility in public spaces, ensuring that every individual, regardless of their physical abilities, can contribute meaningfully to the progress of our nation.",
      icon: "♿",
      color: "#607d8b",
      image: "/disability_affair.png"
    },
    {
      title: "Child Development",
      description: "Focusing on the holistic growth of children from underprivileged backgrounds through nutritional support, early childhood education, and creative engagement. We believe that a child's early years are the most critical for their cognitive and emotional development.\n\nOur initiatives include health check-up camps, distribution of nutritional kits, and setting up child-friendly learning centers where children can explore their talents in a safe and nurturing environment.",
      icon: "👶",
      color: "#4caf50",
      image: "/child_development.png"
    },

    {
      title: "Rural Development",
      description: "Transforming rural landscapes through sustainable agriculture practices, infrastructure improvements, and digital literacy. BK Education and Welfare Society works closely with village panchayats to implement water harvesting systems, solar energy solutions, and modern farming techniques.\n\nBy bridging the digital divide, we provide rural youth with access to online education and government services, ensuring that the benefits of progress reach the heart of our rural communities and reduce the need for distress migration to urban centers.",
      icon: "🚜",
      color: "#ffc107",
      image: "/rural_development.png"
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
      {/* Mini Hero */}
      <section className="page-hero" style={{
        height: '45vh',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/programs_hero.png") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{renderText("BK Education and Welfare Society")}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Diverse initiatives designed to empower individuals and uplift society.
          </p>
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
