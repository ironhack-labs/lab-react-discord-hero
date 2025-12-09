// src/App.jsx
import "./App.css";
import discordlogo from "./assets/discord-logo-white.png";
import menuLogo from "./assets/menu-icon.png";
import discordbackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div id="header-container">
        <img src={discordlogo} id="discord-logo" />
        <span></span>
        <img src={menuLogo} id="menu-logo" />
      </div>
      <main id="body-container">
        <h1 id="title">IMAGINE A PLACE...</h1>
        <p id="text">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hand out more often
        </p>
        <div id="btn-container">
          <button id="download-btn">Download for Mac</button>
          <button id="discord-btn">Open Discord in your browser</button>
        </div>
      </main>
      <img src={discordbackground} id="background-photo" />
    </div>
  );
}

export default App;
