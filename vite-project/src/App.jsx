// src/App.jsx
import "./App.css";
import backgroundImage from "./assets/discord-background.png";
import menueIcon from "./assets/menu-icon.png";
import logoWhite from "./assets/discord-logo-white.png";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <div className="navBar">
          <img src={menueIcon} />
          <img src={logoWhite} />
        </div>

        {<img src={backgroundImage} />}
      </div>
    </div>
  );
}

export default App;
