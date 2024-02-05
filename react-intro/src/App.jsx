import React from 'react';
import background from '/Users/busrakocer/ironhack/4w1d/lab-react-discord-hero/react-intro/src/assets/discord-background.png';
import logo from '/Users/busrakocer/ironhack/4w1d/lab-react-discord-hero/react-intro/src/assets/discord-logo-white (1).png';
import menu from '/Users/busrakocer/ironhack/4w1d/lab-react-discord-hero/react-intro/src/assets/menu-icon.png';
import './App.css';
import MyButton from '/Users/busrakocer/ironhack/4w1d/lab-react-discord-hero/react-intro/src/button.jsx';
function App() {
  return (
    <>
     <div className='App'>
     <div className="background-container"><img src= {background} alt ="background" className='background'/></div>
     <div className="image-container"><img src= {logo} alt="logo" className="logo"/></div>
     <div className="menu-container"><img src= {menu} alt="menu" className="menu"/></div>
     <div className='button-container'>
      
      <MyButton inside =" Download for Mac" />
      <hr />
      <MyButton inside ="Open Discord in your browser" color="black"/>
      <hr />
    </div>
     </div>
    </>
  )
}
export default App