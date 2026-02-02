import './navbar.css';
import icon from '../assets/discord-logo-white.png';
import menu from '../assets/menu-icon.png';
function Navbar() {
  return (
    <nav>
      <img className="logo" src={icon} alt="discord icon" />
      <img className="menu" src={menu} alt="bruger menu" />
    </nav>
  );
}
export default Navbar;
