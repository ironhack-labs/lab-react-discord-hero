import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function Navbar() {
  return (
    <div className="nav-bar">
        <img src={discordLogo} alt="discord logo white" className="discord-logo"/>
        <img src={menuIcon} alt="menu icon" className="menu-icon"/>
    </div>
  )
}

export default Navbar