// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navList">
        <img
          className="logo"
          src="../src/assets/discord-logo-white.png"
          alt="logo"
        />
        <img
          className="menu"
          src="../src/assets/menu-icon.png"
          alt="menu-icon"
        />
      </div>
      <h1>IMAGINE A <br />
          PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or at a <br />
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.
      </p>
      <div>
        <button className="download-mac">Download for Mac</button>
      </div>
      <div>
        <button className="browser">Open discord in you browser</button>
      </div>
      <img
        className="character-img"
        src="../src/assets/discord-background.png"
        alt="picture of characters"
      />
    </div>
  );
}

export default App;
