import "./App.css";
import logo from "./assets/discord-logo-white.png";
import background from "./assets/discord-background.png";
import menu from "./assets/menu-icon.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="nav-bar">
          <img src={logo} alt="discord-logo" className="logo" />
          <img src={menu} alt="menu-icon" className="menu" />
        </div>

        <h1 className="App-title">Imagine a place ...</h1>
        <p className="App-description">
          ...Where you can belong to a shcoolclub, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. Aplace that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttons">
          <button className="button">Download for Mac</button>
          <button className="buttonOpen">Open Discord in your browser</button>
        </div>
        <img
          src={background}
          alt="background-discord"
          className="background-discord"
        />
      </div>
    </>
  );
}

export default App;
