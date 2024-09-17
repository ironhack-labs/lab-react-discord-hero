import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="discord-logo" className="logo" />
        <img src={menu} alt="menu" className="menu" />
      </nav>
    </div>
  );
}

export default App;
