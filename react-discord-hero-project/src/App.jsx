// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <img src={discordLogo} alt="Discord logo" className="logo" />
        <img src={menuIcon} alt="Menu icon" className="menu" />
      </header>

      <div className="content">
        <div className="content-text">
          <h1>IMAGINE <br/> A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together. A place that makes it
            easy to talk every day and hang out more often.
          </p>
          <div className="buttons">
            <button className="btn primary">Download for Mac</button>
            <button className="btn secondary">Open Discord in your browser</button>
          </div>
        </div>

        <div className="content-image">
          <img src={discordBackground} alt="Discord community illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
