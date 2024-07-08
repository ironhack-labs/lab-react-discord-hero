import bg from "./assets/bg.png"
import logo from "./assets/logo.png"
import menu from "./assets/menu.png"
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav>
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </nav>
        <header>
          <h1>IMAGINE A PLACE..</h1>
          <p>...where you can belong to a scholll clob, a gaming group, or
            a worldwide art community. WHere just you and a handful of 
            friends can spend time together.A place that makes it easy to
            talk everyday and hang out more often.
          </p>
          <button id="mac">Download for Mac</button>
          <button id="browser">Open Discord in your browser</button>
        </header>
        <img src={bg} alt="" id="bg" />
      </div>
    </>
  )
}

export default App
