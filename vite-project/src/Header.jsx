import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import './Header.css'
function Header() {
return (
<header id="nav">
        <div className='logo'><img src={discordLogo} alt="discordLogo"/></div>
        <div className='menu-button'><img src={menuIcon} alt="menuIcon"/></div>
      </header>
)
}
export default Header;