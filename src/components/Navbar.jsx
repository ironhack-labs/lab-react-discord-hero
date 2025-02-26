import logo from "../assets/discord-logo-white.png"
import menu from "../assets/menu-icon.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="navLogo"></img>
      <img src={menu} className="navMenu"></img>
    </div>
  )
}