import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <div className="Header-content">
                <h1>IMAGINE A PLACE...</h1>
                <p>
                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                </p>
                <div className="buttons">
                    <button className="download-btn">Download for Mac</button>
                    <button className="browser-btn">Open Discord in your browser</button>
                </div>
            </div>
            <div className="illustration">
                <img src="src/assets/discord-background.png" alt="DiscordIllustration" />
            </div>
        </div>
    )
}

export default Header