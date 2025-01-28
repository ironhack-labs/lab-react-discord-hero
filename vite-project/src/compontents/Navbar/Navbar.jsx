import hamburgerIcon from '../../assets/menu-icon.png'
import "./Navbar.css"
import discordLogo from "../../assets/discord-logo-white.png"

export default function Navbar() {
    return (
      <nav class= {"navbar"}>
        <img src={discordLogo} id={"logo-id"} alt="" />
        <img src={hamburgerIcon} id={"hamburger-id"} alt="" />
      </nav>
    );
    
}


