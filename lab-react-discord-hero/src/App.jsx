
import './App.css'
import './Button.css'
import Information from './Information'
import Navbar from './Navbar'
import Button from './Button'
import BackgroundImage from "./assets/discord-background.png"

function App() {

  return (
    <>
      <div id="" className="App">
        <Navbar />
        <div id='mainPage'>
        <Information />
        <Button text= "Download for Mac"/>
        <Button  text = "Open Discord in your browser"/>
        </div>
        <img id="background" src= {BackgroundImage} />
      </div>
    </>
  )
}

export default App
