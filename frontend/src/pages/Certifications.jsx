import React, { useState, useEffect } from 'react';
import TornHeader from '../components/TornHeader';
import { FileText, Award, Shield, CheckCircle } from 'lucide-react';
import RegistrationStripe from '../components/RegistrationStripe';
import { useNavigate } from 'react-router-dom';
import c1Logo from '../assets/c1.png';
import c2Logo from '../assets/c2.jpg';
import c3Logo from '../assets/c3.jpeg';
import c4Logo from '../assets/c4.jpg';
import c5Logo from '../assets/c5.png';
import c6Logo from '../assets/c6.png';
import c8Logo from '../assets/c8.png';

const Certifications = () => {
  const navigate = useNavigate();
  const [dynamicCerts, setDynamicCerts] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/certifications');
        const data = await response.json();
        if (data && data.length > 0) setDynamicCerts(data);
      } catch (err) { console.error(err); }
    };
    fetchCerts();
  }, []);

  const staticCerts = [
    {
      title: "Societies Registration Act, 1860",
      subtitle: "Registration Certificate",
      image: c1Logo,
      description: "Official registration under the Societies Registration Act, 1860, establishing our legal identity as a social welfare organization.",
      color: "#e3f2fd"
    },
    {
      title: "Bombay Public Trusts Act, 1950",
      subtitle: "Registration Certificate",
      image: c2Logo,
      description: "Registered as a public charitable trust under the Bombay Public Trusts Act, 1950 (Reg. No. F-12121), ensuring transparency and accountability.",
      color: "#e8f5e9"
    },
    {
      title: "12A Registration",
      subtitle: "Income Tax Act",
      image: c3Logo,
      description: "Granted registration under section 12A of the Income Tax Act, certifying our status as a non-profit charitable institution.",
      color: "#f3e5f5"
    },
    {
      title: "80G Registration",
      subtitle: "Tax Benefit for Donors",
      image: c3Logo,
      description: "Donations to BK Education and Welfare Society are tax-exempt under section 80G, providing benefits to our generous supporters.",
      color: "#fff3e0"
    },
    {
      title: "PTRC Registration",
      subtitle: "Profession Tax Registration",
      image: c5Logo,
      description: "Professional Tax Registration Certificate (Reg. No. 27332222570P) ensuring compliance with state labor and professional tax regulations.",
      color: "#e0f2f1"
    },
    {
      title: "PTEC Registration",
      subtitle: "Profession Tax Enrollment",
      image: c5Logo,
      description: "Professional Tax Enrollment Certificate (Reg. No. 99594678152P) for organizational compliance and professional standards.",
      color: "#e0f7fa"
    },
    {
      title: "Niti Aayog (NGO Darpan)",
      subtitle: "Government of India",
      image: c4Logo,
      description: "Successfully registered on the NGO Darpan portal of Niti Aayog, Government of India, for collaborative developmental work.",
      color: "#e8eaf6"
    },
    {
      title: "CSR-1 Registration",
      subtitle: "Ministry of Corporate Affairs",
      image: c8Logo,
      description: "Registered with the Ministry of Corporate Affairs for undertaking Corporate Social Responsibility (CSR) activities.",
      color: "#e1f5fe"
    },
    {
      title: "NIC Registration",
      subtitle: "National Industrial Classification",
      image: c6Logo,
      description: "Registered under relevant NIC codes for Social Welfare, Educational Support, and Community Service activities.",
      color: "#fff8e1"
    }
  ];

  const certs = [...dynamicCerts, ...staticCerts];

  return (
    <div className="certifications-page">
      <style>{`
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
        }
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes success-pulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }
        @keyframes reveal-text {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <section style={{
        background: '#d34b07',
        padding: '8rem 5% 3rem',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            Our Certifications
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            opacity: 0.9,
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Legal Compliance & Official Registrations
          </p>
        </div>

      </section>
      <RegistrationStripe background="#1a1a1a" color="#ffd54f" showBadge={true} />



      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Transparency & Trust</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              BK Education and Welfare Society maintains full legal compliance with all government regulations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {certs.map((cert, index) => (
              <div
                key={index}
                className="hover-lift"
                style={{
                  background: '#fff',
                  padding: '2.5rem',
                  borderRadius: '24px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  border: '1px solid #eee',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                {(cert.src || cert.image) && (
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: '#fcfcfc',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid #f0f0f0',
                    padding: '1.5rem'
                  }}>
                    <img src={cert.src || cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                )}
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#d34b07', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.75rem' }}>
                    {cert.subtitle}
                  </h4>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem' }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.5rem' }}>
                    {cert.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification CTA */}
      <section style={{ padding: '6rem 0', background: '#fff', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', animation: 'reveal-text 0.8s ease-out' }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: '#e8f5e9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              animation: 'success-pulse 2s infinite',
              border: '2px solid #4caf50'
            }}>
              <Shield size={50} style={{ color: '#4caf50', animation: 'badge-bounce 3s infinite ease-in-out' }} />
            </div>
            
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: '#1a1a1a' }}>Verified NGO Status</h2>
            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              We believe in complete transparency. We are successfully registered with 
              <span style={{
                display: 'inline-block',
                background: '#4caf50',
                color: '#fff',
                padding: '0.2rem 1rem',
                borderRadius: '50px',
                marginLeft: '0.5rem',
                fontWeight: '800',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
              }}>
                Reg No F-12121
              </span>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <button 
                onClick={() => navigate('/contact')}
                style={{
                  padding: '1.2rem 3rem',
                  background: '#1a1a1a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Contact for Inquiries
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
