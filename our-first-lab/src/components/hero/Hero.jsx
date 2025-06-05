import "./styles.css"
import dbi from "../../assets/images/discord-background.png"

const Hero = () => {
  return (
    <div  className="hero-section">
        <h1>IMAGINE A  PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div id="btn-container">
            <button id="btn1">Download for Mac</button>
            <button id="btn2">Open Discord in your browser</button>
        </div>
<img id="bgImage" src={dbi} alt="discord-background" />
    </div>
  )
}
export default Hero