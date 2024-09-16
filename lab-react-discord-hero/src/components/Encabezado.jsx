import imgLogo from "../assets/discord-logo-white.png"
import imgMenu from "../assets/menu-icon.png"

function Encabezado() {

    return(
        <>
        <div id="encabezado">
            <img id="logo" src={imgLogo} alt="logo" />
            <img id="menu" src={imgMenu} alt="menu" />

        </div>
        </>
    )
}

export default Encabezado;