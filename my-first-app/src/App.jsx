import "./App.css";
import Navbar from "./Navbar";
import ContainerHero from "./ContainerHero";
import BackgroundImage from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerHero />
      <img className="bg-image" src={BackgroundImage} alt="bg image" />
    </div>
  );
}

export default App;
