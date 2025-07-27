import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src="./src/assets/discord-logo-white.png"
          alt="discord-logo"
          className="discordImg"
        />
        <img
          src="./src/assets/menu-icon.png"
          alt="menu-icon"
          className="menuIcon"
        />
      </div>
      <div className="text-container">
        <div className="title">
          <div className="title-text">IMAGINE A</div>
          <div className="title-text">PLACE...</div>
        </div>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttonContainer">
          <button className="download">Download for Mac</button>
          <button className="openDiscord">Open Discord in your browser</button>
        </div>
      </div>
      <div className="friendsImg">
        <img src="./src/assets/discord-background.png" alt="backgroundImage" />
      </div>
    </div>
  );
}

export default App;
