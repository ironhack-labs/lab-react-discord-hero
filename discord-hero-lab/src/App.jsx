import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img src="./src/assets/discord-logo-white.png" alt="Discord logo" />
        <img src="./src/assets/menu-icon.png" alt="menu icon" />
      </nav>

      <main>
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttons">
          <button className="mac">Download for Mac</button>
          <button className="browser">Open Discord in your browser</button>
        </div>
        <img
          className="bar"
          src="./src/assets/discord-background.png"
          alt="weird creatures chilling at a bar"
        />
      </main>
    </>
  );
}

export default App;
