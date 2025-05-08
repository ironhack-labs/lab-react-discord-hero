import menuIcon from "../assets/menu-icon.png"
import discordLogo from "../assets/discord-logo-white.png"

export function NavBar () {
    return (
        <nav className="nav-bar">
            <img id="logo" src={discordLogo} alt="discord-logo" />   
            <img id="menu" src={menuIcon} alt="menu-icon" />
        </nav>
    )
}