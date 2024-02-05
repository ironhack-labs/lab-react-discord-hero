import './NavBar.css'
import logo from './../../assets/discord-logo.png'
import menu from './../../assets/menu-icon.png'

const NavBar = () => {

    return (
        <header className='NavBar'>
            <img className='logo-img' src={logo} alt="Logo" />
            <img className='menu-img' src={menu} alt="Menu-Icon" />
        </header>
    )

}

export default NavBar