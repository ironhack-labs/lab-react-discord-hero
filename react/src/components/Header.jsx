import logoDiscord from "../assets/logo-discord.png";
import menuIcon from "../assets/menu-discord.png";

function Header() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "25px",
  };

  return (
    <div style={divStyle}>
      <img src={logoDiscord} width="120px" alt="logo-discord" />
      <img src={menuIcon} width="30px" height="25px" alt="menu-icon" />
    </div>
  );
}

export default Header;
