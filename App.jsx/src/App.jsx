import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuLogo from "./assets/menu-icon.png";

import './App.css';

function App() {
  return (
    <div className="App">
    <img className='background' src={discordBackground} alt="background" />
    <img className='logo' src={discordLogo} alt="logo" />
    <img className="menu" src={menuLogo} alt="menu" />
    <h1>IMAGINE A PLACE...</h1>
    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place makes it easy to talk everyday and hang out more often.</p>
    <button className="button-primary">Download for Mac</button>
    <button className="button-secondary">Open Discord in your browser</button>
    </div>

    
    
  );
}



export default App
