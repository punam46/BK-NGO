import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, HandHeart } from 'lucide-react';
import { useMotionValue, useTransform, useSpring } from 'framer-motion';
import vTeachingImg from '../assets/volunteer_teaching.png';
import vDistributionImg from '../assets/volunteer_distribution.png';
import vPlanningImg from '../assets/volunteer_planning.png';
import vPortraitImg from '../assets/volunteer_portrait.png';
import actImg1 from '../assets/g5.jpg';
import actImg2 from '../assets/g16.jpeg';
import actImg3 from '../assets/g18.jpeg';
import actImg4 from '../assets/g21.jpeg';
import actImg5 from '../assets/g25.jpeg';
import actImg6 from '../assets/g24.jpeg';
import actImg7 from '../assets/g29.jpeg';
import actImg8 from '../assets/g30.jpeg';
import actImg9 from '../assets/g33.jpeg';
import g42 from '../assets/G42.jpeg';
import g43 from '../assets/G43.jpeg';
import g45 from '../assets/G45.jpeg';
import g46 from '../assets/G46.jpeg';
import g48 from '../assets/G48.jpeg';
import g49 from '../assets/G49.jpeg';
import g50 from '../assets/G50.jpeg';
import g51 from '../assets/G51.jpeg';
import g52 from '../assets/G52.jpeg';
import g54 from '../assets/G54.jpeg';
import g55 from '../assets/G55.jpeg';
import g56 from '../assets/G56.jpeg';
import ghugeImg from '../assets/ghuge sir.jpeg';
import nikaljeImg from '../assets/D1.jpeg';

const InteractiveCard = ({ children, style, onClick, hoverColor = '#111' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        scale: 1.05,
        y: -15,
        boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="interactive-card"
      onClick={onClick}
    >
      <div style={{ transform: "translateZ(50px)", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </div>
    </motion.div>
  );
};

const GetInvolved = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(0);
  const formRef = React.useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    {
      name: "Dnyaneshwar Nikalje",
      img: nikaljeImg,
      text: "Leading the BK Education and Welfare Society Financial Literacy Program was a transformative experience. Through this initiative, my team and I worked towards fostering financial awareness among children—the future of India."
    },
    {
      name: "Nandkishor Ghuge",
      img: ghugeImg,
      text: "Volunteering with BK has significantly changed me. I've become more open and interactive, which has contributed to my personal growth. Seeing the direct impact has reinforced my belief in taking small, consistent steps."
    },
    {
      name: "Rahul Verma",
      img: vPortraitImg,
      text: "Working with the rural outreach team opened my eyes to the incredible potential in our villages. BK provides the perfect platform to channel your energy into real, measurable change. I've learned more about empathy here."
    },
    {
      name: "Sneha Patil",
      img: vPortraitImg,
      text: "Being part of the women empowerment workshops has been the most rewarding part of my career. Witnessing the transition from hesitation to confidence in these women is priceless. BK doesn't just help; it empowers."
    },
    {
      name: "Karan Mehta",
      img: vPortraitImg,
      text: "The energy at BK is infectious. Whether it's a blood donation camp or a child safety workshop, everyone is driven by a shared vision. I've made lifelong friends and found a community that truly cares."
    }
  ];

  const totalPages = Math.ceil(reviews.length / 2);
  const currentReviews = reviews.slice(currentPage * 2, (currentPage * 2) + 2);

  const animations = `
    @keyframes floatingReview {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
  `;

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    field: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) return;
    if (name === 'phone' && value.length > 10) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({ name: '', email: '', phone: '', field: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not send application. Please ensure the backend server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="involved-page">
      <style>{animations}</style>
      {/* Mini Hero */}
      <section className="volunteer-hero" style={{
        padding: '8rem 0 4rem',
        background: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4.5vw, 4rem)', 
            fontWeight: '800', 
            color: '#333', 
            marginBottom: '1rem',
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}>
            Volunteers are our{' '}
            <span style={{ position: 'relative', display: 'inline-block', fontFamily: 'var(--font-script)', color: '#ffcc00', fontSize: '1.2em' }}>
              everyday heroes
              {/* Decorative yellow rays */}
              <div style={{
                position: 'absolute',
                right: '-45px',
                top: '10px',
                width: '40px',
                height: '40px'
              }}>
                <div style={{ position: 'absolute', width: '12px', height: '4px', background: '#ffcc00', borderRadius: '10px', right: '0', top: '0', transform: 'rotate(-30deg)' }}></div>
                <div style={{ position: 'absolute', width: '15px', height: '4px', background: '#ffcc00', borderRadius: '10px', right: '-5px', top: '15px' }}></div>
                <div style={{ position: 'absolute', width: '12px', height: '4px', background: '#ffcc00', borderRadius: '10px', right: '0', bottom: '5px', transform: 'rotate(30deg)' }}></div>
              </div>
            </span>
          </h1>
          
          <div style={{ 
            width: '100%', 
            height: '2px', 
            background: '#eeeeee', 
            margin: '4rem auto', 
            maxWidth: '800px',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', width: '150px', height: '4px', background: '#ffcc00', top: '-1px', left: '50%', transform: 'translateX(-50%)' }}></div>
          </div>
          
          <p style={{ 
            fontSize: '1.4rem', 
            color: '#555', 
            lineHeight: '1.6', 
            marginBottom: '0',
            maxWidth: '900px',
            margin: '0 auto 0',
            fontWeight: '400'
          }}>
            10,555 volunteers. 1,264 interns. 20,74,526 volunteering hours generated.<br />
            13 states. 75,000 children reached through volunteers.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginTop: '3rem' }}
          >
            <motion.button 
              whileHover={{ y: -4, boxShadow: '0 12px 0 #b91c1c, 0 20px 40px rgba(229,57,53,0.4)' }}
              whileTap={{ y: 8, boxShadow: '0 0px 0 #b91c1c, 0 5px 10px rgba(229,57,53,0.2)' }}
              onClick={scrollToForm}
              style={{ 
                background: 'linear-gradient(to bottom, #ef4444, #e53935)', 
                color: '#fff', 
                padding: '1.2rem 2.8rem', 
                borderRadius: '20px', 
                border: 'none', 
                fontWeight: 900, 
                cursor: 'pointer',
                boxShadow: '0 8px 0 #b91c1c, 0 15px 30px rgba(229,57,53,0.3)',
                transition: 'all 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                fontSize: '1.1rem',
                letterSpacing: '0.5px'
              }}
            >
              Start Your Journey
            </motion.button>
            
            <motion.button 
              whileHover={{ y: -4, boxShadow: '0 10px 0 #e5e5e5, 0 15px 30px rgba(0,0,0,0.05)' }}
              whileTap={{ y: 6, boxShadow: '0 0px 0 #e5e5e5' }}
              onClick={() => navigate('/contact')}
              style={{ 
                background: '#fff', 
                border: '2px solid #f0f0f0', 
                color: '#1a1a1a', 
                padding: '1.1rem 2.2rem',
                borderRadius: '20px',
                fontWeight: 900, 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                boxShadow: '0 6px 0 #e5e5e5, 0 10px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.15s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                fontSize: '1rem'
              }}
            >
              Learn More <ArrowRight size={20} color="#e53935" />
            </motion.button>
          </motion.div>
          
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section style={{ 
        padding: '6rem 0', 
        background: 'linear-gradient(rgba(255, 252, 240, 0.95), rgba(255, 252, 240, 0.95)), url("/gold_watercolor_wash.png") center/cover no-repeat', 
        borderTop: '1px solid #f0f0f0' 
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2.0rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '2rem' }}>
            Why Volunteer With <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.7', marginBottom: '4rem' }}>
            Volunteering is such a simple, yet rewarding, way to support a cause you care about. While there are a million reasons why you should volunteer with us, here are our top 3 ones!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              "Your work, whether on the field or behind the scenes, will help us make India a better place for our children.",
              "Your volunteering experience will help you develop invaluable professional skills and build your leadership capabilities.",
              "No matter who you are or what you do, we have a wide range of volunteering options for you."
            ].map((text, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>⭐</div>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.6', margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '8rem 0', background: '#fff', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2' }}>
              what <span style={{ color: '#ffcc00', fontFamily: 'var(--font-script)', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '400' }}>our volunteers</span> have to say
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: currentReviews.length === 1 ? '1fr' : 'repeat(2, 1fr)', 
            gap: '5rem',
            minHeight: '300px',
            transition: 'opacity 0.5s ease'
          }}>
            {currentReviews.map((review, idx) => (
              <div 
                key={review.name}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: '2.5rem', 
                  alignItems: 'center',
                  animation: `floatingReview ${3 + idx}s ease-in-out infinite`
                }}
              >
                <img 
                  src={review.img} 
                  alt={review.name} 
                  style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} 
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', margin: 0 }}>
                    "{review.text.replace('BK', '')}<span style={{ color: '#e53935', fontWeight: '700' }}>BK</span>{review.text.split('BK')[1] || ''}"
                  </p>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '1.5rem', color: '#1a1a1a' }}>{review.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '5rem' }}>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                style={{
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: currentPage === i ? '#ffcc00' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Action Gallery Section */}
      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '900', 
              color: '#1a1a1a',
              textShadow: '2px 2px 0px #ddd, 4px 4px 0px #eee',
              letterSpacing: '-1px'
            }}>
              Our <span style={{ color: '#ffcc00' }}>Volunteers</span> in Action
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
              Catch a glimpse of the incredible work our volunteers do on the ground every day.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              actImg1, actImg2, actImg3, actImg4, 
              actImg5, actImg6, actImg7, actImg8,
              actImg9, g42, g43, g45, g46,
              g48, g49, g50, g51, g52,
              g54, g55, g56
            ].map((imgSrc, idx) => (
              <div key={idx} style={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                height: '250px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={imgSrc} alt={`Volunteer Action ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section style={{ padding: '8rem 0', background: '#fff', perspective: '1000px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 450px))', 
            gap: '4rem',
            maxWidth: '1200px',
            margin: '0 auto',
            justifyContent: 'center'
          }}>
            {/* Volunteer Card */}
            <InteractiveCard 
              hoverColor="#ffcc00"
              style={{ 
                background: '#ffffff',
                padding: '4rem 3rem',
                borderRadius: '32px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 15px 45px rgba(0,0,0,0.05)',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={scrollToForm}
            >
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '2rem',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
              }}>🙋‍♂️</div>
              
              <h2 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '900', 
                marginBottom: '1.5rem',
                color: '#1a1a1a',
                letterSpacing: '-1px'
              }}>Volunteer Your Time</h2>
              
              <p style={{ 
                color: '#666', 
                lineHeight: '1.8', 
                marginBottom: '3rem',
                fontSize: '1.05rem'
              }}>
                Share your skills and passion with us. Whether you can teach, help with administration, or organize events, your time makes a massive difference.
              </p>
              
              <button style={{
                background: '#111',
                color: '#fff',
                padding: '1.2rem 3rem',
                border: 'none',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}>Apply Now</button>
            </InteractiveCard>

            {/* Support Card */}
            <InteractiveCard 
              hoverColor="#e53935"
              style={{ 
                background: '#ffffff',
                padding: '4rem 3rem',
                borderRadius: '32px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 15px 45px rgba(0,0,0,0.05)',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => navigate('/donate')}
            >
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '2rem',
                filter: 'drop-shadow(0 10px 20px rgba(229,57,53,0.15))'
              }}>💰</div>
              
              <h2 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '900', 
                marginBottom: '1.5rem',
                color: '#1a1a1a',
                letterSpacing: '-1px'
              }}>Support Financially</h2>
              
              <p style={{ 
                color: '#666', 
                lineHeight: '1.8', 
                marginBottom: '3rem',
                fontSize: '1.05rem'
              }}>
                Every contribution goes directly toward our educational and welfare programs. Help us reach more communities and transform lives through your generosity.
              </p>
              
              <button style={{
                background: '#e53935',
                color: '#fff',
                padding: '1.2rem 3rem',
                border: 'none',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(229,57,53,0.2)'
              }}>Donate Now</button>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section ref={formRef} style={{ padding: '8rem 0', background: '#fcfcfc' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            background: '#fff3e0', 
            color: '#e65100', 
            padding: '1rem', 
            borderRadius: '12px', 
            marginBottom: '2rem', 
            fontSize: '1.2rem', 
            fontWeight: '700',
            border: '1px solid #ffe0b2',
            textAlign: 'center'
          }}>
            ✨ You will be officially certified with <span style={{ color: '#e53935' }}>BK</span> Educational and Welfare Society and receive a certificate for your contribution!
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: '#fff', 
              padding: '4rem', 
              borderRadius: '24px', 
              boxShadow: '15px 15px 0px #111',
              border: '2px solid #111'
            }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', textAlign: 'center' }}>Volunteer Application</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Join our mission to create lasting social change. Fill out the form below and we'll get back to you.</p>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#333' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} 
                    required 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#333' }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} 
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                   <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#333' }}>Phone Number</label>
                   <input 
                     type="tel" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     placeholder="10-digit number" 
                     style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} 
                     required 
                   />
                 </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#333' }}>Which field do you want to apply for?</label>
                  <select 
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem', background: '#fff' }} 
                    required
                  >
                    <option value="">Select a field</option>
                    <option value="education">Education (Teaching)</option>
                    <option value="social_welfare">Social Welfare</option>
                    <option value="tribal">Tribal Development</option>
                    <option value="health">Health & Nutrition</option>
                    <option value="women_empowerment">Women Empowerment</option>
                    <option value="orphan_support">Orphan Support</option>
                    <option value="administration">Event & Admin Support</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem' }}>
                <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#333' }}>Tell us about your experience or passion</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can you contribute to our mission?" 
                  rows="4" 
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem', resize: 'vertical' }} 
                  required
                ></textarea>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{ 
                    background: loading ? '#666' : 'var(--pratham-black)', 
                    color: '#fff', 
                    padding: '1.2rem 4rem', 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    borderRadius: '12px', 
                    border: 'none', 
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Sending...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default GetInvolved;
