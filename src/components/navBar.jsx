import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
import "../components/navBar.css";

function NavBar() {
  return (
    <nav>
      <img src={discordLogo} alt="discord-logo" id="discord-logo" />
      <img src={menuIcon} alt="menu-icon" id="menu-icon" />
    </nav>
  );
}

export default NavBar;
