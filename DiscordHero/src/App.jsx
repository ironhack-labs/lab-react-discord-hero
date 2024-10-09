import './App.css'

function App() {
  return (
    <div className ="App">
      <nav className ="navbar">
        <img className = "discord-logo" src = "./src/assets/discord-logo-white.png"/>
        <img className = "menu-navbar-3-lines" src = "./src/assets/menu-icon.png" />
      </nav>
      <div className = "main-content-container">
        <h1 className = "eye-catcher-heading">IMAGINE A PLACE...</h1>
        <p className = "eye-catcher-long-text">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button className = "mac-download-button">Download for Mac</button>
        <button className = "open-in-browser-button">Open Discord in your browser</button>
      </div>
      <img className ="background-picture" src= "./src/assets/discord-background.png"/>
    </div>
  )
}

export default App
