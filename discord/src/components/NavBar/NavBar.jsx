import logo from './../../assets/discord-logo-white.png'
import menuIcon from './../../assets/menu-icon.png'
import './../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <header className='NavBar'>
            <img className='logoDisc' src={logo} alt="Discord logo" />
            <img className='icon' src={menuIcon} alt="menu icon" />
        </header>
    )

}
export default NavBar