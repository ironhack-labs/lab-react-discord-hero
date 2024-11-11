import React from "react";
import discordLogo from "../assets/DiscordLogoWhite.png";
import menu from "../assets/MenuIcon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={discordLogo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
};

export default Navbar;
