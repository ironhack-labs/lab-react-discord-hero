import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png" alt="Discord Logo" className="logo"/>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png" alt="Menu Icon" className="menu-icon"/>
      </header>

      <section className="discord">
        <div className="discord-text">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends
            can spend time together. A place that makes it easy to talk every
            day and hang out more often.
          </p>
          <div className="buttons">
            <button className="btn white">Download for Mac</button>
            <button className="btn dark">Open Discord in your browser</button>
          </div>
        </div>

        <div className="discord-image">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png" alt="Discord Img"/>
        </div>
      </section>
    </div>
  );
}

export default App;
