import React, { useState } from 'react';
import { ArrowRight, Search, Filter } from 'lucide-react';

const MediaPublications = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'EVENTS', 'EDUCATION', 'HEALTHCARE', 'WORKSHOPS', 'IMPACT'];

  const publications = [
    { id: 1, src: '/r1.jpeg', tag: 'EVENTS', title: 'Empowering Communities Through Outreach', date: 'March 2024' },
    { id: 2, src: '/r2.jpeg', tag: 'EDUCATION', title: 'Literacy Drive Gains Statewide Attention', date: 'Feb 2024' },
    { id: 3, src: '/r3.jpeg', tag: 'HEALTHCARE', title: 'Mobile Healthcare Units Launch in Rural Districts', date: 'Jan 2024' },
    { id: 4, src: '/r4.jpeg', tag: 'WORKSHOPS', title: 'Vocational Training Success Stories', date: 'Dec 2023' },
    { id: 5, src: '/r5.jpeg', tag: 'EVENTS', title: 'Annual Transformation Meet 2023', date: 'Nov 2023' },
    { id: 6, src: '/r6.jpeg', tag: 'IMPACT', title: 'Sustaining Change: A Field Report', date: 'Oct 2023' },
    { id: 7, src: '/r7.jpeg', tag: 'EDUCATION', title: 'Children Library Network Expansion', date: 'Sept 2023' },
    { id: 8, src: '/r8.jpeg', tag: 'WORKSHOPS', title: 'Digital Literacy for Rural Educators', date: 'Aug 2023' },
    { id: 9, src: '/r9.jpeg', tag: 'HEALTHCARE', title: 'Clean Water & Hygiene Campaigns', date: 'July 2023' },
    { id: 10, src: '/r10.jpeg', tag: 'EVENTS', title: 'Winter Support Distribution Drive', date: 'June 2023' },
    { id: 11, src: '/r12.jpeg', tag: 'EDUCATION', title: 'Bridging the Learning Gap with Catch-up Programs', date: 'May 2023' },
    { id: 12, src: '/r14.jpeg', tag: 'WORKSHOPS', title: 'Creative Arts & Skills Workshop', date: 'April 2023' },
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? publications 
    : publications.filter(pub => pub.tag === activeFilter);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Editorial Header */}
      <section style={{ 
        padding: '8rem 5% 4rem', 
        textAlign: 'center', 
        background: '#fcfcfc',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '4.5rem', 
            fontWeight: '900', 
            letterSpacing: '-3px', 
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            lineHeight: '1'
          }}>Media & Publications</h1>
          <p style={{ fontSize: '1.3rem', color: '#666', lineHeight: '1.6' }}>
            A curated archive of BK Education and Welfare Society news coverage, press releases, and impact stories from across the nation.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ 
        padding: '2rem 5%', 
        position: 'sticky', 
        top: '80px', 
        zIndex: 100, 
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '10px' 
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                border: activeFilter === cat ? 'none' : '1px solid #ddd',
                background: activeFilter === cat ? '#e53935' : 'transparent',
                color: activeFilter === cat ? '#fff' : '#555',
                fontSize: '0.85rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeFilter === cat ? '0 10px 20px rgba(229, 57, 53, 0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Publication Grid */}
      <section style={{ padding: '4rem 5%' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem' 
        }}>
          {filteredItems.map((pub) => (
            <div key={pub.id} style={{
              background: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ height: '450px', position: 'relative', overflow: 'hidden', background: '#f0f0f0' }}>
                <img src={pub.src} alt={pub.title} style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} />
                <span style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  left: '20px', 
                  background: '#e53935', 
                  color: '#fff', 
                  padding: '6px 14px', 
                  borderRadius: '8px', 
                  fontSize: '0.75rem', 
                  fontWeight: '900' 
                }}>{pub.tag}</span>
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem', fontWeight: '600' }}>{pub.date}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', lineHeight: '1.3', color: '#1a1a1a', marginBottom: '1.5rem' }}>{pub.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#e53935', fontWeight: '800', fontSize: '0.9rem', gap: '8px' }}>
                  READ FULL ARTICLE <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Footer */}
      <section style={{ 
        margin: '6rem 5%', 
        padding: '6rem 2rem', 
        background: 'var(--pratham-black)', 
        borderRadius: '40px', 
        textAlign: 'center', 
        color: '#fff' 
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Stay Informed</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem' }}>
            Subscribe to our newsletter to receive the latest updates, reports, and impact stories directly in your inbox.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '450px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{ 
                flex: 1, 
                padding: '1rem 1.5rem', 
                borderRadius: '50px', 
                border: 'none', 
                fontSize: '1rem' 
              }} 
            />
            <button style={{ 
              padding: '1rem 2rem', 
              background: '#e53935', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '50px', 
              fontWeight: '800', 
              cursor: 'pointer' 
            }}>JOIN</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPublications;
