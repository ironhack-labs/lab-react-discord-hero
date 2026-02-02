import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

function Header() {
  return (
    <header className="hero-header">
      <img src={discordLogo} className="logo" alt="Discord logo" />
      <img src={menuIcon} className="menu" alt="Menu icon" />
    </header>
  );
}

export default Header;
