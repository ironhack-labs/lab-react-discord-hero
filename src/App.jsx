import "./App.css";
import DiscordTexts from "./texts";
import backgroundImg from "../public/discord-background.png";
import discordLogo from "../public/discord-logo-white.png";
import menuBtn from "../public/menu-icon.png";
function App() {
  return (
    <div className="App">
      <DiscordTexts className="texts" />
      <img
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
        }}
        className="menu-btn"
        src={menuBtn}
      ></img>
      <img className="discord-logo" src={discordLogo} alt="Discord Logo"></img>
      <img className="background-img" src={backgroundImg}></img>
      <button className="forMac">Download for Mac</button>
      <button>Open Discord in your browser</button>
    </div>
  );
}

export default App;
