import imgDiscord from "../assets/images/discord-logo-white.png";
import imgMenuIcon from "../assets/images/menu-icon.png";

function Header() {
  return (
    <>
      <img id="logo" src={imgDiscord} alt="Discord Logo" height="25px"  />
      <img id="menu" src={imgMenuIcon} alt="Menu Icon" height= "50px" />
    </>
  );
}
export default Header