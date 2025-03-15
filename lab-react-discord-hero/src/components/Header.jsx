import discordLogo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';

export function Header() {
   return (
    <div className="header">
    <img src={discordLogo} alt="logo" className='logo' />
    <img src={menuIcon} alt="menu" className='menu'/>
    </div>
    );
  }
