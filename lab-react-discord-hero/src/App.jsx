// src/App.jsx
import "./App.css";
import background from "./assets/discordBackground.png";
import menuIcon from "./assets/menuIcon.png";
import logo from "./assets/discordLogo.png";

function App() {
  return (
    <div>
      <div className="App"></div>
      <div id="nav-bar">
        <img src={logo} alt="Discord Logo" />
        <img src={menuIcon} alt="Menu Icon" />
      </div>
      <div id="content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time togheter. Aa place that makes it easy to talk every day and
          hang out more often
        </p>
        <button id="mac-download-btn"> Download for Mac</button>
        <button id="open-in-browser-btn"> Open Discord in your browser</button>
      </div>
      <div>
        <img id="background" src={background} alt="Background" />
    </div>
    </div>
  );
}

export default App;
