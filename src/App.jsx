// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import bg from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
     
      <header className="site-header">
        <div className="container nav">
          <img src={logo} alt="Discord" className="logo" />
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </div>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="overlay">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            …where you can belong to a school club, a gaming group, or a worldwide art
            community. Where just you and a handful of friends can spend time together.
            A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="cta">
            <a className="btn btn-light" href="#">Download for Windows</a>
            <a className="btn btn-dark" href="#">Open Discord in your browser</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
