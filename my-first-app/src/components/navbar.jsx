import "./navbar.css"
import logo from "../assets/discord-logo-white.png"
import menu from "../assets/menu-icon.png"

function NavBar () {
  return (
    <div className="navbar">
      <img className="logo" src={logo}></img>
      <img className="menu" src={menu}></img>
    </div>
  )
}

export default NavBar