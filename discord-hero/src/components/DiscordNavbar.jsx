import discordLogo from "../assets/discord-logo-white.png";
import hamburgerMenu from "../assets/menu-icon.png";

function DiscordNavbar() {
  return (
    <div id="navbar">
      <ul>
        {/* <li><img src="/src/assets/discord-logo-white.png" alt="White Discord log" /></li> */}
        <li>
          <img src={discordLogo} alt="White Discord logo" id="discord-logo" />
        </li>
        <li>
          <img src={hamburgerMenu} alt="Menu icon" id="menu-icon" />
        </li>
      </ul>
    </div>
  );
}

export default DiscordNavbar;
