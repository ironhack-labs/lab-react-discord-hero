import discordLogo from "../assets/discord-logo-white.png";
import discordMenu from "../assets/menu-icon.png";

function Header() {

    return(
        <div id="header-nav">
            <img src={discordLogo} alt="discord logo" />
            <img src={discordMenu} alt="discord menu" />
        </div>
    );

}

export default Header;