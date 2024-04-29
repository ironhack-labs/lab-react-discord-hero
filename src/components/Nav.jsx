import imgD from '../assets/discord-logo-white.png'
import imgMenu from '../assets/menu-icon.png'

function Nav(){
    return(
        <nav id="nav-main">
            <img id="logo-discord" src={imgD} alt="logo-discord" />
            <img id="icono-menu" src={imgMenu} alt="icono-menu" />
        </nav>
    )
}
export default Nav