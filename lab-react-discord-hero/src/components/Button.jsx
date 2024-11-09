// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ text }) => {
  return <button className="cta-button">{text}</button>;
};

export default Button;
