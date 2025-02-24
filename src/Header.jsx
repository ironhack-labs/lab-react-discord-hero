import discodLogo from "./assets/discord-logo-white.png"
import menuIcon from "./assets/menu-icon.png"

function Header(){
    return(
        <section id="section-header">
            <img id="logo" src={discodLogo} alt="" width="250px"/>
            <img id="menu" src={menuIcon} alt=""  width="50px"/>
        </section>
    )
}

export default Header;