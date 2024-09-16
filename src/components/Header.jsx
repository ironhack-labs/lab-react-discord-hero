import imgLogo from "../assets/discord-logo.png"
import imgMenuIcon from "../assets/menu-icon.png"

function Header() {
  return(
    <header className="header">
      <img src={imgLogo} alt="discord logo" id="discord-logo"/>
      <img src={imgMenuIcon} alt="discord logo" id="menu-icon"/>
    </header>
  )
}

export default Header;