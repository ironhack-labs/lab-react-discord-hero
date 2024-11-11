import './hero.css';
import discordBackground from './assets/discord-background.png'

function Hero() {

    return(
        <div className="Hero">
            <div className='container'>
                <h1>Imagine a place...</h1>
                <p>...where you can belong to a school club a gaming group, or a worldwode art community. Where just you and a handful of friends can spend time rogether. A place that makes it easy to talk every day and hang out more often.
                </p>
                <div>
                    <button>Download for Mac</button>
                    <button className='dark'>Open Discord in your browser</button>
                </div>
            </div>
            <img src={discordBackground} alt="Discord Background" className='hero-image'/>
        </div>
    )
}

export default Hero;