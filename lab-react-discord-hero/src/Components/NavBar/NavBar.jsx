import './NavBar.css'
import logo from './../../assets/discord-logo.png'
import icon from './../../assets/menu-icon.png'

const NavBar = () => {
    return (
        <header className='NavBar'>
            <img src={logo} alt="logo" />
            <img src={icon} alt="menu icon" />
        </header>
    )
}

export default NavBar