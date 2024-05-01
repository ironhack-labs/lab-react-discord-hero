import React from "react";

// las imagenes locales las tenemos que importar
//import dBackground from "../assets/discord-background.png"
import dLogo from "../assets/discord-logo-white.png";
import mIcon from "../assets/menu-icon.png";

function Navbar() {
  return (
    <div id="navBar">
      <img id="discordLogo" src={dLogo} />

      <img src={mIcon} width="50px" />
    </div>
  );
}

export default Navbar;
