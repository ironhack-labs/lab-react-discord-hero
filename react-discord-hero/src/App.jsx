
import './App.css'

function App() {


  return (
    <div className="App">
      <nav className="nav-bar">
        <div>
          <img src ="../src/assets/discord-logo-white.png" width="150" height="30"/>
        </div>
        <div>
        <img src ="../src/assets/menu-icon.png" width="40" height="40"/>
        </div>
      </nav>

      <section className="section1">
        <div>
          <h1>IMAGINE A PLACE...</h1>
        </div>
        
        <div className="paragraph">
          <h3>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place makes it easy to talk every day and hang out more often.
          </h3>
        </div>
      
      </section>  
      
      <section className="section2">
        <div>
          <button>Download for Marc</button>

          <br/>
          <br/>
          
          <button>Open discord in your browser</button>
        </div>

        <div className ="image-bg">
          <img src="../src/assets/discord-background.png" />
        </div>
      </section>


    </div>
  )
}

export default App
