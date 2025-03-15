import navImage1 from "../assets/discord-logo-white.png";
import navImage2 from "../assets/menu-icon.png";

export function Navbar(){

  return (
    <div className="navbar">
      <img src={navImage1} alt="discordlogo" className="discordlogo" /> 
      <img src={navImage2} alt="menuicon" className="menuicon" />  
    </div>
  );
};

