import navImg from "../assets/discord-logo-white.png";
import menuImg from "../assets/menu-icon.png";

export default function Navbar() {
  return (
    <nav>
      <img id="nav-img" src={navImg} alt="logo" />
      <img id="nav-menu" src={menuImg} alt="men-logo" />
    </nav>
  );
}
