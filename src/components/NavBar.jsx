import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'

function NavBar() {
 
    return (<header>
        <div>
            <img src={discordLogo} id="logo" alt="Discord logo" />
            <img src={menuIcon} id="menu-icon" alt="Menu icon" />
        </div>
    </header>);
}

export default NavBar;