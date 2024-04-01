import React from 'react';
import './HeroSection.css'; // Import CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Discord</h1>
        <p>Your place to talk and hang out</p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/path/to/hero-image.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;