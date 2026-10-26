import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png';

function Navigation () {
    return(
    <nav>
        <img src={discordLogo} alt="Discord logo" className="discord-logo"  />
        <img src={menuIcon} alt="Open menu" />
      </nav>
      )
}
export default Navigation