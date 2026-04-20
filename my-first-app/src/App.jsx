import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/main-header'
import MainHeader from './components/main-header'
import MainContainer from './components/main-container'
import Buttons from './components/buttons'

function App() {

  return (
    <>
      <div className="App"> </div>

      <MainHeader/>
      <MainContainer/>
      <>
      {/* <button/> */}
      <button id="button-download">Download for Mac</button>
      <button id="button-browser">Open Discord in your browser</button>
      <>
      <img id="img-bg" src="./src/assets/background.png" width ="500px" height="300"/>
      </>
      
    </>

    </>
  )
}

export default App
