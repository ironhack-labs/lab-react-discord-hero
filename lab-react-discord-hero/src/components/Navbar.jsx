import logo from "../assets/discord-logo-white.png";
import menu from "../assets/menu-icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" style={{ height: "80%" }} />
      <img src={menu} alt="menu" style={{ height: "80%" }} />
    </div>
  );
};
export default Navbar;