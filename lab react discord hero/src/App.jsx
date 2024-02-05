import { useState } from 'react'
import './App.css'
import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'

import MainTitle from './components/MainTitle'
import Paragraph from './components/paragraph'

function App() {
  return (
    <>
    <div>
      <img className = "logo" src={logo} alt="logo discord" />
      <img className = "menu" src={menu} alt="menu icon" />
    </div>
    <MainTitle />
    <Paragraph />
    <div className="App"></div> 
    </>
  );
}

export default App;
