// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={discordLogo}/>
        <img src={menuIcon}/>
      </nav>
      <section className="hero">
        <h1>IMAGINE A PLACE ..... </h1>
        <p>
  ...where you can belong to a school club, a gaming group, or a
  worldwide art community. Where just you and a handful of
  friends can spend time together. A place that makes it easy to
  talk every day and hang out more often.
</p>

<div className="buttons">
  <button className="download-button">Download for Mac</button>
  <button className="browser-button">Open Discord in your browser</button>
</div>
</section>
</div>
  );
}

export default App;