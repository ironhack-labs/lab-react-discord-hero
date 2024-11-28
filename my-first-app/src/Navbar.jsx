import './Navbar.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <img className="navbar-logo" src={discordLogo} alt="Discord logo" />
                <img className="navbar-menu" src={menuIcon} alt="Menu icon" />
            </nav>
        </div>
    );
}

export default Navbar;