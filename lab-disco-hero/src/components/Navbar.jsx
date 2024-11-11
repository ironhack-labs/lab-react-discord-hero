import React from "react";
import navImage1 from "../assets/discord-logo-white.png";
import navImage2 from "../assets/menu-icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navImage1} alt="Logo-icon" id="logo" />
  
      <img src={navImage2} alt="Menu-icon" id= "menu"/>
     
    </div>
  );
};
export default Navbar;
