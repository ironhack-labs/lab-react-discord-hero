import "./Nav.css";
import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

const Nav = () => {
  return (
    <div className="nav">
      <img src={discordLogo} alt="Discord Logo" className="logo" />
      <img src={menuIcon} alt="Menu Icon" className="menu" />
    </div>
  );
};

export default Nav;
