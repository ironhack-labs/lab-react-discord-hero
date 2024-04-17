import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <div className="nav">
          <img
            className="logo"
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"
          />
          <img
            className="icon"
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
          />
        </div>

        <h1>
          IMAGINE A <br></br>PLACE...
        </h1>
        <p className="text">
          ..where you can belong to a school club, a gaming gruoup, or a
          worlwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <h2 className="tag-one">Download for Mac</h2>
        <h2 className="tag-two">Open Discord in your browser</h2>

        <img
          className="background"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
        />
      </section>
    </div>
  );
}

export default App;
