import './Header.css'
import discordLogo from './../../assets/discord-logo-white.png'
import menuIcon from './../../assets/menu-icon.png'

function Header() {
    return (
        <header className='Navbar'>
            <img src={discordLogo} className='discLogo' alt="discord-logo" />
            <img src={menuIcon} className='menuIcon' alt="menu-icon" />
        </header>
    )
}

export default Header