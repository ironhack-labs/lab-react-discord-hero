import logo from "./assets/discord-logo-white.png"
import Menu from "./menu.jsx"

const style = {
    width: "200px",
    display: "flex",
    justifyContent: "space-between"

}

function Logo () {

    return (
        <div>
            <img style={style}src={logo} alt="logo-discord" />
            <Menu />

        </div>
    )
}

export default Logo