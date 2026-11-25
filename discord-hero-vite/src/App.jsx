import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import discountImg from './assets/discount.png'; 
import menuIconImg from './assets/menu-icon.png';
import bodyImg from './assets/discord-background.png'

function App() {

  return (
    <div className= "App">
      
      <nav className = "navbar">
        <img src={discountImg} alt="" className = "discord-logo" />
        <img className = "menu-button" src={menuIconImg} alt="" />
      </nav>
      <section className = "main-content">
          <h1>IMAGINE A PLACE...</h1>
          <h2>...where you canbelong to a school club, a gaming group, or a worldwide art community. 
                Where just you and a handful of friends can spend time together.
                A place that make its easy to talk every day and hang out more often.
          </h2>
          <a className = "download-mac" href="">Download for Mac</a>
          <a className = "open-discord-browser" href="">Open Discord in your browser</a>
          
      </section>
      <img className = "discord-img" src={bodyImg} alt="" />
    </div>
  )
}

export default App
