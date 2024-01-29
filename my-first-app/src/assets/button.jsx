import React from "react";
import './button.css'

function Button ({ content, className }) {
  return (
    <button className={`button ${className}`}>{content}</button>
  );
};

export default Button;