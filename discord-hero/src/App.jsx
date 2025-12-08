import './App.css'
import logo from "./assets/discord-logo-white.png"
import menu from "./assets/menu-icon.png"
import background from "./assets/discord-background.png"

function App() {

  return (
    <>
      <div className="App">
        <navbar className="navbar">
          <img src={logo} className="logo" alt="Discord logo"/>
          <img src={menu} className="menu" alt="menu icon"/>
        </navbar>

        <main>
          <h1>IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or 
            a worldwide art community. Where just you and a handful of friends
            can spend time together. A place that makes it easy to talk every 
            day and hang out more often.
          </p>
          <button className="btn-download">Download for Mac</button>
          <button className="btn-browser">Open Discord in your browser</button>
          <img src={background} className="background" alt="background image"/>
        </main>
      </div>
    </>
  )
}

export default App
