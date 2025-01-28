import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx
import './App.css';
import Navbar from './compontents/Navbar/Navbar';
import Main from './compontents/main/main';
import Button from './compontents/Button/button';





function App() {
  return (
    <div className="App">
      <div>
        {/* <div className="heading-font">HELLO WORLD THIS IS HEADER</div>
        <div className="paragraph-font">HELLO WORLD THIS IS PARAGRAPH</div> */}
          <Navbar/>
          <Main/>
          <Button/>
         
      </div>
    </div>
  );
}

export default App;