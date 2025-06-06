import "./App.css";
import discordLogo from "../src/assets/discord-logo-white.png";
import burguerMenu from "../src/assets/menu-icon.png";
import peopleImg from "../src/assets/discord-background.png";
function App() {
  return (
    <>
      <div>
        <nav>
          <img src={discordLogo} alt="logo" />
          <img src={burguerMenu} alt="burguer menu" />
        </nav>

        <h1>IMAGINE A PLACE...</h1>

        <p>
          {" "}
          “Imagine a place…where you can belong to a school club, a gaming
          group, or a worldwide art community. Where just you and a handful of
          friends can spend time together. A place that makes it easy to talk
          every day and hang out more often” — Discord
        </p>
        <section id="btn-container">
          <button>Download for Mac</button>
          <button id="discord-btn">Open Discord in your Browser</button>
        </section>
        <section>
          <img src={peopleImg} alt="logo" className="people-img" />
        </section>
      </div>
    </>
  );
}

export default App;
