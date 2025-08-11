import DiscordNavbar from "./components/DiscordNavbar";
import Intro from "./components/Intro";
import backgroundImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <DiscordNavbar />
      <Intro />
      <img src={backgroundImg} alt="background image" id="background-img"/>
    </div>
  );
}

export default App;
