import logo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <img className="menu-icon" src={menuIcon} alt="menu-icon" />
    </header>
  );
}

export default Header;
