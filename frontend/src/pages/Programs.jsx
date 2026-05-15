import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bloodCampImg from '../assets/g16.jpeg';
import seniorWelfareImg from '../assets/G42.jpeg';
import tribalHeroNew from '../assets/TRIBAL2.jpg';
import yogaHeroImg from '../assets/yoga_hero.png';
// Using the new tribal hero asset for consistency
const tribalImg = tribalHeroNew;



const Programs = () => {
  const [dynamicPrograms, setDynamicPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDynamicPrograms = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/programs');
        if (response.ok) {
          const data = await response.json();
          setDynamicPrograms(data);
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDynamicPrograms();
  }, []);

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
      title: "Yoga & Wellness",
      description: "Promoting physical health and mental serenity through structured yoga and meditation programs for all age groups in rural areas.\n\nOur initiatives focus on teaching traditional asanas, breathing techniques (pranayama), and mindfulness practices to help individuals manage stress, improve flexibility, and foster a holistic approach to well-being. We believe that a healthy body and a calm mind are the foundations for a prosperous community.",
      icon: "🧘‍♂️",
      color: "#009688",
      image: yogaHeroImg,
      link: "/programs/yoga"
    },
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
    },
    {
      title: "Media & Publications",
      description: "Keep up with the latest news, press releases, and impact stories from BK Education and Welfare Society. Our publications offer a transparent look into our ongoing projects, success stories, and the transformative work we are doing across various sectors.\n\nFrom seminar coverage to field reports on rural development, our media archive serves as a record of our journey and a testament to the community's support. Explore our detailed articles to see how your contributions are making a real-world difference.",
      icon: "📰",
      color: "#607d8b",
      image: "/r1.jpeg",
      link: "/programs/media"
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

      {/* Programs List - 3 Column Grid Layout */}
      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {[...dynamicPrograms, ...programData].map((program, index) => (
              <motion.div
                key={program._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (index % 3) * 0.15, duration: 0.6 }}
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid #eee',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}
                className="program-card-hover"
              >
                {/* Image Section */}
                <div style={{
                  height: '280px',
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
                      transition: 'transform 0.6s ease',
                      padding: program.fit === 'contain' ? '2rem' : '0'
                    }}
                  />
                  {/* Category Badge Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '1.5rem',
                    background: program.color || '#e53935',
                    color: '#fff',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {program.icon && <span style={{ fontSize: '1rem' }}>{program.icon}</span>}
                    {program.title}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: '900',
                    color: '#1a1a1a',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
                  }}>
                    {program.title}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    fontSize: '1.05rem',
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1
                  }}>
                    {program.description}
                  </p>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', background: '#FFC107', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '900' }}>Want to make a difference?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: '600', color: '#333' }}>
            Whether through volunteering or support, your contribution helps us expand these programs to more people in need.
          </p>
          <button style={{
            background: '#1a1a1a',
            color: '#fff',
            padding: '1.2rem 3.5rem',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '800',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.background = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = '#1a1a1a';
          }}
          >
            Get Involved Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
