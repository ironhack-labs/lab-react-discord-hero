import './App.css';
// 1. Import the images from your src/assets folder
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundCharacters from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      {/* 2. Create the Navigation Bar */}
      <nav className="navbar">
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-btn" />
      </nav>

      {/* 3. Create the Hero Section */}
      <header className="hero-content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide 
          art community. Where just you and a handful of friends can spend time together.
        </p>
        <div className="button-container">
          <button className="download-btn">Download for Mac</button>
          <button className="browser-btn">Open Discord in your browser</button>
        </div>
      </header>

      {/* 4. The Background Image */}
      <img src={backgroundCharacters} alt="Discord characters" className="bg-img" />
    </div>
  );
}

export default App;