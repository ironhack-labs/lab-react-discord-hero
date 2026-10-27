

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img
         src="/assets/discord-logo-white.png"
          alt="Discord logo"
          className="logo"
        />

        <button className="menu-button">
          Menu
        </button>
      </header>

      <main className="hero">
        <h1>IMAGINE A PLACE...</h1>

        <p>
          ...where you can belong to a school club,
          a gaming group, or a worldwide art community.
          Where just you and a handful of friends can
          spend time together.
        </p>

        <div className="hero-buttons">
          <button className="download-button">
            Download for Mac
          </button>

          <button className="browser-button">
            Open Discord in your browser
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
