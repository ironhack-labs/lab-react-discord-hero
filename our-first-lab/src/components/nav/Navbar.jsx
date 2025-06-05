import logo from "../../assets/images/discord-logo-white.png"
import hamburger from "../../assets/images/menu-icon.png"
import "./styles.css"

const Navbar = () => {
  return (
    <div className="nav-container">
        <img id="logo" src={logo} alt="discord-logo-white" />
        <img id="hamburger" src={hamburger} alt="menu-icon" />
    </div>
  )
}
export default Navbar