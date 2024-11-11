// src/components/Button.jsx
import React from "react";

function Button({ text, variant }) {
  const buttonClass = variant === "primary" ? "btn primary" : "btn secondary";

  return <button className={buttonClass}>{text}</button>;
}

export default Button;
