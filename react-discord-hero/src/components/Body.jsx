import band from "../assets/discord-background.png"

function Body() {
    return (
        <div id="body">
            <h1>IMAGINE A PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div>
                <button id="white-button" class="buttons">Download for Mac</button>
                <button id="black-button" class="buttons">Open Discord in your browser</button>
            </div>
            <img src={band} alt="band" id="band-img"/>
        </div>
    )
}

export default Body;