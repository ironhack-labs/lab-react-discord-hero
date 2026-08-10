import iconMenu from "./assets/menu-icon.png";
import heroLogo from "./assets/discord-logo-white.png";
import heroBackground from "./assets/discord-background.png";
import "./App.css";

function App() {
  return (
    <header>
      <div id="menu">
        <img src={heroLogo} className="iconDiscord" alt="discord logo" />
        <img src={iconMenu} className="iconMenu" alt="logo menu icon" />
      </div>
      <section id="heroSection">
        <div id="leftPart">
          <h1>Imagine A <br />Place ...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <button id="macDownload">Download for Mac</button>
          <button id="browserOpen">Open Discord in your browser</button>
        </div>
        <div id="rightPart">
          <img src={heroBackground} alt="imagebackground" />
        </div>
      </section>
    </header>
  );
}

export default App;
