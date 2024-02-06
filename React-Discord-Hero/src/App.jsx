/*import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' */

import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Buttons from './comonents/Buttons'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero>
        <h1 style={{ textTransform: "uppercase"}}>Imagine a place...</h1>
        <p>...where you can belong to a school club, a gaming group ...</p>
        <Buttons>
          <button className="Download">Download for Mac</button>
          <button className="OpenBrowser">Open Discord in Browser</button>
        </Buttons>
      </Hero>
    </div>
  );
}

export default App;
