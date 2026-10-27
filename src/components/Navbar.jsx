import DLogo from "../assets/discord-logo-white.png"
import MenuIcon from "../assets/menu-icon.png"


function Navbar() {
    return (
<div className="nav">
    <img src={DLogo} alt="Logo" />
    <img src={MenuIcon} alt="" />
</div>

    )
}

export default Navbar