import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          id="discord-logo"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"
        />
        <img
          id="menu-logo"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
        />
      </header>
      <div id="hero">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk everyday and
          hang out more often.
        </p>
      </div>
      <div id="cta">
        <div id="buttons">
          <button id="download">Download for Mac</button>
          <button id="open">Open Discord in you browser</button>
        </div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png" />
      </div>
    </div>
  );
}

export default App;
