import background from "../assets/discord-background.png"

function Hero() {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>IMAGINE A<br /> PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide atr community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className="buttons">
                <button className="btn white">Download for Mac</button>
                <button className="btn black">Open Discord in your browser</button>
            </div>
       </div>
       <div className="hero-image">
            <img src={background} alt="background image" />
       </div>
    </section>
  )
}

export default Hero