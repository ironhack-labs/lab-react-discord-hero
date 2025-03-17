import discordLogo from "../assets/discord-logo-white.png";
import burgerIcon from "../assets/menu-icon.png"
export function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img className= "logo" src={discordLogo} />
      </div>
      <div>
        <img className="menu" src={burgerIcon} />
      </div>
    </nav>
  );
}
