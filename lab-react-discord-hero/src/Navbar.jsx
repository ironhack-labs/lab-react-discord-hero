import DiscordLogo from "./assets/discord-logo-white.png"
import MenuIcon from "./assets/menu-icon.png"
import "./Navbar.css"

function Navbar(){
  return(
    <div id = "navbar">
      <img className = "navBarImg" src= {DiscordLogo} />
      <img  src= {MenuIcon} />
    </div>
  )
}

export default Navbar;