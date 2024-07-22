
import DiscordImg from "../assets/discord-background.png";

function LandingPage() {
    return (
        <div>
            <section className="main">
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <button id="download-mac">Download for Mac</button>
                <button id="open-in-browser">Open Discord in your browser</button>
            </section>
            <img id="background-image" src={DiscordImg} alt="discord background image" />
        </div>
    )
}

export default LandingPage;