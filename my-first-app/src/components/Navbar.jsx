import "./Navbar.css"
import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"


function Navbar() {
  return (
    <nav className="navbar">
    <img src={discordLogo} className="logo" alt="Discord logo" />
    <img src={menuIcon} className="menu-icon" alt="Menu icon" />
    </nav>
  );
}

export default Navbar;