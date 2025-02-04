import logo from '../assets/discord-logo-white.png'
import menu from '../assets/menu-icon.png'

function Header(){
    return (
      <div className="header">
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <nav className='nav'>
          <img src={menu} alt="menu" />
        </nav>
      </div>
    );
}

export default Header;