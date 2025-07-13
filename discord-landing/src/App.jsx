import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="navbar">
          <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" />
          <img src="/discord-logo-white.png" alt="Discord Logo" className="logo" />
        </nav>

        <div className="hero-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. 
            Where just you and a handful of friends can spend time together. A place that makes it easy 
            to talk every day and hang out more often.
          </p>

          <div className="buttons">
            <button className="btn btn-primary">Download for Windows</button>
            <button className="btn btn-secondary">Open Discord in your browser</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
