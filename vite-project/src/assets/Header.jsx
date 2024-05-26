import discordLogo from "./images/discord-logo-white.png";
import icon from "./images/menu-icon.png";


function Header(){

    return(

    <>
    <div className="header">
<header >
  <img className="discordlogo" src={discordLogo} alt="discordlogo" />
  <img className="icon" src={icon} alt="icon" />
</header>
</div>
    </>
    
    );
}

export default Header;