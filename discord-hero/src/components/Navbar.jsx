import discordLogo from '../assets/discord-logo-white.png';
import burgerMenu from '../assets/menu-icon.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={discordLogo} alt="discord logo" />
      <img src={burgerMenu} alt="menu icon" />
    </div>
  );
};

export default Navbar;