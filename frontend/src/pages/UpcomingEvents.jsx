import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const fallbackEvents = [
  {
    _id: "1",
    title: "Annual Education Drive",
    date: "August 15, 2026",
    time: "09:00 AM - 02:00 PM",
    location: "BK Gurukul Vidyaniketan",
    description: "Join us in our annual drive to provide school supplies and scholarships to underprivileged students.",
    image: "/impact_education_1776673692428.png",
    status: "Upcoming"
  },
  {
    _id: "2",
    title: "Community Blood Donation Camp",
    date: "September 10, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Gajanan Plaza, Nashik",
    description: "A vital initiative to replenish local blood banks. Your contribution can save lives.",
    image: "/healthcare_all.jpg",
    status: "Registration Open"
  },
  {
    _id: "3",
    title: "Tree Plantation Campaign",
    date: "October 02, 2026",
    time: "08:00 AM - 12:00 PM",
    location: "Trimbakeshwar Hills",
    description: "Help us plant 1000+ saplings to improve our local environment and fight climate change.",
    image: "/social1.png",
    status: "Upcoming"
  }
];

const formatTime = (timeStr) => {
  if (!timeStr) return '';
  const match = timeStr.match(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/);
  if (match) {
    let hour = parseInt(match[1]);
    const min = match[2];
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${min} ${ampm}`;
  }
  return timeStr;
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setEvents(data);
        } else {
          setEvents(fallbackEvents);
        }
      })
      .catch(err => {
        console.error('Error fetching events:', err);
        setEvents(fallbackEvents);
      });
  }, []);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '160px 5% 80px', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: '#e53935', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
          >
            Get Involved
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}
          >
            Upcoming <span style={{ color: '#e53935' }}>Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Join hands with us in our mission to create a better tomorrow. Discover our upcoming initiatives and see how you can make an impact.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '6rem 5% 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 420px))', 
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {events.map((event, index) => (
            <motion.div
              key={event._id || event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              style={{
                background: '#fff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '180px' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', top: '15px', right: '15px', 
                  background: '#e53935', color: '#fff', padding: '0.4rem 0.8rem', 
                  borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px',
                  boxShadow: '0 4px 10px rgba(229, 57, 53, 0.3)'
                }}>
                  {event.status}
                </div>
              </div>

              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {event.title}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>
                    <Calendar size={16} color="#e53935" /> {event.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>
                    <Clock size={16} color="#e53935" /> {formatTime(event.time)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>
                    <MapPin size={16} color="#e53935" /> {event.location}
                  </div>
                </div>

                <p style={{ color: '#555', lineHeight: 1.5, fontSize: '0.9rem', marginBottom: '0', flexGrow: 1 }}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
