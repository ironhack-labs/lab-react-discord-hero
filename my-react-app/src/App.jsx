import disLogo from "./assets/discord-logo.png";
import icons from "./assets/menu-icon.png"
import heroes from "./assets/discord-background.png"
import './App.css';

function App() {
  return (
     <div className="hero">
      <nav className="navbar">
        <img src={disLogo} alt="Discord logo" className="logo" />
        <img src={icons} alt="icons" className="icon-logo" />
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together. A place that makes it easy
            to talk every day and hang out more often.
          </p>
          <div className="hero-buttons">
            <button className="download-btn">Download for Windows</button>
            <button className="browser-btn">Open Discord in your browser</button>
          </div>
        </div>

        <img src={heroes} className="hero-image" />
      </div>
    </div>
  );
}

export default App;
