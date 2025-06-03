import "./App.css"
import logo from "./assets/images/discord-logo-white.png"
import meuIcon from "./assets/images/menu-icon.png"
import discordBg from "./assets/images/discord-background.png"

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `src(${discordBg})`, 
      backgroundColor: "#0d6efd",
      height: "100vh",
      width: "100vw"
    }}>
      <div className="d-flex p-4 justify-content-between">
        <img src={logo} alt="logo" style={{ width: "15%", height: "25%" }}  />
        <img src={meuIcon} alt="menu-icon"/>
      </div>
        <div className="container">
          <div className="row">
            <div>
              <h1 className="col-5">IMAGINE A PLACE...</h1>
            </div>
            <div>
              <p className="col-5">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <button className=" col-2 button border-0 m-3 px-3 py-2 rounded-pill text-bg-light">Download For Mac</button>
          </div>
          <div className="row">
            <button className=" col-3 button border-0 m-3 px-3 py-2 rounded-pill text-bg-dark">Open Discord in your browser</button>
          </div>  
        </div>
        <div>
          <img src={discordBg} alt="discord-background" className="position-absolute bottom-0 end-0"/>
        </div>
    </div>
  )
}

export default App
