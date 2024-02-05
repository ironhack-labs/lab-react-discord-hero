import React from 'react';
import './App.css';
import DiscordLogo from './assets/discord-logo.png';
import BurgerMenu from './assets/burger-menu.png';



function App() {
  return (
    <div className="App"></div>
  );
}

export default App

function NavBar (){
  return (
    <div className="NavBar">
      <img src={DiscordLogo} alt= "discord-logo" />
      <img src={BurgerMenu} alt="burger-menu" />
    </div>
  );
}

export {NavBar};


