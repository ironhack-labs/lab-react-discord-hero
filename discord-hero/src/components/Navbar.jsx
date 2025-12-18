import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={discordLogo} alt="Discord logo" className="nav-logo" />
      <img src={menuIcon} alt="Menu icon" className="nav-menu" />
    </nav>
  );
}

export default Navbar;
