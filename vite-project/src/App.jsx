import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>

      <main className="hero-content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttons">
          <button>Download for Mac</button>
          <button className="browser-btn">Open Discord in your browser</button>
        </div>
      </main>
    </div>
  );
}

export default App;
