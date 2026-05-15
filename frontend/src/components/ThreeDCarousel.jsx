import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ThreeDCarousel.css';

import g16 from '../assets/g16.jpeg';
import g5 from '../assets/g5.jpg';
import g18 from '../assets/g18.jpeg';
import G52 from '../assets/G52.jpeg';
import tribalDev from '../assets/TRIBAL2.jpg';
import childDev from '../assets/child care 1.jpg';

const programs = [
  {
    id: 1,
    title: "Educational Support",
    image: g5,
    desc: "Empowering children with foundational literacy and skills."
  },
  {
    id: 2,
    title: "Environment Care",
    image: g18,
    desc: "Promoting sustainable living and tree plantation drives."
  },
  {
    id: 6,
    title: "Donation Drives",
    image: g16,
    desc: "Organizing blood donation camps and resource collection for those in need."
  },
  {
    id: 5,
    title: "Social Welfare",
    image: G52,
    desc: "Supporting physically challenged and economically weaker sections."
  },
  {
    id: 7,
    title: "Tribal Development",
    image: tribalDev,
    desc: "Empowering tribal communities through education and sustainability."
  },
  {
    id: 8,
    title: "Child Development",
    image: childDev,
    desc: "Focusing on the overall development, health, and education of children."
  }
];

const ThreeDCarousel = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const autoSlideRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Short delay to allow page height and scroll position to stabilize
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.6,
          rootMargin: '0px 0px -200px 0px'
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const next = useCallback(() => {
    setActive(prev => (prev + 1) % programs.length);
  }, []);

  const prev = useCallback(() => {
    setActive(prev => (prev - 1 + programs.length) % programs.length);
  }, []);

  useEffect(() => {
    autoSlideRef.current = setInterval(next, 3000);
    return () => clearInterval(autoSlideRef.current);
  }, [next]);

  const resetTimer = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(next, 3000);
  };

  const getCardStyle = (index) => {
    const diff = (index - active + programs.length) % programs.length;

    // Normalize diff to -2, -1, 0, 1, 2
    let position = diff;
    if (position > 2) position -= programs.length;
    if (position < -2) position += programs.length;

    const absPos = Math.abs(position);

    const style = {
      transform: isVisible
        ? `translateX(${position * 280}px) scale(${1 - absPos * 0.18}) rotateY(${position * -35}deg)`
        : `translateX(${800 + position * 50}px) scale(0.5) rotateY(-45deg)`,
      zIndex: 10 - absPos,
      opacity: isVisible ? (1 - absPos * 0.3) : 0,
      pointerEvents: absPos === 0 && isVisible ? 'auto' : 'none',
      visibility: absPos > 2 ? 'hidden' : 'visible',
      transitionDelay: !isVisible ? '0s' : `${index * 0.1}s`
    };

    return style;
  };

  return (
    <div className="carousel-3d-wrapper" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="carousel-perspective">
        {programs.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-card ${index === active ? 'active' : ''}`}
            style={getCardStyle(index)}
          >
            <div className="card-image-box">
              <img src={item.image} alt={item.title} />
              <div className="card-overlay"></div>
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ThreeDCarousel;
