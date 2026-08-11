
import discordBg from './assets/images/discord-background.png';

import navMenu from './assets/images/menu-icon.png';

import discordLogo from './assets/images/discord-logo-white.png';



function App() {
  

  return (
  <div className="App">
    <nav id='navbar'>
      <img className="nav-image" src={discordLogo} alt="discord logo" />
      <img className="nav-image" src={navMenu} alt="discord logo" />
    </nav>

    <section id='hero-section'>

      <div id='HeroContent'>

      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <div id='button-wrapper'>
        <button>Download for Mac</button>
        <button>Open Discord in browser</button> 
      </div>

      </div>

      <div id='hero-img-wrapper'>
        <img id='image-bg-hero' src={discordBg}  alt="decorative" />
      </div>

    </section>

    

    
      

    

  </div>
  )
}

export default App
