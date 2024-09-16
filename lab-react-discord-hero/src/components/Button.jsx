import mainLogo from "../assets/discord-background.png"


function Button() {
    
    return(
        <section>
        <div id="buttons">
            <button id="firstButton">Download for Mac </button>
            <button id="secondButton">Open Discord in your browser</button>
        </div>
        <div>
            <img id="imgMainLogo" src={mainLogo} alt="logo principal" />
        </div>
        </section>

    )
}

export default Button
