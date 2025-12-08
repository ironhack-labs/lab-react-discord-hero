// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png'
import background from './assets/discord-background.png'
import menuIcon from './assets/menu-icon.png'

function App() {
  return (
    <div className="App">
      
      <header>
        <div><img className='logo' src={logo} alt="logo" /></div>
        <div><img src={menuIcon} alt="menu" /></div>
        </header>

    <main>
      <section id ="intro">
        <h1>IMAGINE A <br/>PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a <br/>worldwide art community. Where just you and a handful of <br/>friends can spend time together. A place that makes it easy to <br/> talk every day and hang out more often</p>
      </section>
      <div>
      
      <button className='button1'>Download for Mac</button>
      <button >Open Discord in your Browser</button>

      <section> <img className='background' src={background} alt="background" /></section>
      </div>
    </main>

    </div>
  );
}

export default App;