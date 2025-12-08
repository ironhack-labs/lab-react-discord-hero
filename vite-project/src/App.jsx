import './App.css'
import logo from "./assets/discord-logo-white.png"
import icon from "./assets/menu-icon.png"
import background from "./assets/discord-background.png"

function App() {
  return (
    <div className="background">
      <nav className="navbar">
        <div className="nav-left">
         <img src={logo} alt="discord-logo"/>   
        </div>
        <img src={icon} alt="icon" />
        </nav>

     <div className ="content">
     <h1>Imagine a place...</h1>
     <p>... where you can belong to a school club, a gaming group, 
      or a worldwide art community. Where just you and a handful of friends can spend 
      time together. A place that makes it easy to talk every  
      day and hang out more often </p>

     <div className="bottons">
      <button className="btn-light">Download for Mac</button>
      <button className="btn-dark">Open Discord on your browser</button>
       </div>
    </div>
    <img src={background} alt="background" />
       </div>
  );
}
export default App;
