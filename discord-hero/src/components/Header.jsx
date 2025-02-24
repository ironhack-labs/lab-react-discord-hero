import discordLogo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';

function Header() {
    return (
        <header className="header">
            <img id="discord-logo" src={discordLogo} alt="Discord Logo" />
            <img id="menu-icon" src={menuIcon} alt="Menu Icon" />
        </header>
    );
}

export default Header;
