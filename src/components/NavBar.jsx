import logo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'
import '../App.css';
import '../index.css';

export default function NavBar() {
  return (
    <ul className='navbarContainer'>
      <li className='logo'><img src={logo} alt="" /></li>
      <li className='logo'><img src={menuIcon} alt="" /></li>
    </ul>
  )
}
