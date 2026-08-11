import logo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

const NavBar = () => {
  return (
    <div className="navbar">
        <img src={logo} height={50} width={200}/>
        <img src={menuIcon} />
    </div>
  );
};

export default NavBar