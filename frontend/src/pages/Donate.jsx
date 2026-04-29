import React, { useState } from 'react';

const Donate = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="donate-page" style={{ paddingTop: '85px' }}>
      <section className="donate-hero" style={{ padding: '0 5%', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: '400',
            fontFamily: 'var(--font-script)',
            marginBottom: '1rem',
            color: '#333',
            lineHeight: '1.3',
            whiteSpace: 'normal'
          }}>
            Build Futures with <br /> <span style={{ color: '#e53935' }}>BK Education and Welfare Society</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '400',
            color: '#444',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Empower Children, Youth, and Environmental care
          </p>

          {!showForm && (
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '2.5rem'
              }}>
                BK Education and Welfare Society is committed to preparing children and youth for the future while building sustainable communities and nurturing environmental care. By helping children overcome learning barriers, empowering communities to protect their natural heritage, and equipping youth with employable skills and entrepreneurship opportunities, BK Education and Welfare Society creates opportunities for growth and self-sufficiency.
              </p>

              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#f57c00', // Deep orange
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                Your support can change lives
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '3rem'
              }}>
                Together, we can transform lives by empowering millions of children and laying the foundation for lifelong learning. By promoting environmental sustainability and opening doors to education and employment opportunities, we break barriers. And by equipping youth with skills and knowledge, we empower them to reach heights of future.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '3rem',
                background: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid #eee',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Make a Difference Today</h3>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Support our initiatives by donating today.</p>

                <button 
                  className="donate-btn" 
                  onClick={() => setShowForm(true)}
                  style={{
                    padding: '1.2rem 4rem',
                    fontSize: '1.2rem',
                    background: '#e53935',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: '700'
                  }}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          )}

          {showForm && (
            <div style={{ 
              maxWidth: '1000px', 
              margin: '3rem auto', 
              background: '#f9f9f9', 
              padding: '3rem', 
              borderRadius: '12px',
              textAlign: 'left',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                background: '#FFB300', 
                color: '#000', 
                display: 'inline-flex', 
                alignItems: 'center', 
                padding: '0.8rem 1.5rem', 
                fontWeight: '800',
                marginBottom: '1.5rem',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>&gt;</span> DONATE TO
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '2.5rem', color: '#333' }}>
                BK Education and Welfare Society
              </h3>

              <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 3rem' }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>First name *</label>
                    <input type="text" placeholder="First name as per PAN card for receipt" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>Last name *</label>
                    <input type="text" placeholder="Last name as per PAN card for receipt" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>Email *</label>
                    <input type="email" placeholder="We'll send your donation receipt here" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>Country</label>
                    <input type="text" value="India" readOnly style={{ ...inputStyle, background: '#f5f5f5', cursor: 'default' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>State</label>
                    <input type="text" value="Maharashtra" readOnly style={{ ...inputStyle, background: '#f5f5f5', cursor: 'default' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '120px', fontWeight: '500' }}>City</label>
                    <select style={inputStyle}>
                      <option>City</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>Mobile Number *</label>
                    <input type="text" placeholder="10-digit number, no country code needed" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>Address *</label>
                    <input type="text" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>Pincode</label>
                    <input type="text" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>Amount (INR)</label>
                    <div style={{ display: 'flex', flex: 1, border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                      <span style={{ padding: '0.8rem 1rem', background: '#eee', color: '#666' }}>₹</span>
                      <input type="number" defaultValue="500" style={{ border: 'none', padding: '0.8rem', flex: 1, outline: 'none' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>PAN Number *</label>
                    <input type="text" placeholder="Required for 80G tax exemption in India" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ width: '150px', fontWeight: '500' }}>Aadhar Number *</label>
                    <input type="text" placeholder="12-digit Aadhar number" style={inputStyle} />
                  </div>
                </div>

                {/* Consent Section */}
                <div style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <input type="checkbox" style={{ width: '18px', height: '18px', marginTop: '4px' }} />
                    <label style={{ color: '#555', fontSize: '0.95rem' }}>
                      By submitting this form I agree to the website's <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Terms and Conditions</a> and consent to the storage of my information.
                    </label>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <input type="checkbox" style={{ width: '18px', height: '18px', marginTop: '4px' }} />
                    <label style={{ color: '#555', fontSize: '0.95rem' }}>
                      I agree to let BK Education and Welfare Society contact me by text or email about my donations, campaigns, and updates.
                    </label>
                  </div>

                  <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.5' }}>
                    Your contributions are eligible for up to 50% tax benefit under Section 80G, as BK Education and Welfare Society is registered as a non-profit organization.
                  </p>

                  <div style={{ 
                    background: '#FFFDE7', 
                    padding: '2rem', 
                    textAlign: 'center', 
                    marginBottom: '2rem',
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem', alignItems: 'center', opacity: 0.8 }}>
                      <span style={{ fontWeight: '800', color: '#0055a4', fontSize: '1.2rem' }}>RuPay<span style={{ color: '#f37021' }}>▶</span></span>
                      <span style={{ fontWeight: '800', color: '#333', fontSize: '1.2rem' }}>UPI<span style={{ color: '#f37021' }}>▶</span></span>
                      <span style={{ fontWeight: '800', color: '#1a1f71', fontSize: '1.4rem' }}>VISA</span>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eb001b', marginRight: '-8px' }}></div>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ff5f00', opacity: 0.8 }}></div>
                      </div>
                    </div>
                    <p style={{ color: '#666', fontWeight: '500' }}>We accept all major payment methods</p>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button type="submit" style={{
                      padding: '1.2rem 4rem',
                      background: '#e57373', // Slightly muted red to match image
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '1.2rem',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      DONATE NOW
                    </button>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <button 
                      type="button" 
                      onClick={() => setShowForm(false)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#888',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }}
                    >
                      Back to information
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  flex: 1,
  padding: '0.8rem 1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '0.95rem',
  outline: 'none',
  background: '#fff'
};

export default Donate;
