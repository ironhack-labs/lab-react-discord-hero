import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import logo from './assets/discord-logo-white.png'; 
import menuIcon from './assets/menu-icon.png'; 


function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
      <img src={logo} alt="Discord Logo" className="logo" />
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <main className="landing-main">
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a
           worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className="landing-buttons">
          <button className="btn-download">Download for Mac</button>
          <button className="btn-open">Open Discord in your browser</button>
        </div>
        <div className="landing-illustration">
          {/* Add your images or SVGs here */}
        </div>
      </main>
    </div>
  );
}

export default LandingPage;