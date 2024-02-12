import image from "../Discord-react/src/assets/discord-background.png"

function Buttons() {

    return (
        <div id="buttons">
<button id="button-first">Download for Mac</button>
<button id="button-second">Open Discord in your browser</button>
<img id="background-image" src={image} alt="background-image" />
        </div>


    )
}

export default Buttons