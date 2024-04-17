// src/App.jsx
import "./App.css";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="whatever">
        <div className="main">
          <h1>
            Imagine a <br></br>place...
          </h1>
          <p>
            ...where you con belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <button className="button download">Download for Mac</button>
          <button className="button webpage">
            Open Discord in your browser
          </button>
        </div>
        <div className="background-content">
          <img
            className="background-img"
            alt="background-img"
            src="./src/assets/discord-background.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
