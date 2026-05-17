import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const STATE_CITY_MAP = {
  "Andaman and Nicobar Islands": ["Port Blair", "Other"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Other"],
  "Arunachal Pradesh": ["Itanagar", "Other"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Other"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Other"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Other"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa", "Other"],
  "Delhi": ["Delhi", "New Delhi", "Other"],
  "Goa": ["Panaji", "Vasco da Gama", "Margao", "Other"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Other"],
  "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Rohtak", "Other"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Other"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Other"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Other"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Other"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Kannur", "Other"],
  "Ladakh": ["Leh", "Kargil", "Other"],
  "Lakshadweep": ["Kavaratti", "Other"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Other"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivli", "Vasai-Virar", "Aurangabad", "Solapur", "Amravati", "Malegaon", "Jalgaon", "Nanded", "Kolhapur", "Sangli", "Bhiwandi", "Other"],
  "Manipur": ["Imphal", "Other"],
  "Meghalaya": ["Shillong", "Other"],
  "Mizoram": ["Aizawl", "Other"],
  "Nagaland": ["Dimapur", "Kohima", "Other"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Other"],
  "Puducherry": ["Pondicherry", "Ozhukarai", "Other"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Other"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Other"],
  "Sikkim": ["Gangtok", "Other"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Erode", "Other"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Other"],
  "Tripura": ["Agartala", "Other"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", "Other"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Other"],
  "West Bengal": ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Howrah", "Other"]
};

const INDIAN_STATES = Object.keys(STATE_CITY_MAP);

const Donate = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    amount: 500,
    panNumber: '',
    aadharNumber: '',
    city: '',
    state: '',
    country: 'India'
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'mobile' || name === 'aadharNumber') && value !== '' && !/^\d+$/.test(value)) {
      return;
    }
    if (name === 'mobile' && value.length > 10) return;
    if (name === 'aadharNumber' && value.length > 12) return;
    if (name === 'panNumber' && value.length > 10) return;
    
    const finalValue = name === 'panNumber' ? value.toUpperCase() : value;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: finalValue,
      ...(name === 'state' ? { city: '' } : {}) 
    }));
  };

  const initPayment = (data) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "BK Education and Welfare Society",
      description: "Donation for Social Welfare",
      image: "/favicon.svg",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${import.meta.env.VITE_API_URL}/payment/verify`;
          const { data: verifyData } = await axios.post(verifyUrl, response);
          alert(verifyData.message);
          setShowForm(false);
        } catch (error) {
          console.error(error);
          alert("Payment verification failed");
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.mobile,
      },
      notes: {
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country}`,
      },
      theme: {
        color: "#e53935",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }
    setLoading(true);

    try {
      // 1. Ensure Razorpay script is loaded
      if (!window.Razorpay) {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          alert("Razorpay SDK failed to load. Are you online?");
          setLoading(false);
          return;
        }
      }

      const orderUrl = `${import.meta.env.VITE_API_URL}/payment/order`;
      const { data } = await axios.post(orderUrl, { amount: formData.amount });
      initPayment(data);
    } catch (error) {
      console.error(error);
      alert("Error creating order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const responsiveInputGroup = {
    display: 'flex',
    flexDirection: windowWidth < 768 ? 'column' : 'row',
    alignItems: windowWidth < 768 ? 'flex-start' : 'center',
    gap: windowWidth < 768 ? '0.5rem' : '1.5rem',
    width: '100%'
  };

  return (
    <div className="donate-page" style={{ paddingTop: '130px' }}>
      <section className="donate-hero" style={{ padding: '0 5% 6rem', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '900',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            lineHeight: '1.1',
            letterSpacing: '-1.5px',
            whiteSpace: 'normal'
          }}>
            Build Futures with <br /> <span style={{ color: '#e53935' }}>BK</span> Education and Welfare Society
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: '600',
            color: '#444',
            marginBottom: '2rem',
            lineHeight: '1.2',
            fontFamily: "'Inter', sans-serif"
          }}>
            Empower Children, Youth, and Environmental care
          </p>

          {!showForm && (
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: '#444',
                marginBottom: '2.5rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                BK Education and Welfare Society is committed to preparing children and youth through robust social welfare initiatives, dedicated tribal education programs, and community-driven development. By building sustainable communities and nurturing environmental care, we help children overcome learning barriers and equip youth with the employable skills and entrepreneurship opportunities needed for a self-sufficient and inclusive future.
              </p>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: '#f57c00',
                marginBottom: '2rem',
                fontWeight: '800',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-1px'
              }}>
                Your support can change lives
              </h2>

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
          )}

          {showForm && (
            <div style={{ 
              maxWidth: '1000px', 
              margin: '3rem auto', 
              background: '#f9f9f9', 
              padding: windowWidth < 768 ? '1.5rem' : '3rem', 
              borderRadius: '12px',
              textAlign: 'left',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: windowWidth < 768 ? '1.4rem' : '1.8rem', fontWeight: '600', marginBottom: '2.5rem', color: '#333', textAlign: 'center' }}>
                BK Education and Welfare Society
              </h3>

              <form onSubmit={handleDonate} style={{ 
                display: 'grid', 
                gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', 
                gap: '2rem 3rem' 
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>First name *</label>
                    <input name="firstName" type="text" required onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Last name *</label>
                    <input name="lastName" type="text" required onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Email *</label>
                    <input name="email" type="email" required onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>State *</label>
                    <select name="state" required value={formData.state} onChange={handleChange} style={inputStyle}>
                      <option value="">Select State</option>
                      {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>City *</label>
                    <select name="city" required value={formData.city} onChange={handleChange} style={inputStyle} disabled={!formData.state}>
                      <option value="">Select City</option>
                      {(formData.state && STATE_CITY_MAP[formData.state]) ? STATE_CITY_MAP[formData.state].map(city => <option key={city} value={city}>{city}</option>) : <option value="Other">Other</option>}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <div style={responsiveInputGroup}>
                     <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Mobile Number *</label>
                     <input name="mobile" type="text" placeholder="10-digit number" value={formData.mobile} required onChange={handleChange} style={inputStyle} />
                   </div>
                   <div style={responsiveInputGroup}>
                     <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Aadhar Number *</label>
                     <input name="aadharNumber" type="text" placeholder="12-digit number" value={formData.aadharNumber} required onChange={handleChange} style={inputStyle} />
                   </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>PAN Number *</label>
                    <input name="panNumber" type="text" placeholder="10-character PAN" maxLength="10" required value={formData.panNumber} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Amount (INR) *</label>
                    <input name="amount" type="number" min="1" required value={formData.amount} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Country *</label>
                    <input name="country" type="text" required value={formData.country} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>

                <div style={{ gridColumn: windowWidth < 768 ? 'span 1' : 'span 2' }}>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>Address *</label>
                    <input name="address" type="text" required onChange={handleChange} style={inputStyle} />
                  </div>
                </div>

                <div style={{ gridColumn: windowWidth < 768 ? 'span 1' : 'span 2', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#444' }}>
                    <input 
                      type="checkbox" 
                      required
                      checked={agreedToTerms} 
                      onChange={(e) => setAgreedToTerms(e.target.checked)} 
                      style={{ marginTop: '3px' }}
                    />
                    <span>By submitting this form I agree to the website's <Link to="/terms" style={{ color: '#e53935' }}>Terms and Conditions</Link> and consent to the storage of my information.</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', fontSize: '0.9rem', color: '#444' }}>
                    <input 
                      type="checkbox" 
                      style={{ marginTop: '3px' }}
                    />
                    <span>I agree to let BK Education and Welfare Society contact me by text or email about my donations, campaigns, and updates.</span>
                  </label>
                </div>

                <div style={{ gridColumn: windowWidth < 768 ? 'span 1' : 'span 2', marginTop: '2rem', textAlign: 'center' }}>
                  <button type="submit" disabled={loading} style={submitBtnStyle}>
                    {loading ? 'Processing...' : 'CONFIRM DONATION'}
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} style={backBtnStyle}>
                    Back to information
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const labelStyle = { width: '150px', fontWeight: '500', fontSize: '0.95rem' };
const labelMobileStyle = { width: '100%', fontWeight: '600', fontSize: '0.9rem', color: '#444' };
const inputStyle = { width: '100%', padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' };
const submitBtnStyle = {
  padding: '1.2rem 4rem',
  background: '#e53935',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '1.2rem',
  width: '100%',
  maxWidth: '400px'
};
const backBtnStyle = { background: 'none', border: 'none', color: '#888', cursor: 'pointer', textDecoration: 'underline', marginTop: '1rem', display: 'block', width: '100%' };

export default Donate;
