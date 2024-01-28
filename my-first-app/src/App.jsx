// src/App.jsx
import './App.css';
import DiscordBackgroundImg from "./assets/discord-backround.jsx"
import DiscordLogoImg from './assets/discord-logo';
import DiscordMenu from './assets/discord-menu.jsx';
import Text from './assets/text.jsx';

function App() {
  return (
    <div className="App">
    <DiscordBackgroundImg />
    <DiscordLogoImg />
    <DiscordMenu />
    <Text />
    </div>
  );
}

export default App;