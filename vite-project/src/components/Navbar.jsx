import React from "react";
import Logo from "../assets/discord-logo-white.png";
import Burger from "../assets/menu-icon.png";
export const Navbar = () => {
  return (
    <>
      <img src={Logo} alt="logo" />
      <img src={Burger} alt="burger-menu" />
    </>
    // <>
    //   <Logo />
    //   <Burger />
    // </>
  );
};
