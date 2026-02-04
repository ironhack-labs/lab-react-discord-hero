import './App.css';

import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundImg from './assets/discord-background.png';

function App() {
  return (
    <div className="App">

      <header className="navbar">
        <img src={logo} className="logo" />
        <img src={menuIcon} className="menu" />
      </header>

      <section className="mainSection">

        <div className="textArea">
          <h1>IMAGINE A PLACE...</h1>

          <p>
            ...where you can belong to a school club, a gaming group,
            or a worldwide art community. Where just you and a handful
            of friends can spend time together. A place that makes it
            easy to talk every day and hang out more often.
          </p>

          <div className="buttons">
            <button className="whiteBtn">Download for Mac</button>
            <button className="blackBtn">Open Discord in your browser</button>
          </div>
        </div>

        <img src={backgroundImg} className="mainSectionImg" />

      </section>

    </div>
  );
}

export default App;
