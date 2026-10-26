import logo from "/src/assets/discord.png";
import menu from "/src/assets/menu.png";

const HeaderStyles = {
    display: "flex",
    justifyContent: "space-between"
}

function Header (){
    return (
        <header style={HeaderStyles}>
            <img src={logo} alt="Discord Logo" height="30px" />
            <img src={menu} alt="Menu icon" height="30px" />
        </header>        
    );
}

export default Header;