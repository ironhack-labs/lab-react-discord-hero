import "./App.css";
import Header from "./components/Header";
import MainText from "./components/MainText";
import imgHero from "./assets/images/discord-background.png";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <div id="Header">
        <Header />
      </div>
      <div id="Main-text">
        <MainText />
      </div>
      <div id="buttons">
        <Buttons />
      </div>
      <div id="Image">
        <img className="imageHero" src={imgHero} alt="hero" />
      </div>
    </div>
  );
}

export default App;
