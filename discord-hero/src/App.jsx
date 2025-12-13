import './App.css'
import discord from "../src/assets/discord-logo-white.png"
import menu from "../src/assets/menu-icon.png"
import discordBackground from "../src/assets/discord-background.png"

function App() {


  return (
    <div className="app">
    <header>
      <img src={discord} alt="discord-logo" className="discord-logo"></img>
      <img src={menu} alt="menu icon" className="menu-icon" ></img>
    </header>
     <div className = "container">
      <h1>IMAGINE A PLACE...</h1>
      <p>...Where you can belong to a school club, a gaming group, or a <br/> worldwide art community. Where just you and a handful of <br/>friends can spend time together. A place that makes it easy to <br/> talk every day and hang out more often</p>
      <button className ="mac-btn"> Download for Mac
      </button>
      <br></br>
      <button className="discord-browser-btn">
Open Discord in your browser
      </button>
      <img src = {discordBackground} alt="discord background" className='discord-background'></img>
     </div>
    </div>
  )
}

export default App
