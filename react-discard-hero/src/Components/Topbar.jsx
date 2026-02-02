import logo from "../assets/discord-logo-white.png"
import menu from "../assets/menu-icon.png"
import "./Topbar.css"

function Topbar() {

    return(
        <section id="top-bar">
            <img src={logo} alt="Logo" id="discord-image" />
            <img src={menu} alt="Menu" />
        </section>
    )

}

export default Topbar