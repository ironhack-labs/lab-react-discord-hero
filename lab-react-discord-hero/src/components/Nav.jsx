import logoDiscord from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"




function Nav(){


    return(
        <div id="navBar"> 
            <img  id="imgDiscord" src={logoDiscord} alt= "Discord" />
            <img id="imgMenu" src={menuIcon} alt= "Menu" width="200px" />
        </div>

    )
}
 export default Nav