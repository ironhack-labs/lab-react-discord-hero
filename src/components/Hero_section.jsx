import DiscordBackground from '../assets/discord-background.png'

export default function Hero_section() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <div className="button-container">
                    <button className="download-button">Download for Mac</button>
                    <button className="open-button">Open Discord in your browser</button>
                </div>
                <img className="background-image" src={DiscordBackground} alt='background_image' />
            </div>
        </div>
    )
}