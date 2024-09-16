import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function Navbar() {

  return (
    <div id="navbar">
      <img src={discordLogo} alt="Discord logo" id="discord-logo" />
      <img src={menuIcon} alt="Menu Icon" id="menu-icon" />
    </div>
  )
}

export default Navbar