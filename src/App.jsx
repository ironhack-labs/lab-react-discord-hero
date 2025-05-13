
import './App.css';
import logo from './assets/discordlogo.png'
import menu from './assets/burgermenudiscord.png'
import footerImg from './assets/mascotasdiscord.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo-icon" />
        <img src={menu} alt="Menu" className="menu-icon" />
      </header>

      <h1>IMAGINE A PLACE...</h1>

      <p>...where you can belong to a school club, a gamming group, or a worldwide art comunity. Where just and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      
      <div id="botones">
        <button id="button1">Download for Mac</button>
      <button id="button2">Open Discord in your browser</button>
      </div>

      <footer className="footer">
        <img src={footerImg} alt="Footer Decoration" className="footer-image" />
      </footer>

    </div>


  );
}

export default App;
