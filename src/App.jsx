import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() { 

  return (
    <main>
      <NavBar></NavBar>
      <div id="content">
        <h1>Imagine a place...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. 
          Where just you and a handful of friends can spend time together. 
          A place that makes it easy to talk every day and hang out more often.
        </p>
        <button id="download-mac">Download for Mac</button>
        <button id="open-browser">Open Discord in your browser</button>
      </div>
    </main>
  )
}

export default App
