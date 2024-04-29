import logoDiscord from "../assets/discord-logo.png"
import menuIcon from "../assets/menu-icon.png"

function Nav() {
    return(
        <nav>
            <img src={logoDiscord} alt="Discord logo" width = "150px"/>
            <img src={menuIcon} alt="menu icon" width = "32px"/>
        </nav>
    )
}

export default Nav