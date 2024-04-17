import "./App.css";

// for some reason the link to the img did't work

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img
          className="logo"
          src="./src/assets/discord-logo-white.png"
          alt="Discord Logo"
        ></img>
        <img className="menu" src="./src/assets/menu-icon.png"></img>
      </div>
      <div className="main">
        <h1>
          IMAGINE A <br></br>PLACE...
        </h1>
        <p>
          ...where you con belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className="download">Download for Mac</button>
        <br></br>
        <button className="open-discord">Open Discord in your browser</button>
      </div>
      <img
        className="background-img"
        src="./src/assets/discord-background.png"
      ></img>
    </div>
  );
}

export default App;
