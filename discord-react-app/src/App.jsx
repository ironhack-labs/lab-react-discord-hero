// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <img src="./src/assets/discord-logo-white.png" alt="logo white" />
        <img src="./src/assets/menu-icon.png" alt="menu icon" />
      </nav>
      <main className='main-section'>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className='button-wrapper'>
          <button>Download for Mac</button>
          <button id='button-2'>Open Discord in your browser</button>
        </div>
      </main>
      <img className='bg-image' src="./src/assets/discord-background.png" alt="background image" />
    </div>
  );
}

export default App;