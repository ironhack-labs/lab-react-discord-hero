import discordLogo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';

function Navbar() {
  return (
      <div className="Navbar">
        <div className="Navbar__logo">
            <img className="Navbar__logo-img" src={discordLogo} alt="Logo"/>
        </div>
        <button className="Navbar__menu-button">
            <img className="Navbar__menu-button-img" src={menuIcon} alt="Menu"/>
        </button>
      </div>
  );
}

export default Navbar;