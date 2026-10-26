
import discordLogoWhite from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

function Navbar(){

return (
    <>
    <nav className="navbar">
<img src={discordLogoWhite}></img>
<img id='right'src={menuIcon}></img>
</nav>
 </>   
)
}


export default Navbar