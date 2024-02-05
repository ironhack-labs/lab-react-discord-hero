import "./App.css";
import discordLogo from "./assets/Discord.png";
import burger from "./assets/burger.png";

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">
          {/* <a href="https://discord.com/" target="_blank"> */}
            <img src={discordLogo} className="logo" alt="Discord logo" />
          {/* </a> */}
        </div>
        <div>
          <img src={burger} className="burger" alt="Burger Menu" />
        </div>
      
      </header>

     
      <h1 className="uppercase">Imagine a place...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>

      <button>Download for Mac</button>
      <button>Open Discord in your browser</button>
    </div>
  );
}

export default App;
