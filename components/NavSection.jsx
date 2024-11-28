import logo from "../src/assets/discord-logo-white.png"
import menu from "../src/assets/menu-icon.png"

function NavSection() {
  return (
    <div id='nav'>
      <img id="logo" src={logo} alt="logo" />
      <img id="menu" src={menu} alt="menu" />
    </div>
  )
}

export default NavSection