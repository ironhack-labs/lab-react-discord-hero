 import image2 from './assets/menu-icon-bg.png';
 import image1 from './assets/discord-logo-bg.png';
 import image3 from './assets/discord-background.png';
 import './App.css'

function App() {
  return (
    <>
    <div className='app'>
         <img className="disc-logo" src={image1} alt="discord_logo" />
         <img className="menu-icon" src={image2} alt="menu-icon" />

         <h1>Imagine a <br/>Place...</h1>
         <div>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes sit easy to talk every day and hang out more often.</p>
          <div className='buttons'>
          <button className="mac-button">Download for Mac</button>
         <button className="browser-button">Open Discord in your browser</button>
        </div>
           <img className="background-img" src={image3} alt="background"/>
         </div>
       
        
    </div>
    </>
  )
}

export default App
