import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <img src={logo} alt="discord-logo" className="logo" />
      <img src={menu} alt="menu" className="menu" />
    </div>
  );
}

export default App;
