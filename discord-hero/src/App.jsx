// src/App.jsx
import './App.css';

import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      <section className="hero">
        
        <nav className="navbar">
          <img src={logo} alt="Discord Logo" className="logo" />

          <div className="nav-links">
            <a href="#">Download</a>
            <a href="#">Nitro</a>
            <a href="#">Discover</a>
            <a href="#">Safety</a>
            <a href="#">Support</a>
          </div>

          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </nav>

        <div className="hero-content">
          <h1>
            IMAGINE A <br /> PLACE...
          </h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together.
            A place that makes it easy to talk every day and hang out more often.
          </p>

          <div className="hero-buttons">
            <button className="white-btn">Download for Mac</button>
            <button className="dark-btn">Open Discord in your browser</button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;