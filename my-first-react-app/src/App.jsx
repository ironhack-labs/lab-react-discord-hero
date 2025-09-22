import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import backgroundImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div id="logo-div">
        <img class="logo" src={logo} alt={"discord logo"} />
        <img class="menu" src={menu} alt={"hamburger menu button"} />
      </div>

      <h1>IMAGINE A</h1>
      <h1>PLACE...</h1>
      <p>
        ...where you can belong to a school club, a group of people spread
        across Europe, learning to code, getting really kind of fed up with CSS
        styling because just when you think you've done the thing you want to
        do, something will break and maybe Josh was right and front end is just
        no fun *deep breath* or maybe a group of gamers obsessively beasting
        each others' high scores on Slice Rider (TM) or you know just any group
        of people who don't want to use Slack.
      </p>
      <div id="buttons">
        <button class="white-button">Download for Mac</button>
        <button class="dark-button">Open Discord in your browser</button>
      </div>

      <img
        id="background-image"
        src={backgroundImg}
        alt={"a diverse community of like-minded folks hanging out together"}
      />
    </div>
  );
}

export default App;
