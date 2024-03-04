import './App.css';
import discordlogo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'
import imgBg from './assets/discord-background.png'
function App() {
  return (
    <div className="App">
      <heading>
        <img src ={discordlogo} alt="discord logo"/>
        <img src={menu} alt="menu tab"/>
      </heading>
      <article>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, 
        a gaming group, or a worldwide art community.
        Where just you and a handful of friends can 
        spend time together. A place that makes it easy
        to talk every day and hang out more often.
      </p>
      <button className='mac'>Download for Mac</button>
      <button className='browser'>Open Discord in your browser</button>
      <img src={imgBg} alt="fun image background"/>
      </article>
      









    </div>
  );
}

export default App;