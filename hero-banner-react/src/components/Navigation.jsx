import logo from "../assets/discord-logo-white.png"
import menu from "../assets/menu-icon.png"

function Navigation() {
  return (
    <nav className="navBar">
      <img className="logo" src={logo} alt="Logo" />
      <img className="menu" src={menu} alt="menu" />
    </nav>
  )
}

export default Navigation
