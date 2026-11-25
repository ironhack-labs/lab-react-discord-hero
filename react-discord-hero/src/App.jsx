import './App.css';
import logo from "./assets/discord-logo-white.png"
import menuIcon from "./assets/menu-icon.png"
import background from "./assets/discord-background.png"
function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`}}>
      <nav className="navbar">
      <img className="logo" src={logo} alt="Discord-logo" />
      <img className="menu-icon" src={menuIcon} alt="Menu" />  </nav>
      <section className="hero">
        <h1>IMAGINE A<br/> PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a <br/>worldwide
    art community. Where just you and a handful of <br/>friends can spend time
    together. A place that makes it easy to <br/>talk every day and hang out more often.</p>
    <div className="hero-buttons">
      <button className="btn-light">Download for Mac</button>
    <button className="btn-dark">Open Discord in your browser</button>
    </div>
  
      </section>
    </div>
  );
}

export default App;