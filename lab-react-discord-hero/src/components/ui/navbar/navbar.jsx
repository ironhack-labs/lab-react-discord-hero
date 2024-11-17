import Logo from '../../../assets/discord-logo-white.png'
import Menu from '../../../assets/menu-icon.png'
import './navbar.css'

function NavBar () {

    return (
        <div className="navbar">
          <img className= "logo" src={Logo} alt="discord-logo" />
          <img className= "menu" src={Menu} alt="menu-icon" />
        </div>
    );
}

export default NavBar;