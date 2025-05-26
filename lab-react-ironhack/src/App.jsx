import "./App.css";
import discordlogo from "./assets/discord-logo-white.png";
import menuButton from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={discordlogo} alt="discord logo" className="logo-navbar" />
        <img src={menuButton} alt="menu" className="menu-navbar" />
      </nav>
      <section className="article">
        <h1>IMAGINE A PLACE ...</h1>
        <p>
          ...Where you can belong to a school club, gaming group, or a worldwide
          art community. where just you and a handful of friends can spend time
          together. A place that makes it easy to talk every day and hang out
          more often.
        </p>
        <button className="macbtn">Download for Mac</button>
        <button className="discordbtn">Open Discord in your browser</button>
      </section>
    </div>
  );
}

export default App;
