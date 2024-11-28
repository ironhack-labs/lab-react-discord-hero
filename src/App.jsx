import NavSection from '../components/NavSection.jsx';
import MainSection from '../components/MainSection.jsx';
import Buttons from '../components/Buttons.jsx';

import './App.css';
import backgroundImg from "../src/assets/discord-background.png"

function App() {
  return (
    <div className="App">
      <NavSection />
      <MainSection />
      <Buttons />
      <img id="backImg" src={backgroundImg} alt="logo" />
    </div>
  );
}

export default App