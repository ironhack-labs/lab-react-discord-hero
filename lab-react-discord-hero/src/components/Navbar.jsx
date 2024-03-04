import img from "../assets/discord-logo-white.png";
import img2 from "../assets/menu-icon.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={img} alt="Discord Logo" />
      <img id="menu-icon" src={img2} alt="Menu Icon" />
    </div>
  );
};
