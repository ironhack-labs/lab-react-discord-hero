import { useState } from 'react'
import background from './assets/discord-background.png'
import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'
import './App.css'

function App() {

  return (
    <>
     <div className='App'>
     <img src= {background} className='background'/>
     <img src= {logo} className='logo'/>
     <img src= {menu} className='menu'/>
     <h1 className='title'>IMAGINE A PLACE...</h1>
     </div>
    </>
  )
}

export default App
