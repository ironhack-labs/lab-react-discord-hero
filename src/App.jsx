import './App.css';
import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <img src={logo} className="logo" alt="logo" width='160' />
          <img src={menu} className="menu" alt="logo" width='40' />
        </div>
        <div className="main-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <button className="btn">Download for Mac</button>
          <button className="btn btn-black">Open Discord in your browser</button>
        </div>
      </div>

    </div>
  );
}

export default App;