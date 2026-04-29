import React, { useState, useEffect, useRef } from 'react';
import './ProgramSlider.css';
import childrenStudying from '../assets/children_studying.png';

const ProgramSlider = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: childrenStudying,
      title: 'EDUCATIONAL SUPPORT',
      desc: 'Formed with the foundational idea of "Education for all", focusing on foundational literacy and arithmetic skills for underprivileged children.',
      review: "Life-changing experience for kids! Excellent teaching methods.",
      rating: 5,
      reviewer: "Sunita Sharma"
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop',
      title: 'ENVIRONMENT CARE',
      desc: 'Conducting massive campaigns for tree plantations and water supply awareness to create a sustainable and greener future for our society.',
      review: "Very transparent and professional NGO. Highly recommended.",
      rating: 5,
      reviewer: "Rahul Deshmukh"
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
      title: 'SOCIAL WELFARE',
      desc: 'Supporting the betterment of physically challenged individuals and providing fee reductions for students from economically weaker sections.',
      review: "They truly care about the marginalized sections of society.",
      rating: 5,
      reviewer: "Anjali Patil"
    }
  ]);

  const autoNextTimeout = useRef(null);

  const resetAutoSlide = () => {
    if (autoNextTimeout.current) clearTimeout(autoNextTimeout.current);
    autoNextTimeout.current = setTimeout(() => {
      handleNext();
    }, 7000);
  };

  const handleNext = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
    resetAutoSlide();
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoNextTimeout.current) clearTimeout(autoNextTimeout.current);
    };
  }, []);

  return (
    <div className="program-slider-section">
      <div className="slider-container">
        <div className="slider-list">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`slider-item ${index === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="description">{item.desc}</div>
                
                {/* Review Badge */}
                <div className="review-badge">
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="review-text">"{item.review}"</p>
                  <span className="reviewer">- {item.reviewer}</span>
                </div>

                <div className="buttons">
                  <button className="see-more">LEARN MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className="thumbnail-list">
          {items.map((item, index) => (
            <div
              key={`thumb-${item.id}`}
              className={`thumbnail-item ${index === 0 ? 'active' : ''}`}
              onClick={() => {
                // If clicked, we can navigate or just let them see
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="thumb-content">
                <div className="thumb-title">{item.title.split(' ')[0]}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button className="prev" onClick={handlePrev}>&lt;</button>
          <button className="next" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramSlider;
