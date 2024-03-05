// src/App.jsx
import "./App.css";
import discord from "./assets/discord-logo-white.png"; // Import the image file
import menuIcon from "./assets/menu-icon.png"; // Import the image file
import discordBackground from "./assets/discord-background.png"; // Import the image file

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <img className="navImg" src={discord} alt="example" />
        <img className="navImg" src={menuIcon} alt="example2" />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <div className="container">
      <div>
          <p>
            ...where you can belong to a school blog, a gaming group, or a world
            wide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <button className="downloadBtn">Download for Mac</button>
          <button className="browzerBtn">Open Discord in your browzer</button>
        </div>
        <img className="mainImg" src={discordBackground} alt="example3" />

      </div>
      <p></p>
    </div>
  );
}

export default App;
