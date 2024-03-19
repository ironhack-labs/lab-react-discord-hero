import "./App.css";
import discordBackground from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
const title = <h1 className="title">IMAGINE A PLACE ...</h1>;
const paragraph = (
  <p>
    ..where you can belong to a school club, a gaming group, or a worldwide art
    community.{" "}
  </p>
);
function App() {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="" />
        <img className="icon" src={menuIcon} alt="" />
      </nav>
      <div className="text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <p>Where just you and a handful of friends can spend time together.</p>

        <p>
          {" "}
          A place that makes it easy to talk every day and hang out more often.
        </p>
      </div>
      <div className="buttondiv">
        <button className="mac">Download For Mac</button>
        <button className="browser">Open Discord in your browser</button>
      </div>
      <img className="background" src={discordBackground} alt="" />
    </>
  );
}

export default App;
