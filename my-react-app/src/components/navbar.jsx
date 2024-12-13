import Logo from "../assets/discord-logo-white.png";
import Menu from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo_image" />
      <img className="menu-icon" src={Menu} alt="menu_icon" />
    </nav>
  );
}
export default Navbar;
