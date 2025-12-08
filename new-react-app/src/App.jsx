import "./App.css";
import Logoimg from "./assets/discord-logo-white.png";
import Menuicon from "./assets/menu-icon.png";
import DiscordBackground from "./assets/discord-background.png";
function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <img src={Logoimg} alt="discord-logo" />
        <img src={Menuicon} alt="menu-icon" />
      </header>
      <main className="main">
        <h1 className="main-title">IMAGINE A PLACE...</h1>

        <p className="main-p">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <button className="btn-mac">Download for Mac</button>
        <button className="btn-discord">Open Discord in your browser</button>
      </main>
      <footer>
        <img src= {DiscordBackground} alt="discord-background" />
      </footer>
    </div>
  );
}

export default App;
