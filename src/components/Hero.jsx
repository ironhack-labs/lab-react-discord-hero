import Button from "./Button";
import bgImg from "../assets/discord-background.png"

export default function Hero() {
  return (
    <div className="heroBody">
        <h1>Imagine a place...</h1>
        <p>... where you can belong to a school club, a gaming group or a worldwide art community.
            Where just you and a handful of friends can spend time together. A place that makes it easy to talk
            every day and hang out more often.
        </p>
        

        <div className="bottom">
            <div className="btn">
                <Button text="Download for Mac" customClass="download"/>
                <Button text="Open Discord in your browser" customClass="openInBrowser"/>
            </div>
            <img src={bgImg}  />
        </div>
    </div>
  )
}