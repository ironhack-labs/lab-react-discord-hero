// src/App.jsx
import './App.css';

import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/discord-background.png';

function App() {
  return (
    <div className="App">

      {/* NAVBAR */}
      <nav className="navbar">
        <img className="logo" src={logo} alt="Discord Logo" />

        <ul className="nav-links">
          <li>Download</li>
          <li>Nitro</li>
          <li>Discover</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

        

        <img className="menu-icon" src={menuIcon} alt="menu" />
      </nav>

      
      <section className="hero">
        <img className="hero-bg" src={background} alt="background" />

        <div className="hero-content">
          <h1>IMAGINE A PLACE...</h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>

          <div className="hero-buttons">
            <button className="btn-white">
              Download for Windows
            </button>

            <button className="btn-dark">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;