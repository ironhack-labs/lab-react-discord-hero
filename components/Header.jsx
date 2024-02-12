import logo from "../Discord-react/src/assets/discord-logo-white.png"
import menu from "../Discord-react/src/assets/menu-icon.png"

function Header() {
    return(
        <nav>
            <img id="logo" src = {logo} alt="logo" />
            <img id="menu" src = {menu} alt="menu" />
        </nav>
    )
}

export default Header