import './header.css'
import logo from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt='discord' className='logo' />
        <nav><img src={menu} alt='menu' className='nav' /></nav>
    </header>
  );
}

export default Header
