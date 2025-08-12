import discordBg from '../assets/discord-background.png'

function Hero(){
    return(
        <section className="hero">
            <div className="hero__content">
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend tiem together. A place that makes it easy to talk ever day and hang out more often.</p>
                <div className="hero__buttons">
                    <button className="btn btn-mac">Download for Mac</button>
                    <button className="btn btn-browser">Open Discord in your browser</button>
                </div>
            </div>
            <img src={discordBg} alt="Discord image" />
        </section>
    );
}

export default Hero