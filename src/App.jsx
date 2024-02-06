// src/App.jsx
import './App.css';
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Button from './Components/Button'
import mainImage from './assets/discord-background.png'

function App() {
  return (
    <div className="App">
        <div className='navbar'>
            <Navbar />
        </div>
        <div className= "section">
            <Section />
            <Button className="buttons" text="Descarga para Mac" color="black"/>
            <Button className="buttons" text="Abrir Discord en tu navegador" color="white"/>
        </div>
        <div className= "main-image">
            <img  src={mainImage} alt="Discord Background"/>
        </div>
    </div>
  );
}

export default App;