// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <navbar className="navbar">
        <img src="src/assets/discord-logo-white.png" alt="logo" />
        <img src="src/assets/menu-icon.png" alt="menu" />
      </navbar>
      <div className="Hero">
        <h1>IMAGINE A PLACE... </h1>
        <p>
          ...where you can share with people who share your interests. A place
          where you can connect with people, share ideas, and make new friends.
          Join the Discord community today!
        </p>
        <div className="buttons">
          <button className="firstButton"> Download for Mac</button>
          <button className="secondButton">Open Discord in your Browser</button>
        </div>
      </div>
    </div>
  );
}

export default App;
