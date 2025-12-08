// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import heroImage from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className='logo'>
          <img src={logo} alt="Discord Logo" className="discord-logo" />
        </div>
        <div className='menu'>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </nav>
      <main className="hero-section">
        <div className="hero-content">
          <h1 className='heading'>IMAGINE A <br/>PLACE...</h1>
          <p className='paragraph'>
            ...where you can belong to a school club, a gaming group, or a <br/>
            worldwide art community. Where just you and a handful of <br/>
            friends can spend time together. A place that makes it easy to <br/>
            talk every day and hang out more often.
          </p>
          <div className="button-group">
            <button className="btn btn-primary">Download for Mac</button>
            <button className="btn btn-secondary">Open Discord in your browser</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Discord Hero" className="discord-hero-image" />
        </div>
      </main>
    </div>
  );
}

export default App;