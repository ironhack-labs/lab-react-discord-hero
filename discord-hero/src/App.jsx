import "./App.css";
import Navbar from "./components/Navbar";
import heroImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="hero">
        <div className="hero-text">
          <h1>
  IMAGINE A <br /> PLACE...
</h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art
            community. Where you and your friends can just hang out and talk.
          </p>

          <div className="buttons">
            <button>Download for Windows</button>
            <button>Open Discord in your browser</button>
          </div>
        </div>

        <img src={heroImg} className="hero-img" alt="Discord hero" />
      </header>
    </div>
  );
}

export default App;
