import './Section.css';
import Button from "./Button.jsx";

function Section() {
    return(
        <div>
            <h1 className="heading">IMAGINE A PLACE...</h1>
            <br />
            <p className="paragraph">...where you can belong to a school club, a gaming group, oor a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <Button text="Download for Mac" color="white"/>
            <Button text="Open Discord in  your Browser" color="black"/>
        </div>
    )
}

export default Section;