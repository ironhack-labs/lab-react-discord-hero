// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'
import './Header/Header'

function App() {
  return (
    <div className='App'>
      

      <div className='Section'>

        <h1 className='Heading'>IMAGINE A PLACE...</h1>
        <p className='Speech'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button className='BtnMac'>Download for Mac</button>
        <button className='BtnBrowser'>Open Discord in your server</button>

      </div>
    </div>
  );
}

export default App;