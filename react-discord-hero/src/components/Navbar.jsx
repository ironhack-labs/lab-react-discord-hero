import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'


function Navbar(){
    return(
        <>
        <nav>
            <img className="discord-logo" src={discordLogo} alt="Discord logo" />
            <img id="menu-icon" src={menuIcon} alt="Menu icon" />
        </nav>
        </>
    )
}

export default Navbar