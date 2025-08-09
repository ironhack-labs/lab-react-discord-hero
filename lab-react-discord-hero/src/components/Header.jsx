import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"


function Header() {
  return (
    <div className="header">
        <img className="logo" src={discordLogo} alt="Discord Logo" />
        <img className="menuIcon" src={menuIcon} alt="Menu icon" />
    </div>
  )
}

export default Header
