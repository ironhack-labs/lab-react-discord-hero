import './App.css';
import DiscordLogo from './assets/discord-logo-white.png';
import MenuIcon from './assets/menu-icon.png';
import DiscordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="hero-section">
      <img src={DiscordLogo} alt="Discord Logo" className="discord-logo" />
      <img src={MenuIcon} alt="Menu Icon" className="menu-icon" />
      <div className="hero-content">
        <h1>Welcome to Discord</h1>
        <p>Your place to talk, hang out, and bring your community together.</p>
      </div>
      <img src={DiscordBackground} alt="Discord Background" className="discord-background" />
    </div>
  );
}

export default App;