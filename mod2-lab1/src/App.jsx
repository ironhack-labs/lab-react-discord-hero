import "./App.css";
import discorImage from "./assets/discord-background.png";
import logoImg from "./assets/discord-logo-white.png";
import menuImg from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <nav className="navbar">
          <img src={logoImg} className="logo" />
          <img src={menuImg} className="menuImage" />
        </nav>
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a <br />
          worldwide art community. Where just you and a handful of <br />
          friends can spend time together. A place that makes it easy to <br />
          talk every day and hang out more often.
        </p>
        <button className="downloadBtn">Download for Mac</button>
        <br />
        <br />
        <button className="openBtn">Open Discord in your browser</button>
        <img src={discorImage} className="bgImage" />
      </div>
    </div>
  );
}

export default App;
