import discordImg from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function Nav() {

    return(
        <nav>
          <img id="discord" src={discordImg} alt="discord"></img>
          <img id="menu" src={menuIcon} alt="menu-icon"></img>
        </nav>
    )

}

export default Nav