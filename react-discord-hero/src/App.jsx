import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <header>
        <img id="discord-logo" src={logo} />
        <img id="menu-logo" src={menu} />
      </header>
      <div id="hero">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk everyday and
          hang out more often.
        </p>
      </div>
      <div id="cta">
        <div id="buttons">
          <button id="download">Download for Mac</button>
          <button id="open">Open Discord in you browser</button>
        </div>
        <img src={background} />
      </div>
    </div>
  );
}

export default App;
