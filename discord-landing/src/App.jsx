import "./App.css";

import bgArt from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <section className="hero">
        {/* NAV (logo left, menu right) */}
        <header className="hero-nav">
          <img className="hero-logo" src={logo} alt="Discord" />

          <button className="hero-menu" aria-label="Open menu">
            <img src={menuIcon} alt="" />
          </button>
        </header>

        {/* 2-column hero */}
        <div className="hero-inner">
          <div className="hero-left">
            <h1>
              IMAGINE A<br />PLACE...
            </h1>

            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-light">Download for Mac</button>
              <button className="btn btn-dark">Open Discord in your browser</button>
            </div>
          </div>

          <div className="hero-right">
            <img className="hero-art" src={bgArt} alt="Discord characters" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
