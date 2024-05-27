import React from "react";
import logo from "../assets/discord-logo-white.png";
import logo2 from "../assets/menu-icon.png";

const Navbar = () => {
  return (
    
      <div className="navbar">
        <img id="discord-logo" src={logo} alt="discord logo" />
        <img id="menu-icon" src={logo2} alt="dropdown-menu" />
      </div>
    
  );
};

export default Navbar;
