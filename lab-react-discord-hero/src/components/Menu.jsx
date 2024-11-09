// src/components/Menu.jsx
import React from 'react';.
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#join">Join Us</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
