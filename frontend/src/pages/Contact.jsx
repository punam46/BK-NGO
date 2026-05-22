import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
    _subject: 'New Contact Form Submission'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started...', formData);
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response.status);
      if (response.ok) {
        alert('Thank you for contacting us! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '', _subject: 'New Contact Form Submission' });
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Could not send the message. Please check your internet connection.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && value !== '' && !/^\d+$/.test(value)) return;
    if (name === 'mobile' && value.length > 10) return;
    setFormData({ ...formData, [name]: value });
  };

  const animations = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes sideReveal {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes sideRevealRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .contact-section {
      padding: 8rem 0;
      background: #fff;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 6rem;
      align-items: start;
    }
    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .contact-section {
        padding: 4rem 0;
      }
    }
  `;

  return (
    <div className="contact-page" style={{ paddingTop: '130px' }}>
      <style>{animations}</style>
      {/* Mini Hero */}
      <section className="page-hero" style={{ 
        height: '45vh', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.8rem', fontWeight: '800' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            We're here to answer your questions and hear your ideas.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="container contact-grid" style={{ 
          maxWidth: '1600px', 
          margin: '0 auto', 
          padding: '0 4%'
        }}>
          
          {/* Contact Details */}
          <div style={{ animation: 'sideReveal 1s ease-out forwards', paddingLeft: '2rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1a1a1a' }}>Get in Touch</h2>
            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Have a question about our programs or want to know how you can contribute? Reach out to us through any of the following channels.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {[
                { icon: "📍", title: "Our Office", detail: ["2nd Floor, Gajanan Plaza, Gharpure Ghat Road,", "Ashok Stambh, Nashik, Maharashtra"] },
                { icon: "📧", title: "Email Us", detail: ["bhagwan@bktimes.co.in", "(Official professional email)"] },
                { icon: "📞", title: "Call Us", detail: ["+91 88883 01363", "(Mon - Sat, 10am - 6pm)"] }
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  gap: '1.2rem', 
                  alignItems: 'center',
                  animation: `fadeInUp 0.8s ease-out forwards ${0.3 + i * 0.2}s`,
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.contact-icon').style.animation = 'float 1.5s ease-in-out infinite';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.contact-icon').style.animation = 'none';
                }}
                >
                  <div className="contact-icon" style={{ 
                    fontSize: '1.5rem', 
                    background: '#fff9e6', 
                    width: '52px', 
                    height: '52px', 
                    borderRadius: '14px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.2rem', color: '#1a1a1a' }}>{item.title}</h4>
                    {item.detail.map((line, idx) => (
                      <p key={idx} style={{ color: '#666', lineHeight: '1.5', fontSize: '0.95rem' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '3rem', animation: 'fadeInUp 1s ease-out forwards 1s', opacity: 0 }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1a1a1a' }}>Follow Our Journey</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <Facebook size={20} />, name: 'Facebook', color: '#1877F2', url: 'https://www.facebook.com/bktimesngo/' },
                  { icon: <Twitter size={20} />, name: 'X', color: '#000000', url: 'https://x.com/bktimes_nashik' },
                  { icon: <Instagram size={20} />, name: 'Instagram', color: '#E4405F', url: 'https://www.instagram.com/bktimes_nashik/' },
                  { icon: <Linkedin size={20} />, name: 'LinkedIn', color: '#0A66C2', url: 'https://www.linkedin.com/company/bhagwan-kashinath-education-and-social-welfare-society/' },
                  { icon: <Youtube size={20} />, name: 'YouTube', color: '#FF0000', url: 'https://www.youtube.com/@bktimes-nashik' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      width: '48px',
                      height: '48px',
                      background: social.color + '15', 
                      borderRadius: '12px', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: social.color,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${social.color}22`,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                      e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}44`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = social.color + '15';
                      e.currentTarget.style.color = social.color;
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.03)';
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ 
            background: '#fff', 
            padding: '2.5rem', 
            borderRadius: '28px', 
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            border: '1px solid #f0f0f0',
            animation: 'sideRevealRight 1s ease-out forwards',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.8rem', color: '#1a1a1a' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input 
                type="hidden" 
                name="_subject" 
                value={`${formData.name} wants to connect with you about an BK educational and welfare society`} 
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontWeight: '700', color: '#333', fontSize: '0.95rem' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  style={{ 
                    padding: '0.9rem', 
                    border: '2px solid #eee', 
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pratham-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontWeight: '700', color: '#333', fontSize: '0.95rem' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com" 
                  style={{ 
                    padding: '0.9rem', 
                    border: '2px solid #eee', 
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pratham-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontWeight: '700', color: '#333', fontSize: '0.95rem' }}>Mobile Number</label>
                <input 
                  type="text" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit number" 
                  style={{ 
                    padding: '0.9rem', 
                    border: '2px solid #eee', 
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pratham-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontWeight: '700', color: '#333', fontSize: '0.95rem' }}>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?" 
                  style={{ 
                    padding: '0.9rem', 
                    border: '2px solid #eee', 
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pratham-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontWeight: '700', color: '#333', fontSize: '0.95rem' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..." 
                  style={{ 
                    padding: '0.9rem', 
                    border: '2px solid #eee', 
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    minHeight: '120px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pratham-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'}
                  required
                ></textarea>
              </div>
              <button type="submit" style={{ 
                background: 'var(--pratham-yellow)', 
                color: 'var(--pratham-black)', 
                padding: '1.1rem', 
                fontSize: '1.1rem', 
                border: 'none', 
                borderRadius: '14px',
                cursor: 'pointer',
                fontWeight: '800',
                marginTop: '0.8rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 15px rgba(255, 179, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 15px 30px rgba(255, 179, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 20px rgba(255, 179, 0, 0.2)';
              }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section style={{ 
        width: '100%', 
        height: '500px', 
        position: 'relative',
        overflow: 'hidden',
        background: '#f9f9f9',
        borderTop: '1px solid #eee'
      }}>
        <iframe 
          title="Office Location"
          src="https://maps.google.com/maps?q=Gajanan%20Plaza%2C%20Gharpure%20Ghat%20Road%2C%20Ashok%20Stambh%2C%20Nashik&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
          allowFullScreen="" 
          loading="lazy" 
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
