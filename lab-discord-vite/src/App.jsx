// src/App.jsx
import "./App.css";
import discordLogo from "./img/discord-logo-title.png";
import burgerMenuBtn from "./img/hamburger-menu.png";

function App() {
  return (
    <div className="App">
      <header>
        <img id="discord-logo" src={discordLogo} alt="" />
        <img id="burgerMenuBtn" src={burgerMenuBtn} alt="" />
      </header>
      <div id="body">
        <div id="intro-text">
          <h1>Imagine a place...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div id="intro-btns">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
