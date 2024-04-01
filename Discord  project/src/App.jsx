import logo from "./assets/discord-logo.png";
import logo2 from "./assets/menu-icon.png";
import image from "./assets/discord.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img src={logo} className="first-image" alt="discord-logo.png" />
        <img src={logo2} className="second-image" alt="menu-icon.png" />
      </div>
      <div className="bod">
        <h1>IMAGING A PLACE..</h1>
        <p className="read-the-docs">
          Where you can belong to school club, a gaming group, or a worldwide
          art community. <br /> where just yoy and a handful of friends can spen
          time togethe. A place that makes it <br />
          easy to tak everyday and hang out more often
        </p>

        <div className="card">
          <button className="white">Download for mac</button>
          <button className="black">Open Discord in your browser</button>
        </div>
        {/* style={{ Color: "white" }} */}
      </div>
      <div className="cont">
        <img src={image} className="third-image" alt="discord.png" />
      </div>
    </>
  );
}

export default App;
