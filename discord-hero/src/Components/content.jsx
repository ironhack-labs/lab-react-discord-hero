import bgImage from "../assets/discord-background.png"
const Content = () => {
    return (
        <div className="container">
            <div className="content-left">
            <h1> IMAGINE A PLACE... </h1>
            <p> ...where you can belong to a school club, a gaming group, or a worldwide art community.
                Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and handout 
                more often. </p>
            <div className="action-buttons">
                <button className="download"> Download for Mac </button>
                <button className="urlLink"> Open Discord in your browser </button>
            </div>
            </div>
            <img className="bg-image "src={bgImage} width="30%" height="10%"/>
        </div>
    )
}

export default Content