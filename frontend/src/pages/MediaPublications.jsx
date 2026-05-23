import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import r17 from '../assets/r17.jpeg';
import r18 from '../assets/r18.jpeg';
import r19 from '../assets/r19.jpeg';
import r20 from '../assets/r20.jpeg';

const MediaPublications = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [dynamicPubs, setDynamicPubs] = useState([]);

  useEffect(() => {
    const fetchPubs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/publications`);
        const data = await response.json();
        if (data && data.length > 0) setDynamicPubs(data);
      } catch (err) { console.error(err); }
    };
    fetchPubs();
  }, []);

  const categories = ['ALL', 'EVENTS', 'EDUCATION', 'HEALTHCARE', 'WORKSHOPS', 'IMPACT'];

  const staticPublications = [
    { 
      id: 1, 
      src: '/r1.jpeg', 
      tag: 'EVENTS', 
      title: 'Guidance Seminar for Rural Competitive Exams', 
      date: 'March 2024',
      fullContent: 'An extensive guidance seminar was organized for rural students to encourage them to opt for competitive exams like MPSC and UPSC. The session focused on career opportunities in administration and the resources available through BK Education and Welfare Society.'
    },
    { 
      id: 2, 
      src: '/r2.jpeg', 
      tag: 'EDUCATION', 
      title: 'Competitive Exam Guidance for Disabled Students', 
      date: 'Feb 2024',
      fullContent: 'BK Education Society has taken a significant initiative to provide specialized guidance for competitive exams to students with disabilities. This program aims to bridge the information gap and provide equal opportunities for all in government services.'
    },
    { 
      id: 3, 
      src: '/r3.jpeg', 
      tag: 'HEALTHCARE', 
      title: 'Mobile Healthcare Units Launch in Rural Districts', 
      date: 'Jan 2024',
      fullContent: 'Bringing healthcare to the doorstep: our new mobile units are equipped with basic diagnostic tools and essential medicines to serve villages where medical facilities are sparse. This project aims to improve rural health outcomes significantly.'
    },
    { 
      id: 4, 
      src: '/r4.jpeg', 
      tag: 'WORKSHOPS', 
      title: 'Vocational Training Success Stories', 
      date: 'Dec 2023',
      fullContent: 'From learning to earning: our vocational workshops have empowered hundreds of youth with skills in digital marketing, tailoring, and electrical work. This feature article showcases the transformative power of skills-based education.'
    },
    { 
      id: 5, 
      src: '/r5.jpeg', 
      tag: 'EVENTS', 
      title: 'Rural Students Guided for Competitive Exams', 
      date: 'Nov 2023',
      fullContent: 'A specialized seminar was conducted to encourage students from rural and tribal areas to pursue careers in administration through competitive examinations. Experts provided insights into preparation strategies for MPSC, UPSC, and banking exams, highlighting the support systems available for Marathi students.'
    },
    { 
      id: 6, 
      src: '/r6.jpeg', 
      tag: 'IMPACT', 
      title: 'Sustaining Change: A Field Report', 
      date: 'Oct 2023',
      fullContent: 'Our comprehensive field report details the long-term impact of our water conservation projects. We have secured water safety for over 20 villages, ensuring agriculture and health are protected.'
    },
    { 
      id: 7, 
      src: '/r7.jpeg', 
      tag: 'EDUCATION', 
      title: 'Children Library Network Expansion', 
      date: 'Sept 2023',
      fullContent: 'Opening worlds through words: the expansion of our children library network into five new districts has brought the joy of reading to thousands of first-generation learners.'
    },
    { 
      id: 8, 
      src: '/r8.jpeg', 
      tag: 'WORKSHOPS', 
      title: 'Digital Literacy for Rural Educators', 
      date: 'Aug 2023',
      fullContent: 'Empowering teachers to empower students: our digital literacy workshop for rural educators focused on integrating technology into the classroom for better student engagement.'
    },
    { 
      id: 9, 
      src: '/r9.jpeg', 
      tag: 'IMPACT', 
      title: 'Understanding the Adoption Process', 
      date: 'July 2023',
      fullContent: 'A detailed feature on the legal and social aspects of the adoption process. BK Education Society works closely with families to navigate the adoption journey with transparency and care, ensuring a secure future for children.'
    },
    { 
      id: 10, 
      src: '/r10.jpeg', 
      tag: 'EVENTS', 
      title: 'Winter Support Distribution Drive', 
      date: 'June 2023',
      fullContent: 'Preparing for the cold: our annual winter distribution drive provided blankets and warm clothing to thousands of homeless individuals and marginalized families across the region.'
    },
    { 
      id: 11, 
      src: '/r12.jpeg', 
      tag: 'EDUCATION', 
      title: 'Bridging the Learning Gap with Catch-up Programs', 
      date: 'May 2023',
      fullContent: 'Our "Catch-up" learning programs are designed for students who have fallen behind due to socioeconomic challenges, helping them return to their age-appropriate grade levels.'
    },
    { 
      id: 12, 
      src: r17, 
      tag: 'EVENTS', 
      title: 'Recent Initiatives and Outreach', 
      date: 'August 2024',
      fullContent: 'Continuing our commitment to community welfare, our recent initiatives have focused on widespread support and engagement across various regions.'
    },
    { 
      id: 13, 
      src: r18, 
      tag: 'IMPACT', 
      title: 'Community Development Program', 
      date: 'September 2024',
      fullContent: 'Our ongoing community development programs are creating lasting positive impacts in the lives of many through sustained dedication and collaborative efforts.'
    },
    { 
      id: 14, 
      src: r19, 
      tag: 'WORKSHOPS', 
      title: 'Empowerment and Skill Development', 
      date: 'October 2024',
      fullContent: 'Focused on long-term empowerment, our latest skill development workshop has equipped numerous individuals with the tools they need for a self-sufficient future.'
    },
    { 
      id: 15, 
      src: r20, 
      tag: 'EDUCATION', 
      title: 'Advancing Educational Opportunities', 
      date: 'November 2024',
      fullContent: 'Creating accessible learning environments continues to be a core mission, with our newest educational initiative reaching even more marginalized students.'
    },
  ];

  const publications = [...dynamicPubs, ...staticPublications];

  const filteredItems = activeFilter === 'ALL' 
    ? publications 
    : publications.filter(pub => pub.tag === activeFilter);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: '0' }}>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.95);
            z-index: 2000;
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
          }
          .modal-window {
            background: #fff;
            width: 100%;
            max-width: 1200px;
            max-height: 90vh;
            border-radius: 40px;
            overflow: hidden;
            position: relative;
            display: flex;
            box-shadow: 0 50px 150px rgba(0,0,0,0.7);
          }
          .modal-img-container {
            flex: 1.3;
            background: #fcfcfc;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 50px;
            border-right: 1px solid #f0f0f0;
            overflow-y: auto;
          }
          .modal-info-container {
            flex: 1;
            padding: 60px 50px;
            overflow-y: auto;
            background: #fff;
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 1000px) {
            .modal-window {
              flex-direction: column;
              max-height: 95vh;
            }
            .modal-img-container {
              flex: none;
              height: 450px;
              padding: 30px;
              border-right: none;
              border-bottom: 1px solid #f0f0f0;
            }
            .modal-info-container {
              padding: 40px 30px;
            }
          }
        `}
      </style>

      {/* Editorial Header */}
      <section style={{ 
        padding: '3rem 5% 4rem', 
        textAlign: 'center', 
        background: '#fcfcfc',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
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
            <motion.div 
              layoutId={`article-${pub.id}`}
              key={pub.id} 
              onClick={() => setSelectedArticle(pub)}
              style={{
                background: '#fff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            >
              <div style={{ height: '450px', position: 'relative', overflow: 'hidden', background: '#f0f0f0' }}>
                <img src={pub.src} alt={pub.title} style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'contain',
                   display: 'block'
                }} />
                <span style={{ 
                  position: 'absolute', 
                  bottom: '20px', 
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
            <motion.div
              layoutId={`article-${selectedArticle.id}`}
              className="modal-window"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              >
                <X size={20} color="#111" />
              </button>

              <div className="modal-img-container">
                <img 
                  src={selectedArticle.src} 
                  alt={selectedArticle.title}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.2))'
                  }}
                />
              </div>

              <div className="modal-info-container">
                <div style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '0.7rem', 
                    color: '#e53935', 
                    fontWeight: '900',
                    background: 'rgba(229, 57, 53, 0.05)',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}>
                    <Tag size={12} /> {selectedArticle.tag}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#888', fontWeight: '600' }}>
                    <Calendar size={14} /> {selectedArticle.date}
                  </span>
                </div>

                <h2 style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', 
                  fontWeight: '900', 
                  color: '#111', 
                  marginBottom: '1.5rem', 
                  lineHeight: '1.2' 
                }}>
                  {selectedArticle.title}
                </h2>

                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#444', 
                  lineHeight: '1.7', 
                  marginBottom: '2.5rem',
                  paddingLeft: '1rem',
                  borderLeft: '4px solid #e53935'
                }}>
                  {selectedArticle.fullContent}
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MediaPublications;
