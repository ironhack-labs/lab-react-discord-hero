// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png'
import icon from './assets/menu-icon.png'
import discord from './assets/discord-background.png'

function App() {
  return (
    <div className="App">
     <div className='Top'>
        <img className="logo"  src={logo} alt="example" />
        <img className="icon"  src={icon} alt="myIcon" />
     </div>
     <div className='theText'>
        <h1>IMAGINE A PLACE...</h1>
        <p><h2>....Where you can belong Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta blanditiis, labore dolores ipsam quaerat sed qui tenetur perferendis eius aliquam. Quis adipisci eaque perferendis at. 
          Velit reprehenderit non quidem maiores.</h2></p>
     </div>
     <div className='Bottom'>
     <img className="discord"  src={discord} alt="backg" />
      </div>  
    </div>
  );
}

export default App;