import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero">
      <div className="hero-left">
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button className="btn">Download for Windows</button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </div>
     
      


    </>
  )
}

export default App
