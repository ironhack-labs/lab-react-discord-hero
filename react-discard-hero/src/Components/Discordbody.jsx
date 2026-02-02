import logo from "../assets/discord-background.png"
import Centercontent from "./Centercontent"
import Topbar from "./Topbar"

function Discordbody() {
    
    const backgroundStyle = {
        backgroundColor: "#404EED",
        width: "100vw",
        height: "100vh",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    return (
        <div style={backgroundStyle}>
            <Topbar/>
            <Centercontent/>
            
        </div>
    )

}

export default Discordbody