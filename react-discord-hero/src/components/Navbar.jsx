import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function Navbar() {

    return(
        <nav className="nav-bar">
            <img src={discordLogo} width="130px" />
            <img src={menuIcon} width="30px" />
        </nav>
    ) 
}

export default Navbar