import imgLogo from "../assets/discord-logo-white.png"
import imgMenu from "../assets/menu-icon.png"

function Navbar() {
  return (
    <nav id="navbar">
    
      <img src={imgLogo} alt="logo" className="logo"/>
      <img src={imgMenu} alt="menu" className="menu"/>
      
    </nav>
  )
}
export default Navbar
