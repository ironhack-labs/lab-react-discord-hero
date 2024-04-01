// src/App.jsx
import "./App.css";
import discordlogo from "./assets/discord-logo-white.png";
import menuicon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <img src={discordlogo} className="logo"></img>
      <img src={menuicon} className="navicon"></img>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <button>Download for Mac</button>
      <br />
      <button className="button-alt">Open Discord in your browser</button>
      <br />
      <img src={background} className="background"></img>
    </div>
  );
}

export default App;
