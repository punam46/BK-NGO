import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const INDIAN_CITIES = [
  "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Amravati", "Amritsar", "Asansol", "Aurangabad", "Bangalore", 
  "Bareilly", "Belgaum", "Bhavnagar", "Bhilai", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bikaner", "Chandigarh", 
  "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Erode", "Faridabad", 
  "Firozabad", "Gandhinagar", "Ghaziabad", "Gorakhpur", "Gulbarga", "Guntur", "Gurgaon", "Guwahati", "Gwalior", 
  "Hubli", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jammu", "Jamnagar", "Jamshedpur", 
  "Jhansi", "Jodhpur", "Kannur", "Kanpur", "Kochi", "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode", 
  "Lucknow", "Ludhiana", "Madurai", "Malegaon", "Mangalore", "Meerut", "Moradabad", "Mumbai", "Mysore", 
  "Nagpur", "Nanded", "Nashik", "Nellore", "Noida", "Patna", "Pondicherry", "Pune", "Raipur", "Rajahmundry", 
  "Rajkot", "Ranchi", "Rourkela", "Salem", "Sangli", "Siliguri", "Solapur", "Srinagar", "Surat", "Thane", 
  "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Udaipur", "Ujjain", "Vadodara", 
  "Varanasi", "Vasai-Virar", "Vellore", "Vijayawada", "Visakhapatnam", "Warangal", "Other"
];

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", 
  "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", 
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

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
    
    setFormData({ ...formData, [name]: value });
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
    <div className="donate-page" style={{ paddingTop: '85px' }}>
      <section className="donate-hero" style={{ padding: '0 5% 6rem', textAlign: 'center', background: '#fff' }}>
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
                color: '#f57c00',
                marginBottom: '1.5rem',
                fontWeight: '500'
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
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>City *</label>
                    <select name="city" required onChange={handleChange} style={inputStyle}>
                      <option value="">Select City</option>
                      {INDIAN_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </div>
                  <div style={responsiveInputGroup}>
                    <label style={windowWidth < 768 ? labelMobileStyle : labelStyle}>State *</label>
                    <select name="state" required onChange={handleChange} style={inputStyle}>
                      <option value="">Select State</option>
                      {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
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
                    <input name="panNumber" type="text" required onChange={handleChange} style={inputStyle} />
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
