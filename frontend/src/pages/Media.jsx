import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Media.css';

const Media = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Events', 'Education', 'Healthcare', 'Workshops', 'Impact'];

  const images = [];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="media-page">
      {/* Hero Section */}
      <div className="media-hero">
        <div className="hero-content-box">
          <h1>Every Smile Tells a <span>Story of Hope</span></h1>
          <p>
            Documenting the moments of joy and transformation that define our mission. Each photograph captures a dream in the making.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="gallery-container">
        {/* The Grid */}
        <div className="media-grid">
          {filteredImages.map((img) => (
            <div key={img.id} className="media-card photo-only">
              <div className="card-image-box">
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <img src={img.src} alt={img.title} style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
                </a>
                <span className="category-tag">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Media;
