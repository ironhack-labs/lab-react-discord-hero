import './App.css';
import background from '../assets/discord-background.png';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <header className="header">
        {/* Removed logo and menu images */}
      </header>

      <main className="hero">
        <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>
          Imagine a place...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide
          art community. Where just you and a handful of friends can spend time together.
        </p>
        <button className="btn">Download for Windows</button>
      </main>
    </div>
  );
}

export default App;
