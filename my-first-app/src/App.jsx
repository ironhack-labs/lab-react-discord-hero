// src/App.jsx
import './App.css';
import DiscordBackgroundImg from "./assets/discord-backround.jsx"
import Navbar from './assets/navbar.jsx' 
import Button from './assets/button.jsx'
import Text from './assets/text.jsx';

function App() {
  return (
    <div className="App">
    
    <Navbar  />
    <Text  />
    <Button content="Download for Mac" className="mac"/>
    <Button content="Open Discord in your browser" className="browser"/>
    <DiscordBackgroundImg/>
    </div>
  );
}

export default App;