import './navbar.css'
import discordLogo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={discordLogo} alt="Discord Logo" />
            <img src={menuIcon} alt="Menu Icon" />
        </div>
    )
}

export default Navbar;