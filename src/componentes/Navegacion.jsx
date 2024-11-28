import imgLogo from "../assets/discord-logo-white.png";
import imgMenu from "../assets/menu-icon.png";

function Navegacion() {
  
  return (
    <>
      <div id="navegacion">
        <img id="logo"  src={imgLogo} alt="logo" />
        <img id="menu" src={imgMenu} alt="menu" />
    </div>
    
    </>
  );
}

export default Navegacion


