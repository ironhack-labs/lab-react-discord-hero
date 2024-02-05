import logo from "../assets/discord-logo-white.png"
import menu from "../assets/menu-icon.png"

function Navbar() {
    return (
        <div class="navbar">
            <img src={logo} alt={"logo"} id="logo-img"/>
            <img src={menu} alt={"menu"} id="menu-img"/>
        </div>
    )
}

export default Navbar;