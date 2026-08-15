import './App.css';

import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/discord-background.png';

function App() {
  return (
    <div className="hero">
      <header className="header">
        <img className="logo" src={logo} alt="Discord logo" />
        <img className="menu" src={menuIcon} alt="Menu" />
      </header>

      <main className="content">
        <div className="text">
          <h1>IMAGINE A<br />PLACE...</h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends
            can spend time together. A place that makes it easy to talk every
            day and hang out more often.
          </p>

          <div className="buttons">
            <button className="download">Download for Mac</button>
            <button className="browser">Open Discord in your browser</button>
          </div>
        </div>

        <img
          className="background-image"
          src={background}
          alt="Discord characters"
        />
      </main>
    </div>
  );
}

export default App;