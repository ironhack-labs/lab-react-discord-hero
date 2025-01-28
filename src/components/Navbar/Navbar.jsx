import hamburgerMenu from "../../assets/menu-icon.png";
import logo from "../../assets/discord-logo-white.png";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <img src={logo} id={"logo-id"} />
      </div>
      <div>
        <img src={hamburgerMenu} id={"logo-hamburger"} />
      </div>
    </nav>
  );
}

// export default NavBar
