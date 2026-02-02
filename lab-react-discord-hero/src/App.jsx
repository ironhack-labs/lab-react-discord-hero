import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <img
            src="/src/assets/discord-logo-white.png"
            alt="Discord logo"
            className="nav-logo"
          />
        </div>

        <div className="nav-right">
          <img
            src="/src/assets/menu-icon.png"
            alt="Discord logo"
            className="nav-logo"
          />

          
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1 className="hero-title">Imagine a place...</h1>

          <p className="hero-text">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community.
          </p>

          <div className="button-group">
            <button className="button-primary">Download for Mac</button>
            <button className="button-secondary">
              Open Discord in your browser
            </button>
          </div>
        </div>

        <img
          className="hero-image"
          src="/src/assets/discord-background.png"
          alt="Discord illustration"
        />
      </section>
    </>
  );
}

export default App;
