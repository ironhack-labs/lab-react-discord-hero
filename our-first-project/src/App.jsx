import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import burgerMenu from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <>
      <nav>
        <img src={discordLogo} alt="Logo" />
        <img src={burgerMenu} alt="menu" />
      </nav>
      <h1>
        {" "}
        IMAGINE <br />A PLACE...
      </h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide{" "}
        <br></br>
        art community. Where just you and a handful of friends can spend time{" "}
        <br></br>
        together. A place that makes it easy to talk every day and hang out more
        <br></br>
        often.{" "}
      </p>
      <section id="btn-container">
        <button> Download for mac</button>
        <button id="discord-btn"> Open Discord in your browser</button>
      </section>
      <section>
        <img
          src={discordBackground}
          alt="people image"
          className="background-img"
        ></img>
      </section>
    </>
  );
}

export default App;
