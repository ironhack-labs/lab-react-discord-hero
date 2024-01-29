import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img src="./src/assets/discord-logo-white.png" />
        <img src="./src/assets/menu-icon.png" />
      </nav>
      <div className="info">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...Where you can belong to a school club, a gaming group or a<br />
          worldwide arte community. Where just you and a handful of
          <br /> friends can spend time together. A place that makes it easy to
          <br /> talk every day and hang out more often.
        </p>
        <div className="download-section">
          <div className="info-buttons">
            <button id="download-btn"></button>
            <button id="open-btn"></button>
          </div>
          <img src="/src/assets/discord-background.png" />
        </div>
      </div>
    </>
  );
}

export default App;
