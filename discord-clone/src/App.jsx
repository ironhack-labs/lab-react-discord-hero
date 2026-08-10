
import './Index.css';
import discordLogo from './assets/discord-logo-white.png'
import heroImage from './assets/discord-background.png'

function App() {
return (
  <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={discordLogo} alt="Discord logo" className="logo" />
          <span className="brand-name">Discord</span>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      </div>

)
  

}

export default App
