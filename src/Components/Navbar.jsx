import logo from "../assets/discord.png"
import menuIcon from "../assets/menu-icon.png"
import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav>
            <img src={logo} alt="Discord Logo"/>
            <img src={menuIcon} alt="Menu Icon"/>
        </nav>
        </>
    )
}

export default Navbar;