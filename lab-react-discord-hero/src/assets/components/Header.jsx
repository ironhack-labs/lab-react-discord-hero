import Logo from "./Logo.jsx";
import MenuIcon from "./MenuIcon.jsx";

function Header() {
    return (
    <div>
        <MenuIcon image="/src/assets/images/menu-icon.png" />
        <Logo image="/src/assets/images/discord-logo.png" />
    </div>
    )
}


export default Header;