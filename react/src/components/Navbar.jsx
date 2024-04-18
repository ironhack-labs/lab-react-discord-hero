import logo from "../assets/discord-logo-white.png";
import menuicon from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav>
      <img id="nav-img" src={logo} alt="discord-logo"></img>
      <img id="menu-icon" src={menuicon} alt="discord-icon"></img>
    </nav>
  );
}

export default Navbar;
