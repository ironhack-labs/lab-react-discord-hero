import "./Header.css";


import logo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

 function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo-discord" />
      <img className="header__menu" src={menuIcon} alt="menu-icon" />
    </header>
  );
}   

export default Header;