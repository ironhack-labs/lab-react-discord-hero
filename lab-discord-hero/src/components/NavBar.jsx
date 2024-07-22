import DiscordLogo from "../assets/discord-logo-white.png";
import DiscordMenu from "../assets/menu-icon.png";

function NavBar() {
    return(
        <div>
            <nav className="navbar">
                <img id="logo" src={DiscordLogo} alt="white discord logo" />
                <img id="menu" src={DiscordMenu} alt="white menu icon" />
            </nav>
        </div>
    )
}

export default NavBar;