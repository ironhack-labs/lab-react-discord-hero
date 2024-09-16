import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function NavBar() {

  return (
    <div id="nav-bar">
      <img src= {discordLogo} id="discord-logo" alt="discord-logo" />
      <img src= {menuIcon} id="menu-icon" alt="menu-icon" />
    </div>
  )

}

export default NavBar