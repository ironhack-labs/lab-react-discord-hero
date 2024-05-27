import NavBar from './components/NavBar'
import discordBackground from "./assets/discord-background.png"
import './App.css'


function App() {
    return (
    <>
      <NavBar/>
      <div className='discordBack'>
      
      <div className="App">
        <div className='bodyApp'>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button id="downloadBtn">Download for Mac</button>
        <button id="openBtn">Open Discord in your browser</button>
        </div>
        </div>  
        <div className="imgBck">
        <img src={discordBackground} alt="discord background Images" />  
        </div>         
      </div>
      
    </>
  )
}

export default App
