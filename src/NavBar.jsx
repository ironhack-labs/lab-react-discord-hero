import FotosNavBar from "./FotosNavBar";
import './NavBar.css'

function NavBar() {
  return (
    <div id="navBar">
      <FotosNavBar src="./public/discord.png" h="200px" w ="200px"/>
      <FotosNavBar src="./public/menu-icon.png" h="60px" w ="60px"/>
    </div>
  );
}

export default NavBar;