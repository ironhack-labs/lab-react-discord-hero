import './App.css';
import Nav from './components/Nav.jsx'
import Section from './components/Section.jsx'

import imgFondo from './assets/discord-background.png'

function App() {
  return (
    <div id="main">
      <Nav />
      <Section />

      <div id="bot">
        <div id="btn">
          <button id="mac">Download for Mac</button>
          <button id="open"> Open Discord in your browser</button>       
        </div>
        <img src={imgFondo} alt="imagen de fondo" />
      </div>
        
    </div>
  )
}

export default App