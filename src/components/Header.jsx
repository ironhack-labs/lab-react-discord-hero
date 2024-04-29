import imgBg from "../assets/discord-background.png"

function Header() {
    return (
        <header>
            <div>
            <h1>IMAGINE A PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <button id="btnMac">Download for Mac</button>
            <button id="btnBrowser">Open Discord in your browser</button>
            </div>
            
            <img src={imgBg} alt="Discord background" />
        </header>
    )
}

export default Header