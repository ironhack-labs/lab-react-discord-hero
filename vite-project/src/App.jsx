import "./App.css";

import discordLogo from "./assets/discord-logo-white.png";
import menuBars from "./assets/menu-bars.png";
import background from "./assets/background.png";

function App() {
  return (
    <div className="App">

      <header>
        <img src={discordLogo} alt="Discord logo" />

        <nav>
          <a href="#">Download</a>
          <a href="#">Nitro</a>
          <a href="#">Discover</a>
          <a href="#">Safety</a>
        </nav>

        <img src={menuBars} alt="Menu" />
      </header>

      <main>
        <section>
          <h1>IMAGINE A PLACE...</h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends
            can spend time together. A place that makes it easy to talk every
            day and hang out more often.
          </p>

          <div>
            <button>Download for Mac</button>
            <button>Open Discord in your browser</button>
          </div>
        </section>

        <img src={background} alt="" />
      </main>

    </div>
  );
}

export default App;