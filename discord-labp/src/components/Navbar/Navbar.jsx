import Logo from '../../assets/discord-logo-white.png'
import Menu from '../../assets/menu-icon.png'
import '../../components/Navbar/Navbar.css'

function Navbar(){
    return(
        <nav className='nav-container'>
            <img src={Logo} alt='logo_image'  className='logo'/>
            <img src={Menu} alt='menu_icon'  className='menu'/>
        </nav>
    )
}

export default Navbar;
