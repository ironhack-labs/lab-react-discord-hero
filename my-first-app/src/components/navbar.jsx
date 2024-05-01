import "../components/navbar.css"

import discordLogo from "../../images/discord-logo-white.png"
import menuIcon from "../../images/menu-icon.png"

function NavbarDiscord() {
    return (
        <nav className="navbar-discord">
            <a className="logo-discord" href="https://discord.com/" target="_blank">
                <img className="logo-discord" src={discordLogo} alt="discord logo" />
            </a>
            <img className="logo-menu" src={menuIcon} alt="menu icon" />
        </nav>
    );
}

export default NavbarDiscord;