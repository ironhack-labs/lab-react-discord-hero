
import './App.css'

function App() {
  return (
    <>
      <div className="Navbar">
        <img className= "Logo" src="../src/assets/discord-logo-white.png" alt="discord-logo" />
        <img className= "Menu" src="../src/assets/menu-icon.png" alt="menu-icon" />
      </div>
      <div className="Hero">
        <h2>IMAGINE A PLACE...</h2>
        <p>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just
          you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>

        <button className='Download-button'>Download for Mac</button>
        <button className='Browser-button'>Open Discord in your browser</button>

        <img src="../src/assets/discord-background.png" alt="discord-background"/>
      </div>
    </>
  )
}

export default App
