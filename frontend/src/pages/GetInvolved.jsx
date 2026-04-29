import React from 'react';

const GetInvolved = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const reviews = [
    {
      name: "Aditya Singh",
      img: "/volunteer_portrait_male_1777282848556.png",
      text: "Leading the BK Education and Welfare Society Financial Literacy Program was a transformative experience. Through this initiative, my team and I worked towards fostering financial awareness among children—the future of India."
    },
    {
      name: "Nikkitha KJ",
      img: "/volunteer_portrait_female_1777282868352.png",
      text: "Volunteering with BK has significantly changed me. I've become more open and interactive, which has contributed to my personal growth. Seeing the direct impact has reinforced my belief in taking small, consistent steps."
    },
    {
      name: "Rahul Verma",
      img: "/volunteer_3_male_1777283139811.png",
      text: "Working with the rural outreach team opened my eyes to the incredible potential in our villages. BK provides the perfect platform to channel your energy into real, measurable change. I've learned more about empathy here."
    },
    {
      name: "Sneha Patil",
      img: "/volunteer_4_female_1777283157419.png",
      text: "Being part of the women empowerment workshops has been the most rewarding part of my career. Witnessing the transition from hesitation to confidence in these women is priceless. BK doesn't just help; it empowers."
    },
    {
      name: "Karan Mehta",
      img: "/volunteer_5_male_1777283176465.png",
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

  return (
    <div className="involved-page">
      <style>{animations}</style>
      {/* Mini Hero */}
      <section className="volunteer-hero" style={{
        padding: '2rem 0 6rem',
        background: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ 
            fontSize: '4.8rem', 
            fontWeight: '800', 
            color: '#333', 
            marginBottom: '1rem',
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}>
            Volunteers are our<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
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
            marginBottom: '4rem',
            maxWidth: '900px',
            margin: '0 auto 4rem',
            fontWeight: '400'
          }}>
            10,555 volunteers. 1,264 interns. 20,74,526 volunteering hours generated.<br />
            13 states. 75,000 children reached through volunteers.
          </p>
          
          <button style={{
            background: '#ffcc00',
            color: '#1a1a1a',
            padding: '1.4rem 4rem',
            fontSize: '1.3rem',
            fontWeight: '700',
            border: 'none',
            borderRadius: '60px',
            cursor: 'pointer',
            boxShadow: '0 15px 35px rgba(255, 204, 0, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 204, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 204, 0, 0.25)';
          }}
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section style={{ padding: '6rem 0', background: '#fdfdfd', borderTop: '1px solid #eee' }}>
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
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2' }}>
              what <span style={{ color: '#ffcc00', fontFamily: 'var(--font-script)', fontSize: '4rem', fontWeight: '400' }}>our volunteers</span><br />
              have to say
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
                  style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} 
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1a1a1a' }}>
              Our Volunteers in Action
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
              Catch a glimpse of the incredible work our volunteers do on the ground every day.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              { img: "/volunteers_teaching_1777283358114.png", title: "Teaching for Tomorrow" },
              { img: "/volunteers_distribution_1777283377843.png", title: "Grassroots Support" },
              { img: "/volunteers_meeting_1777283394214.png", title: "Impact Planning" }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                height: '300px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, left: 0, right: 0, 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '2rem 1.5rem',
                  color: '#fff'
                }}>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>

            {/* Volunteer */}
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--pratham-yellow)' }}>🙋‍♂️</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Volunteer Your Time</h2>
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
                Share your skills and passion with us. Whether you can teach, help with administration, or organize events, your time makes a massive difference.
              </p>
              <button style={{
                background: 'var(--pratham-black)',
                color: '#fff',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Apply Now</button>
            </div>

            {/* Support/Donate */}
            <div style={{ textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#e53935' }}>💰</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Support Financially</h2>
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
                Every contribution goes directly toward our educational and welfare programs. Help us reach more communities and transform lives through your generosity.
              </p>
              <button style={{
                background: '#e53935',
                color: '#fff',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Donate Now</button>
            </div>

            {/* Partner */}
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#43a047' }}>🏢</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Corporate Partnership</h2>
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
                Join hands with us for CSR initiatives. We partner with organizations to create sustainable social impact through collaborative projects.
              </p>
              <button style={{
                background: 'var(--pratham-black)',
                color: '#fff',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Partner With Us</button>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ padding: '8rem 0', background: '#111', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '2rem' }}>
            "Service to others is the rent you pay for your room here on earth."
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--pratham-yellow)', fontWeight: '600' }}>— Muhammad Ali</p>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
