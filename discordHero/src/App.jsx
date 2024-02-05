import './App.css';
import DiscordLogo from './assets/discord-logo-white.png';
import MenuIcon from './assets/menu-icon.png';
import DiscordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="hero">
      <img src={DiscordLogo} alt="Discord Logo" className="logo" />
      <img src={MenuIcon} alt="Menu Icon" className="menu-icon" />
      <div className="content">
        <h1>IMAGINE A PLACE...</h1>
        <h5>... were you can belong to a school club, a gaming group, or a worldwide art comunity. were just a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h5>
        <button>Open Discord in your browser</button>
      </div>
      <img src={DiscordBackground} alt="Discord Background" className="background" />
    </div>
  );
}

export default App;
