import Logo from '../assets/discord-logo-white.png'
import MenuIcon from '../assets/menu-icon.png'

function Navbar(){
    return(
        <nav> 
        <img className='logo' src={Logo} alt='logo_image'/>
        <img className='menu' src={MenuIcon} alt='menu_icon_image'/>
        </nav>
    )
}

export default Navbar;