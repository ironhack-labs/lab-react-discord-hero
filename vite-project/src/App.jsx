import './App.css';
import menuIcon from "./assets/menu-icon.png";
import discordIcon from "./assets/discord-logo-white.png"
import discordBack from "./assets/discord-background.png"
import Confetti from 'react-confetti-boom';

function App() {

  return (

<div>

<Confetti />;

   <div className="App"></div>
   <img alt="discordIcon" src={discordIcon} className='Icon'/>
   <img alt="menuIcon" src={menuIcon} className='menu'/>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
   <button class="macButton" type="button"> Download for mac </button>
   <b></b>
   <button class="OpenDiscordButton" type="button"> Open Discord in your browser </button>
   
   <img alt="discordBack" src={discordBack} className='discord'/>

</div>
     
  );
}

export default App;
