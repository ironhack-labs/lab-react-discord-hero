import './NavBar.css'
import logo from './../images/discord-logo-white.png'
import hamburger from './../images/menu-icon.png'

const NavBar = () => {
    return (
        <header>
            <img src={logo} alt="logo" id="logo"/>
            <img src={hamburger} alt="menu" id="menu"/>
        </header>
    )
}
export default NavBar