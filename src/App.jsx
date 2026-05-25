// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import bg from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <img src={logo} alt="Discord logo" className="logo" />
        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </header>

      <main className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">IMAGINE A PLACE...</h1>
            <p className="hero-sub">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className="hero-actions">
              <button className="btn white">Download for Mac</button>
              <button className="btn dark">Open Discord in your browser</button>
            </div>
          </div>
          <img src={bg} alt="Illustration" className="hero-art" />
        </div>
      </main>
    </div>
  );
}

export default App;