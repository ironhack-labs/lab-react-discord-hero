import menuIcon from "../assets/menu-icon.png"
import discordLogo from "../assets/discord-logo-white.png"

function Nav() {

    return (
        <nav class="nav-bar">
          <img src={discordLogo} alt="logo"/>
          <img src={menuIcon} alt="menu"/>
        </nav>
    )

}

export default Nav