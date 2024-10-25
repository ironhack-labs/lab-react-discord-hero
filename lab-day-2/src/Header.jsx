import discordImage from "./assets/discord-logo-white.png";
import menuImage from "./assets/menu-icon.png";

function Header() {
  return (
    <div className="header">
      <img src={discordImage} alt="Discord Logo" className="discordLogo" />
      <img src={menuImage} alt="Menu Icon" className="menuIcon" />
    </div>
  );
}

export default Header;
