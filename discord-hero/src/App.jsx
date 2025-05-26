// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/src/assets/discord-logo-white.png" alt="Discord" />
          </div>
          <ul className="nav-menu">
            <li><a href="#">Download</a></li>
            <li><a href="#">Nitro</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            IMAGINE A PLACE...
          </h1>
          <p className="hero-description">
            ...where you can belong to a school club, a gaming group, or a worldwide art community. 
            Where just you and a handful of friends can spend time together. A place that makes it 
            easy to talk every day and hang out more often.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-download">
              ↓ Download for Mac
            </button>
            <button className="btn btn-browser">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/discord-background.png" alt="Discord Characters" />
        </div>
      </section>
    </div>
  );
}

export default App;