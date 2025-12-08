// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import discord from "./assets/discord-background.png";
function App() {
  return (
    <>
      <main>
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <img src={menu} alt="menu icon" className="menu" />
        </div>

        <div className="hero">
          <h1>
            Imagine a<br />
            place...
          </h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <footer>
          <button className="mac">Download for Mac</button>
          <button className="browser">Open Discord in your browser</button>
          <div className="discordbg">
            <img src={discord} alt="discord background" width={500} />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
