import "./App.css";
import DiscordLogoImage from "./assets/discord-logo-white.png";
import MenuIcon from "./assets/menu-icon.png";
import DiscordBackgroundImage from "./assets/discord-background.png";

function App() {
  return (
    <>
      <div className="App"></div>

      <nav id="header">
        <img src={DiscordLogoImage} alt="Discord Logo" />
        <img src={MenuIcon} alt="menu icon" />
      </nav>
      <section id="info">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </section>
      <section id="buttons">
        <button id="mac-button">Download for Mac</button>
        <button id="browser-button">Open Discord in your browser</button>
      </section>
      <img id="discord-background-image" src={DiscordBackgroundImage} alt="Discord background image" />
    </>
  );
}

export default App;
