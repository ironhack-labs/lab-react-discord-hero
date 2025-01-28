// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <img src={discordLogo} alt="Discord Logo" />
      <img src={menuIcon} alt="Menu Icon" />
      <img src={discordBackground} alt="Discord Background" />
    </div>
  );
}

export default App;