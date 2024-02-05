import logo from './../../assets/discord-logo-white.png'
import icon from './../../assets/menu-icon.png'
import './NavBar.css'
const NavBar = () => {

    return (
        <header className="NavBar">
            <img src={logo} alt="logo" />
            <img src={icon} alt="icon" />

        </header>
    )
}
export default NavBar