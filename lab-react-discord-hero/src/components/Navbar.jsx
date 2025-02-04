//import './Navbar.css'

import Logo from '../assets/discord-logo-white.png'
import MenuIcon from '../assets/menu-icon.png'

export default function Navbar() {
  return (
    <nav>
      <img className='logo' src={Logo} alt='Logo Icon' />
      <img className='menu' src={MenuIcon} alt='Menu Icon' />
    </nav>
  );
}

