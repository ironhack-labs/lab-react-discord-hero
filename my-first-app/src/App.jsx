import discordLogo from './assets/discord-logo-white.png';
import discordBackground from './assets/discord-background.png';
import discordIcons from './assets/menu-icon.png';
import './App.css'

function App() {
  return (
    <>
    <div>
      <img src = {discordLogo} className='logo'/>
      <img src = {discordIcons} className='icons'/>
      <h1 className='title'><strong>IMAGINE A PLACE</strong></h1>
      <div className='quote'>...where you can belong to a school club, a gaming group, or a <br></br> 
      worldwide art community. Where just you and a handful of <br></br>
      friends can spend time together. A place that makes it easy to<br></br>
       talk every day and hang out more often.</div>
      <img src = {discordBackground} className='back'/>   
    </div>
    </>
  );
}

export default App
