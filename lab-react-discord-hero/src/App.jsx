import './App.css'
import discordPicture from './assets/discord-background.png'
import discordLogo from "./assets/discord-logo-white.png"
import menuIcon from "./assets/menu-icon.png"

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={discordLogo} alt="logo" />
        <img classname="logo" src={menuIcon} alt="menu" />
      </div>

      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide community....</p>
      <button>Download for Mac</button>
      <button>Open Discord in your browser</button>
      <img src={discordPicture} alt="Discord Image" ></img>
    </div>
  );
}

export default App;
