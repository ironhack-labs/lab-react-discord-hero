import './App.css'
/*import "./Navbar.css";*/
import logo from "./assets/discord-logo-white.png"
import icon from "./assets/menu-icon.png"
import background from "./assets/discord-background.png"

function App() {
  return (
      <div className="App">
        <div className='navbar'>
          <img id ="logo" src={logo}/>
          <img id="icon" src={icon}/>
        </div> 
        <section id="text">
          <h1>IMAGINE A<br/>PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to
        talk every day and hang out more often.</p>
        </section> 
        <section id="button"> 
          <button id="download">Download for Mac</button>
          <button id="open">Open Discord in your browser</button>
        </section>  
 
          <img id ="backimg" src={background}/>

      </div>
  );
}

export default App
