import Logo from "./Logo.jsx";
import MenuIcon from "./MenuIcon.jsx";

function Header() {
    return (
    <div className="header">
        <Logo image="/src/assets/images/discord-logo.png" />
        <MenuIcon image="/src/assets/images/menu-icon.png" />
    </div>
    )
}


export default Header;