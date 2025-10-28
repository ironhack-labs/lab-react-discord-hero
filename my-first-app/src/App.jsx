// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div 
      className="App" 
      style={{ 
        backgroundImage: `url(${discordBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      {/* Header */}
      <header className="header">
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1>IMAGINA UN LUGAR...</h1>
        <p>
          ...donde puedas pertenecer a una comunidad y comunicarte con tus amigos, 
          compañeros y otras personas que compartan tus intereses.
        </p>
        <div className="buttons">
          <button>Descargar para Windows</button>
          <button>Abrir Discord en tu navegador</button>
        </div>
      </main>
    </div>
  );
}

export default App;
