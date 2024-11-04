import "./Section.css"
import WhiteButton from "../Buttons/WhiteButton/WhiteButton"
import BlackButton from "../Buttons/BlackButton/BlackButton"

const Section = () => {
    return (
        <div className="Section">
            <h1>IMAGINE A PLACE...</h1>
            <p>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend tim e together. A place that makes it easy to talk every day and hang oput more often.</p>
            <WhiteButton text={"Download for Mac"} />
            <BlackButton text={"Open Discord in your browser"} />
        </div>
    )
}

export default Section