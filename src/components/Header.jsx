import logoImage from "../assets/discord-logo-white.png";
import menuImage from "../assets/menu-icon.png";

function Header() {
  return (
    <header>
      <img src={logoImage} alt="Logo" id="logo" />
      <img src={menuImage} alt="Menu" id="menu" />
    </header>
  );
}

export default Header;