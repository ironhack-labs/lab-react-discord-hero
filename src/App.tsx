// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>d</p>
//     </>
//   )
// }

// export default App

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
      <div className="nav">
        <img
          className="img1"
          src="./src/assets/discord-logo-white.png"
          alt="discord logo"
        ></img>
        <img
          className="img2"
          src="./src/assets/menu-icon.png"
          alt="menu icon"
        ></img>
      </div>

      <div className="div3">


      <h1 className="h1">IMAGINE A PLACE...</h1>
      <p className="p">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      </div>









      <div className="div2">
        <div className="buttons">
          <button className="b1" type="button">
            Download for Mac
          </button>
          <button className="b2" type="button">
            Open Discord in your browser
          </button>
        </div>

        <img
          className="img3"
          src="./src/assets/discord-background.png"
          alt="discord background"
        ></img>
      </div>
      </div>
    </>
  );
}

export default App;
