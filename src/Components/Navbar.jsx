import logo from "../assets/discord.png"
import menuIcon from "../assets/menu-icon.png"
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav>
                <img className = "logo" src={logo} alt="Discord Logo"/>
                <img className = "menu" src={menuIcon} alt="Menu Icon"/>
            </nav>
        </>
    )
}

export default Navbar;