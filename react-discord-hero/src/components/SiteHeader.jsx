import discordlogo from '../assets/discord-logo-white.png';
import menu from '../assets/menu-icon.png';
import '../App.css';

export function Navbar() {
  return (
    <div className="navbar">
      <img src={discordlogo} alt="Discord Logo" className="discordlogo" />
      <img src={menu} alt="Menu Icon" className="menuicon" />
    </div>
  );
}
