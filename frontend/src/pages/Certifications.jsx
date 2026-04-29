import React from 'react';
import TornHeader from '../components/TornHeader';
import { FileText, Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Societies Registration Act, 1860",
      subtitle: "Registration Certificate",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      description: "Official registration under the Societies Registration Act, 1860, establishing our legal identity as a social welfare organization.",
      color: "#e3f2fd"
    },
    {
      title: "Bombay Public Trusts Act, 1950",
      subtitle: "Registration Certificate",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      description: "Registered as a public charitable trust under the Bombay Public Trusts Act, 1950, ensuring transparency and accountability.",
      color: "#e8f5e9"
    },
    {
      title: "12A Registration",
      subtitle: "Income Tax Act",
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      description: "Granted registration under section 12A of the Income Tax Act, certifying our status as a non-profit charitable institution.",
      color: "#f3e5f5"
    },
    {
      title: "80G Registration",
      subtitle: "Tax Benefit for Donors",
      icon: <Award className="w-8 h-8 text-orange-600" />,
      description: "Donations to BK Education and Welfare Society are tax-exempt under section 80G, providing benefits to our generous supporters.",
      color: "#fff3e0"
    },
    {
      title: "PTRC Registration",
      subtitle: "Profession Tax Registration",
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      description: "Professional Tax Registration Certificate (PTRC) ensuring compliance with state labor and professional tax regulations.",
      color: "#e0f2f1"
    },
    {
      title: "PTEC Registration",
      subtitle: "Profession Tax Enrollment",
      icon: <FileText className="w-8 h-8 text-cyan-600" />,
      description: "Professional Tax Enrollment Certificate (PTEC) for organizational compliance and professional standards.",
      color: "#e0f7fa"
    },
    {
      title: "Niti Aayog (NGO Darpan)",
      subtitle: "Government of India",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      description: "Successfully registered on the NGO Darpan portal of Niti Aayog, Government of India, for collaborative developmental work.",
      color: "#e8eaf6"
    },
    {
      title: "NIC Registration",
      subtitle: "National Industrial Classification",
      icon: <Award className="w-8 h-8 text-amber-600" />,
      description: "Registered under relevant NIC codes for Social Welfare, Educational Support, and Community Service activities.",
      color: "#fff8e1"
    }
  ];

  return (
    <div className="certifications-page">
      <TornHeader 
        title="Our Certifications" 
        subtitle="Legal Compliance & Official Registrations"
      />
      
      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1.5rem' }}>Transparency & Trust</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              BK Education and Welfare Society maintains full legal compliance with all government regulations. Our certifications represent our commitment to transparency, accountability, and professional social work.
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
                style={{
                  background: '#fff',
                  padding: '2.5rem',
                  borderRadius: '24px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  border: '1px solid #eee',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: cert.color, 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {cert.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                    {cert.subtitle}
                  </h4>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Detailed NIC Table Section */}
      <section style={{ padding: '4rem 0 8rem', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>NIC Activity Classification</h3>
            <p style={{ color: '#666' }}>Detailed classification of our registered activities under the National Industrial Classification (NIC) system.</p>
          </div>
          
          <div style={{ 
            overflowX: 'auto', 
            borderRadius: '16px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '1.2rem', fontWeight: '700', color: '#444' }}>SNo.</th>
                  <th style={{ padding: '1.2rem', fontWeight: '700', color: '#444' }}>NIC 2 Digit</th>
                  <th style={{ padding: '1.2rem', fontWeight: '700', color: '#444' }}>NIC 4 Digit</th>
                  <th style={{ padding: '1.2rem', fontWeight: '700', color: '#444' }}>NIC 5 Digit</th>
                  <th style={{ padding: '1.2rem', fontWeight: '700', color: '#444' }}>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', color: '#666' }}>1</td>
                  <td style={{ padding: '1.2rem', color: '#1a1a1a', fontWeight: '500' }}>56 - Food and beverage service activities</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>5610 - Restaurants and mobile food service activities</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>56102 - Cafeterias, fast-food restaurants and other food preparation in market stalls</td>
                  <td style={{ padding: '1.2rem' }}><span style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1976d2', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>Services</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', color: '#666' }}>2</td>
                  <td style={{ padding: '1.2rem', color: '#1a1a1a', fontWeight: '500' }}>56 - Food and beverage service activities</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>5629 - Other food service activities</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>56291 - Activities of food service contractors (e.g. for transportation companies)</td>
                  <td style={{ padding: '1.2rem' }}><span style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1976d2', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>Services</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', color: '#666' }}>3</td>
                  <td style={{ padding: '1.2rem', color: '#1a1a1a', fontWeight: '500' }}>84 - Public administration and defence; compulsory social security</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>8412 - Regulation of the activities of providing health care, education, cultural services...</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>84121 - Regulatory agencies relating to health</td>
                  <td style={{ padding: '1.2rem' }}><span style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1976d2', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>Services</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', color: '#666' }}>4</td>
                  <td style={{ padding: '1.2rem', color: '#1a1a1a', fontWeight: '500' }}>84 - Public administration and defence; compulsory social security</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>8412 - Regulation of the activities of providing health care, education, cultural services...</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>84122 - Regulatory agencies relating to education</td>
                  <td style={{ padding: '1.2rem' }}><span style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1976d2', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>Services</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '1.2rem', color: '#666' }}>5</td>
                  <td style={{ padding: '1.2rem', color: '#1a1a1a', fontWeight: '500' }}>84 - Public administration and defence; compulsory social security</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>8412 - Regulation of the activities of providing health care, education, cultural services...</td>
                  <td style={{ padding: '1.2rem', color: '#555' }}>84129 - Regulatory agencies relating to other social services n.e.c.</td>
                  <td style={{ padding: '1.2rem' }}><span style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1976d2', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>Services</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification CTA */}
      <section style={{ padding: '6rem 0', background: '#fff', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Shield size={60} style={{ color: '#4caf50', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1.5rem' }}>Verified NGO Status</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2.5rem' }}>
              We believe in complete transparency. Our registration numbers and documents are available for verification through official government portals like NGO Darpan and the Income Tax Department.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <button style={{ 
                padding: '1rem 2.5rem', 
                background: '#1a1a1a', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontWeight: '700',
                cursor: 'pointer'
              }}>
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
