import Discord from "../assets/discord-logo-white.png";
import Menu from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav>
      <img src={Discord} alt="discord_image" className="discord" />
      <img src={Menu} alt="menu-icon_image" className="menu" />
    </nav>
  );
}

export default Navbar;
