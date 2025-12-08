// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import burgerMenu from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div id="nav-bar">
        <img src={discordLogo} alt="" className="discordLogo" />
        <span></span>
        <img src={burgerMenu} alt="" className="burgerMenu" />
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
        <div id="discBack">
          <img src={discordBackground} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
