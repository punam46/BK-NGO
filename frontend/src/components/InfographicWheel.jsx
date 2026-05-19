import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import AboutImg from '../assets/About.png';
import centerGirlImg from '../assets/maya.png';

const programs = [
  { id: 0, title: "EDUCATION", color: "#1E3A8A", desc: "Providing physical, mental, books & learning opportunities for a brighter future." },
  { id: 1, title: "SOCIAL WELFARE", color: "#EA580C", desc: "Working for community upliftment through support, care, and welfare initiatives." },
  { id: 2, title: "TRIBAL DEVELOPMENT", color: "#166534", desc: "Empowering tribal communities through skill development, education, and sustainable growth." },
  { id: 3, title: "CHILD DEVELOPMENT", color: "#991B1B", desc: "Focusing on the overall development, health, and education of children." },
  { id: 4, title: "WOMAN EMPOWERMENT", color: "#581C87", desc: "Empowering women through education, skill development, and self-reliance programs." },
  { id: 5, title: "RURAL DEVELOPMENT", color: "#3F6212", desc: "Working towards the development of rural communities and improving livelihoods." },
  { id: 6, title: "DISABILITY AFFAIRS", color: "#0369A1", desc: "Supporting and empowering differently-abled individuals towards an independent and dignified life." }
];

const InfographicWheel = () => {
  // Education (idx 0) should be at the Left active position initially.
  // In our slice math, slice 0 is centered around (0 * 360/7) + offset.
  // To bring that center to 270deg: 
  // (0 * 360/7) + offset + rotation = 270.
  // Let's set offset to 0 and rotation to 270 for simplicity.
  const [rotation, setRotation] = useState(270); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInfo(false);
      
      setTimeout(() => {
        // Rotate to next section in order 1, 2, 3...
        setRotation(prev => prev - (360 / programs.length));
        
        setTimeout(() => {
          setShowInfo(true);
        }, 800);
      }, 300);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepAngle = 360 / programs.length;
    // Normalized rotation to find which index is at 270deg.
    // Index idx is at (idx * stepAngle + rotation)
    // We want idx * stepAngle + rotation = 270
    // => idx = (270 - rotation) / stepAngle
    const steps = Math.round((270 - rotation) / stepAngle);
    const activeIdx = ((steps % programs.length) + programs.length) % programs.length;
    setActiveIndex(activeIdx);
  }, [rotation]);

  return (
    <div style={{
      position: 'relative',
      width: 'min(90vw, 650px)',
      height: 'min(90vw, 650px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2rem 0'
    }}>
      {/* Container for the rotating image */}
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ 
          type: 'spring', 
          stiffness: 45, 
          damping: 14 
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {programs.map((prog, idx) => {
          const step = 360 / programs.length;
          // Clean slice math starting from 0.
          // We'll offset the image within the slice to match About.png.
          // Since 1 (idx 0) is at ~45deg in About.png, and we want it at 0deg in our slices:
          const imageOffset = -45; 
          
          const startAngle = idx * step - (step / 2);
          const endAngle = (idx + 1) * step - (step / 2);
          
          const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
          const midAngle = startAngle + step / 2;
          const xMid = 50 + 50 * Math.cos((midAngle * Math.PI) / 180);
          const yMid = 50 + 50 * Math.sin((midAngle * Math.PI) / 180);
          const x2 = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
          const y2 = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);

          return (
            <div
              key={prog.id}
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${xMid}% ${yMid}%, ${x2}% ${y2}%)`,
                WebkitClipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${xMid}% ${yMid}%, ${x2}% ${y2}%)`
              }}
            >
              <img 
                src={AboutImg} 
                alt="" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  display: 'block',
                  transform: `rotate(${imageOffset}deg)` // Align the image sectors with the clip-paths
                }} 
              />
            </div>
          );
        })}

        {/* Static Center Hub (Counter-rotating to stay upright) */}
        <motion.div 
          animate={{ rotate: -rotation }}
          transition={{ type: 'spring', stiffness: 45, damping: 14 }}
          style={{
            position: 'absolute',
            width: '34%',
            height: '34%',
            background: '#fff',
            borderRadius: '50%',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={centerGirlImg} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover'
              }} 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Info Pop-up (Left Side) */}
      <AnimatePresence mode="wait">
        {showInfo && (
          <motion.div
            key={activeIndex}
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 1.1 }}
            transition={{ 
              duration: 0.7, 
              type: 'spring', 
              stiffness: 90, 
              damping: 18 
            }}
            style={{
              position: 'absolute',
              left: '-180px',
              top: '50%',
              marginTop: '-100px',
              width: '320px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(15px)',
              padding: '2rem',
              borderRadius: '24px',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.3)',
              borderLeft: `12px solid ${programs[activeIndex].color}`,
              zIndex: 100,
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <h4 style={{ 
              color: programs[activeIndex].color, 
              fontWeight: '900', 
              marginBottom: '0.8rem', 
              fontSize: '1.25rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1px'
            }}>
              {programs[activeIndex].title}
            </h4>
            <p style={{ 
              fontSize: '1rem', 
              color: '#333', 
              lineHeight: '1.6', 
              margin: 0, 
              fontWeight: '600'
            }}>
              {programs[activeIndex].desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfographicWheel;
