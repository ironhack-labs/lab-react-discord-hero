import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/Icône de menu.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <img className="menu" src={menu} alt="menu" />
    </div>
  );
};

export default Navbar;
