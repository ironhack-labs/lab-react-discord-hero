import imageOne from './assets/discord-logo-white.png'
import imageTwo from './assets/menu-icon.png'

function NavBar(){
    const widthOne = 100;
    const widthTwo = 30;

    return(
        <div className="navBar">
            <img className="img" src={imageOne} alt="discord" width={widthOne}></img>
            <img className="img" src={imageTwo} alt="menu" width={widthTwo}></img>
        </div>
    );
}

export default NavBar