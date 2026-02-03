// src/App.jsx
import './App.css';
import bkgImage from "./assets/discord-background.png";
import hero from "./assets/discord-logo-white.png";
import dropdown from "./assets/menu-icon.png";

function App() {
  return (
    <div className="page">
     
      <nav className="navbar">
        <img src={hero} alt="hero" className="nav-img" />
        <img src={dropdown} alt="dropdown" className="nav-img" />
      </nav>

      
      <main className="content">
        <h1>IMAGINE A PLACE...</h1>
        <h2>...where you can belong to a school club,gaming group,or a worldwide art community.Where just you and a handfull of friends can spend time together.A place that makes it easy to talk every day and hang out more often. </h2>

        <button className="btn primary">Download for Mac</button>
        <button className="btn secondary">Open Discord in your browser</button>
      </main>

      
      <img
        src={bkgImage}
        alt="Bgk"
        className="corner-img"
      />
    </div>
  );
}

export default App;