// src/App.jsx
import './App.css';
import Content from './components/Content';
import DiscordBackground from './components/DiscordBackground';
import DiscordLogo from './components/DiscordLogo';
import MenuLogo from './components/MenuLogo';
import { Component } from 'react';



function App() {
  return (
    <>
    <div className="App">
    <DiscordLogo />
    <MenuLogo />
    <Content />
    <DiscordBackground />
    
    </div>
    
    </>

  );
}

export default App;