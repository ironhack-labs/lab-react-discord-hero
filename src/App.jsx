import "./App.css";
import backgroundImg from "./assets/discord-background.png";
import discLogo from "./assets/discord-logo-white.png";
import discMenu from "./assets/menu-icon.png";

function App() {
  return (
    <div>
      <div className="logos">
        <img src={discLogo} className="logo"></img>
        <img src={discMenu} className="menu"></img>
      </div>

      <div className="text">
        <h1>Imagine a place...</h1>
        <p className="text-content">
          ...where you can belong to a school club, a gaming group, or a
          worlwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>

      <div className="buttons">
        <button>Download for Mac</button>
        <button>Open Discord in your browser</button>
      </div>
      <img src={backgroundImg} className="background"></img>
    </div>
  );
}

export default App;
