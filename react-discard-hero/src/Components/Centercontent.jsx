import "./Centercontent.css"
import logo from "../assets/discord-background.png"

function Centercontent() {

    const divstyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: "100px",
        gap: "40px",
        color: "white",
        textAlign: "left",
        position: "relative",
        overflow: "hidden"
    }

    return (
        <div id="body">
            <div class="text">
                <h1 style={{fontFamily: "Poppins"}}>
                    IMAGINE A <br />PLACE...
                </h1>
                <p style={{fontFamily: "Roboto"}}>
                    ...where you can belong to a school club, a gaming group, or a <br />
                    worldwide art community. Where just you and a handful of <br />
                    friends can spend time together. A place that makes it easy to <br />
                    talk every day and hang out more often.
                </p>
                <button class="buttons">
                    Download for Mac
                </button>
                <button class="buttons" id="browser-button">
                    Open Discord in your browser
                </button>
            </div>
            <img 
                src={logo} 
                alt="Background" 
                id="image"
            />
        </div>
        
    )

}

export default Centercontent