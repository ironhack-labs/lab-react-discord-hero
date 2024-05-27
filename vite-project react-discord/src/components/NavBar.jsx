import discLogo from "../assets/discord-logo-white.png"
import menuImg from "../assets/menu-icon.png"

const NavBar = () => {
  return (
    <div className="navbar">
        <img src={discLogo} alt="discord logo" className="imgNav"/>
        <img src={menuImg} alt="menu logo" className="imgNav"/>
    </div>
  )
}

export default NavBar