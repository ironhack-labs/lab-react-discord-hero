import './App.css';
import { Navbar } from './components/Navbar';
import Background from './assets/discord-background.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="main">
        <h1>Imagine a Place...</h1>
        <p>...Lorem Ipsum es simplemente el texto de relln libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de 
          relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
       
      </div>
      <div className="img">
        <div className="buttons">
          <button className='apple'>Donload for Mac</button>
          <button className='web'>Open Discord in your browser</button>
        </div>
          <img src={Background} alt="" />
        </div>
    </div>
  );
}

export default App;
