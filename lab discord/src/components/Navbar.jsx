import DiscordLogo from "../assets/discord.png";
import MenuIcon from "../assets/menu-icon.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={DiscordLogo} alt="discord"/>
            </div>
            <div className="menu">
                <img src={MenuIcon} alt="" />
            </div>

        </div>
    )
}