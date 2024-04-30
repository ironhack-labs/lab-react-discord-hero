
import discordbackground from "../assets/discord-background.png"
import discordLogoWhite from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";



  function LandingPage() {
    return (
      
      <div className="App"> 
      
      <div id="Navbar">
      <img  height="50px" width="200px" className= "logo" src={discordLogoWhite} alt='discord-logo-white'/>
      <img width="100px" className= "logo"    src={menuIcon}  alt='menu-icon'/>
      </div>
      <br />
      <h1>Imagine a place...</h1>

      <br />
      <div id="text">
      <a>where you can belong to a school club,safnjdvdkjsnvoins.
        dasnnfdkmskdlfmvlks lkm m vkifm  cndsmkm. adsiubadsvhjb. nfbiawdc 
      </a>
      </div>
      <br />
      
      <a href="https://reactjs.org">
      <button> Download for Mac </button>
    </a>
    <br />
    <br />
    <a href="https://reactjs.org">
      <button> Open discord in your browser </button>
    </a>
      <br />
      <img id="Bg" width="600" height="400"  src={discordbackground} alt='discord-background'/>
      </div>


      );
    
  }

export default LandingPage