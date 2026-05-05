import React from 'react';

const Resources = () => {
  const galleryItems = [
    { src: "/vocational_hero.png", title: "Vocational Training Hub" },
    { src: "/watercolor_children_group.png", title: "Youth Awareness Program" },
    { src: "/hero.png", title: "Community Service Drive" },
    { src: "/children.webp", title: "Educational Workshop" },
    { src: "/watercolor_girl_airplane.png", title: "Future Vision Initiatives" },
    { src: "/girl_paper_airplane.png", title: "Student Empowerment" }
  ];

  return (
    <div className="resources-page">
      {/* Mini Hero */}
      <section className="page-hero" style={{
        height: '40vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Media & Resources</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            A glimpse into our activities, impact stories, and community events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Photo Gallery</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {galleryItems.map((item, index) => (
              <div key={index} style={{
                height: '300px',
                overflow: 'hidden',
                borderRadius: '8px',
                position: 'relative',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '2rem 1.5rem',
                  color: '#fff',
                  pointerEvents: 'none'
                }}>
                  <h4 style={{ fontSize: '1.2rem' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section Placeholder */}
      <section style={{ padding: '6rem 0', background: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Annual Reports & Newsletters</h2>
          <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            Transparency and accountability are at the heart of our work. Access our annual reports and newsletters to stay updated on our financial and social progress.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', width: '200px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
              <h4>2023 Report</h4>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '0.5rem' }}>PDF - 2.4 MB</p>
            </div>
            <div style={{ padding: '2rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', width: '200px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
              <h4>2022 Report</h4>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '0.5rem' }}>PDF - 3.1 MB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
