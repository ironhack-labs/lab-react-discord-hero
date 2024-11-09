import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img className="logo" src="src/assets/discord-logo-white.png" />
        <img className="hamburguer" src="src/assets/menu-icon.png" />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div className="buttons">
        <button className="button-download">Download for Mac</button>
        <button className="button-open">Open Discord in your browser</button>
      </div>
      <img
        className="imageBackground"
        src="src/assets/discord-background.png"
        alt="Discord Background"
      />
    </>
  );
}

export default App;
