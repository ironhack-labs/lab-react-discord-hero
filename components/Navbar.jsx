import "../src/App.css";

import discordLogo from "../src/assets/discord-logo-white.png";
import menuIcon from "../src/assets/menu-icon.png";


function Navbar() {
  return (
    <nav className="navbar">
    <img src={discordLogo} className="logo"  />
    <img src={menuIcon} className="menu-icon" />
    </nav>
  );
}

export default Navbar;