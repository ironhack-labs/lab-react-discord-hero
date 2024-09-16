import logoDiscord from "./assets/discord-logo-white.png"
import hamburguesa from "./assets/menu-icon.png"

function Header(){
    return(
        <div className = "navegador">
            <img src = {logoDiscord} alt="Logo Discord" className="logoDiscord"/>
            <img src= {hamburguesa} alt="Icono de menu" className="logoMenu"/>
        </div>
    )
}
export default Header