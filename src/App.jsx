import './App.css';
import Navbar from './components/Navbar.jsx';
import Text from './components/Text.jsx';
import discordBackground from "./assets/discord-background.png"
import Buttons from './components/Buttons.jsx';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Text />
      <Buttons />
      <img src={discordBackground} alt="Menu Icon" id="discord-background" />

    </div>
  );
}

export default App;
