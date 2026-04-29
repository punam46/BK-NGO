import React, { useState } from 'react';
import { Camera, Filter, Heart, Calendar, MapPin, ChevronRight, Share2 } from 'lucide-react';
import g16 from '../assets/g16.jpeg';
import g31 from '../assets/g31.jpeg';
import g17 from '../assets/g17.jpeg';
import g18 from '../assets/g18.jpeg';
import g19 from '../assets/g19.jpeg';
import g20 from '../assets/g20.jpeg';
import g21 from '../assets/g21.jpeg';
import g22 from '../assets/g22.jpeg';
import g23 from '../assets/g23.jpeg';
import g24 from '../assets/g24.jpeg';
import g25 from '../assets/g25.jpeg';
import g26 from '../assets/g26.jpeg';
import g27 from '../assets/g27.jpeg';
import g28 from '../assets/g28.jpeg';
import g29 from '../assets/g29.jpeg';
import g30 from '../assets/g30.jpeg';




const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'BLOOD DONATION', 'ENVIRONMENT', 'SOCIAL WELFARE', 'WOMEN EMPOWERMENT', 'EVENTS'];

  const photos = [
    {
      id: 1,
      src: g16,
      category: 'BLOOD DONATION',
      title: 'Blood Donation Program - Drive 1',
      date: 'March 2024',
      location: 'Main Center'
    },
    {
      id: 2,
      src: g31,
      category: 'BLOOD DONATION',
      title: 'Community Blood Donation Outreach',
      date: 'April 2024',
      location: 'Community Hall'
    },
    {
      id: 3,
      src: g17,
      category: 'ENVIRONMENT',
      title: 'Mountain Cleaning Program - Ramshej Fort',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 4,
      src: g18,
      category: 'ENVIRONMENT',
      title: 'Fort Restoration & Cleaning Drive',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 5,
      src: g19,
      category: 'ENVIRONMENT',
      title: 'Eco-Awareness Campaign at Ramshej',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 6,
      src: g20,
      category: 'ENVIRONMENT',
      title: 'Volunteer Cleaning Initiative',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 7,
      src: g21,
      category: 'ENVIRONMENT',
      title: 'Preserving Our Heritage - Ramshej Fort',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 8,
      src: g22,
      category: 'ENVIRONMENT',
      title: 'Post-Drive Success at Ramshej',
      date: 'May 2024',
      location: 'Ramshej Fort'
    },
    {
      id: 9,
      src: g23,
      category: 'EVENTS',
      title: 'Babasaheb Ambedkar Jayanti Celebration',
      date: 'April 14, 2024',
      location: 'Society Headquarters'
    },
    {
      id: 10,
      src: g24,
      category: 'EVENTS',
      title: 'Commemorating Dr. B.R. Ambedkar',
      date: 'April 14, 2024',
      location: 'Main Hall'
    },
    {
      id: 11,
      src: g25,
      category: 'SOCIAL WELFARE',
      title: 'Water Distribution to Communities',
      date: 'June 2024',
      location: 'Rural District'
    },
    {
      id: 12,
      src: g26,
      category: 'SOCIAL WELFARE',
      title: 'Supporting Families with Clean Water',
      date: 'June 2024',
      location: 'Village Outskirts'
    },
    {
      id: 13,
      src: g27,
      category: 'SOCIAL WELFARE',
      title: 'Safe Drinking Water Initiative',
      date: 'June 2024',
      location: 'Community Center'
    },
    {
      id: 14,
      src: g28,
      category: 'SOCIAL WELFARE',
      title: 'Relief Outreach - Water Supply',
      date: 'June 2024',
      location: 'Impact Zone'
    },
    {
      id: 15,
      src: g29,
      category: 'WOMEN EMPOWERMENT',
      title: 'Women Safety & Awareness Workshop',
      date: 'July 2024',
      location: 'Central Training Hub'
    },
    {
      id: 16,
      src: g30,
      category: 'WOMEN EMPOWERMENT',
      title: 'Empowering Women through Self-Defense',
      date: 'July 2024',
      location: 'Community Hall'
    }



  ];


  const filteredPhotos = activeCategory === 'ALL'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Premium Hero Section */}
      <section style={{
        position: 'relative',
        padding: '8rem 5% 6rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        overflow: 'hidden'
      }}>


        {/* Floating Bubbles Effect */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px) translateX(0px); opacity: 0; }
              10% { opacity: 0.3; }
              50% { transform: translateY(-100px) translateX(20px); opacity: 0.5; }
              90% { opacity: 0.3; }
              100% { transform: translateY(-200px) translateX(-10px); opacity: 0; }
            }
            .bubble {
              position: absolute;
              background: rgba(229, 57, 53, 0.15);
              border-radius: 50%;
              pointer-events: none;
              animation: float 8s infinite ease-in-out;
            }
          `}
        </style>
        <div className="bubble" style={{ width: '60px', height: '60px', left: '5%', bottom: '5%', animationDelay: '0s' }}></div>
        <div className="bubble" style={{ width: '40px', height: '40px', left: '15%', bottom: '15%', animationDelay: '2s', background: 'rgba(229, 57, 53, 0.1)' }}></div>
        <div className="bubble" style={{ width: '80px', height: '80px', left: '65%', bottom: '10%', animationDelay: '4s', background: 'rgba(33, 150, 243, 0.08)' }}></div>
        <div className="bubble" style={{ width: '50px', height: '50px', left: '80%', bottom: '2%', animationDelay: '1s', background: 'rgba(255, 193, 7, 0.08)' }}></div>
        <div className="bubble" style={{ width: '30px', height: '30px', left: '35%', bottom: '25%', animationDelay: '5s', background: 'rgba(255, 255, 255, 0.5)' }}></div>
        <div className="bubble" style={{ width: '70px', height: '70px', left: '55%', bottom: '20%', animationDelay: '3s', background: 'rgba(229, 57, 53, 0.12)' }}></div>
        <div className="bubble" style={{ width: '45px', height: '45px', left: '12%', bottom: '35%', animationDelay: '6s', background: 'rgba(33, 150, 243, 0.1)' }}></div>
        <div className="bubble" style={{ width: '55px', height: '55px', left: '72%', bottom: '45%', animationDelay: '2.5s', background: 'rgba(255, 255, 255, 0.4)' }}></div>
        {/* Additional Bubbles */}
        <div className="bubble" style={{ width: '25px', height: '25px', left: '25%', bottom: '40%', animationDuration: '6s', animationDelay: '1.5s', background: 'rgba(229, 57, 53, 0.08)' }}></div>
        <div className="bubble" style={{ width: '90px', height: '90px', left: '45%', bottom: '15%', animationDuration: '10s', animationDelay: '0.5s', background: 'rgba(33, 150, 243, 0.05)' }}></div>
        <div className="bubble" style={{ width: '35px', height: '35px', left: '90%', bottom: '30%', animationDuration: '7s', animationDelay: '4.5s', background: 'rgba(255, 193, 7, 0.06)' }}></div>
        <div className="bubble" style={{ width: '65px', height: '65px', left: '30%', bottom: '60%', animationDuration: '12s', animationDelay: '2s', background: 'rgba(255, 255, 255, 0.3)' }}></div>
        <div className="bubble" style={{ width: '40px', height: '40px', left: '50%', bottom: '50%', animationDuration: '9s', animationDelay: '3.5s', background: 'rgba(229, 57, 53, 0.07)' }}></div>
        <div className="bubble" style={{ width: '20px', height: '20px', left: '80%', bottom: '70%', animationDuration: '5s', animationDelay: '5s', background: 'rgba(33, 150, 243, 0.12)' }}></div>
        <div className="bubble" style={{ width: '100px', height: '100px', left: '10%', bottom: '80%', animationDuration: '15s', animationDelay: '1s', background: 'rgba(255, 255, 255, 0.2)' }}></div>
        <div className="bubble" style={{ width: '50px', height: '50px', left: '60%', bottom: '90%', animationDuration: '11s', animationDelay: '0s', background: 'rgba(255, 193, 7, 0.05)' }}></div>



        {/* Abstract Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(229, 57, 53, 0.03)',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(229, 57, 53, 0.03)',
          zIndex: 0
        }}></div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(229, 57, 53, 0.1)',
            color: '#e53935',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '800',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <Camera size={16} /> Visual Chronicles
          </div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            letterSpacing: '-3px',
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Capturing Moments <br />
            <span style={{ color: '#e53935' }}>of Impact</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#555',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            A visual journey through our initiatives, from blood donation drives to educational programs.
            Every frame tells a story of transformation and community spirit.
          </p>
        </div>
      </section>

      {/* Elegant Filter Navigation */}
      <section style={{
        padding: '2rem 5%',
        position: 'sticky',
        top: '80px',
        zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '12px 28px',
                borderRadius: '12px',
                border: activeCategory === cat ? 'none' : '1px solid #eee',
                background: activeCategory === cat ? '#e53935' : '#fff',
                color: activeCategory === cat ? '#fff' : '#666',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeCategory === cat ? '0 10px 25px rgba(229, 57, 53, 0.25)' : 'none',
                transform: activeCategory === cat ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic Photo Grid */}
      <section style={{ padding: '5rem 5% 8rem' }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              style={{
                group: 'photo-card',
                position: 'relative',
                background: '#fff',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                border: '1px solid #f5f5f5'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image Container */}
              <div style={{
                height: '480px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Category Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(5px)',
                  color: '#e53935',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: '900',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {photo.category}
                </div>

                {/* Quick Action Button */}
                <button style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  width: '45px',
                  height: '45px',
                  borderRadius: '15px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(5px)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <Share2 size={18} />
                </button>
              </div>

              {/* Content Box */}
              <div style={{ padding: '2.5rem' }}>
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  fontSize: '0.85rem',
                  color: '#888',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {photo.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={14} /> {photo.location}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  lineHeight: '1.3',
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.5px'
                }}>
                  {photo.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#e53935',
                    fontWeight: '800',
                    fontSize: '0.9rem'
                  }}>
                    VIEW DETAILS <ChevronRight size={18} />
                  </div>
                  <div style={{ color: '#ccc' }}>
                    <Heart size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Join the Mission */}
      <section style={{
        margin: '0 5% 5rem',
        padding: '6rem 2rem',
        background: '#111',
        borderRadius: '48px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(229, 57, 53, 0.1) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0
        }}></div>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Be Part of Our Next Story
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '3rem', lineHeight: '1.6' }}>
            Our gallery is a testament to what we can achieve together. Join our volunteer network or support our initiatives to help us create more impactful moments.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '18px 45px',
              background: '#e53935',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 30px rgba(229, 57, 53, 0.3)'
            }}>
              BECOME A VOLUNTEER
            </button>
            <button style={{
              padding: '18px 45px',
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              DONATE NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
