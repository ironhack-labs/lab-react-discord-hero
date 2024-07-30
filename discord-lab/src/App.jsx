import "./App.css";
import ParagraphText from "./paragraph";

function App() {
  return (
    <div className="App">
      <img
        id="discord-img"
        width="120px"
        src="src\assets\discord-logo-white.png"
      ></img>
      <img id="menu-icon" src="src\assets\menu-icon.png"></img>
      <h1>IMAGINE A PLACE...</h1>

      <ParagraphText />

      <img id="background-img" src="src\assets\discord-background.png"></img>
      <button id="download-mac">Download for Mac</button>
      <button id="open-browser">Open Discord in your browser</button>
    </div>
  );
}

export default App;
