import './App.css'
import Download from './compnents/Download'
import Image from './compnents/Image'
import Nav from './compnents/nav'
import Presentacion from './compnents/Presentacion'

function App() {
  return (
    <div className="app">
      <Nav />
      <Presentacion />
      <Download />
      <Image />
    </div>
  )
}

export default App
