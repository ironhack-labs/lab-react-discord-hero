import React from "react";
import "./button.css";

function Button({ text }) {
  return (
    <div className="button-div">
      <button className="button">{text}</button>
    </div>
  );
}

export default Button;
