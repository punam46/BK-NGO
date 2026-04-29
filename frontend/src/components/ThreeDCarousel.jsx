import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ThreeDCarousel.css';

const programs = [
  {
    id: 1,
    title: "Educational Support",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    desc: "Empowering children with foundational literacy and skills."
  },
  {
    id: 2,
    title: "Environment Care",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
    desc: "Promoting sustainable living and tree plantation drives."
  },
  {
    id: 4,
    title: "Vocational Training",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
    desc: "Guiding youth towards professional excellence."
  },
  {
    id: 6,
    title: "Donation Drives",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop",
    desc: "Organizing blood donation camps and resource collection for those in need."
  },
  {
    id: 5,
    title: "Social Welfare",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
    desc: "Supporting physically challenged and economically weaker sections."
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
