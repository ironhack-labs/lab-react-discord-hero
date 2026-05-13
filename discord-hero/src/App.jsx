import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import heroImage from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <section className="hero">
        <nav className="navbar">
          <img src={discordLogo} alt="Discord logo" className="logo" />
          <img src={menuIcon} alt="Menu icon" className="menu-icon" />
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>IMAGINE A PLACE...</h1>

            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>

            <button>Download for Mac</button>
          </div>

          <div className="hero-image-container">
            <img src={heroImage} alt="Discord background" className="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;