// src/App.jsx
import './App.css';
import animationImage from './assets/animation.png';
import discordLogo from './assets/discord-logo.png';
import threeBars from './assets/three-bars.png';

function App() {
  return (
    <div className="App">
      <section className="wholePage">
        <div className = "logo">
           <img src={discordLogo} alt="discord" className='discord-image'/>
           <div className = "menu">
            <img src={threeBars} alt='bars' className='bars-image'/> </div>
        </div>
       <h1>IMAGINE A PLACE...</h1>
       <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
       <img src={animationImage} alt= "anime" className='animation-image'/>
       <div className="buttons">
        <button>Download for Mac</button>
        <button className="other"> Open Discord in your browser</button>

      </div>
    </section>
    </div>
  );
}

export default App;