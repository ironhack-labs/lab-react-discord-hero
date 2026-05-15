import dicordLogo from "/src/assets/images/discord-logo-white.png"
import menuIcon from "/src/assets/images/menu-icon.png"

function NavBar() {
    const Navbarstyle = {
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",            
        padding: "20px 40px",            
        width: "100%",                  
        boxSizing: "border-box"
    };

    
    return(
        <navbar className="navbar" style={Navbarstyle}>
            <img src={dicordLogo} alt="logotipo de discord" style={{ height: "20px" }}/>
            <img src={menuIcon} alt="icono del menu" style={{ height: "20px" }}/>
        </navbar>
    );
}
export default NavBar;