import React from "react";
import navImage1 from "../assets/discord-logo-white.png";
import navImage2 from "../assets/menu-icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navImage1} alt="discordlogo" class="discordlogo" />
      <img src={navImage2} alt="menuicon" class="menuicon" />
    </div>
  );
};
export default Navbar;
