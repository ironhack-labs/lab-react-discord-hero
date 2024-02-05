// ? styles
import "./Header.css";

// ? assets
import iconLogo from "./../../assets/discord-logo-white.png";
import iconMenu from "./../../assets/menu-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={iconLogo} alt="logo-discord" />
      <img className="header__menu" src={iconMenu} alt="menu-icon" />
    </header>
  );
}
