import { useState } from 'react'
import Body from './components/Body'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar />
        <Body></Body>
      </div>
    </>
  )
}

export default App
