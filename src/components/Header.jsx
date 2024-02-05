import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
import "./Header.css";

function Header() {
    return(
        <div className="header-container">
            <img src={discordLogo} alt="Discord Logo" className="img-discord-logo"/>
            <img src={menuIcon} alt="Menu" className="img-menu"/>
        </div>
    )
}


export default Header;