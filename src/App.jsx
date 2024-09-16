import "./App.css";
import Header from "./components/Header"
import Section from "./components/Section"
import Buttons from "./components/Buttons";
import imgBackground from "./assets/discord-background.png"

function App() {
  return (
    <div className="App">
      
      <Header />

      <Section />
      
      <Buttons />
      
      <img src={imgBackground} alt="background" id="background" />
      
    </div>
  );
}

export default App;
