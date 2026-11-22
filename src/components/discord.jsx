function Discord (corps) {
    return <div className="discord">
        <div className="navBar">

            <img src="./src/assets/discord-logo-white.png" />
            <img src="./src/assets/menu-icon.png" />
        
        </div>
        <div className="text">
            <h1> IMAGINE A <br />PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        </div>

        <div className="buttons">
            <button type="button" className="download"> Download for Mac</button>
            <button type="button" className="open"> Open Discord in your browser </button>
        </div>

        <img className="discordBackground" src="./src/assets/discord-background.png" />
       
    </div>
}

export default Discord