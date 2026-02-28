// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png" 
      className="logo"
      alt="logo"
      />

      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
      className="Hamburger"
      alt="menu"
      />

      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png" 
      className="bottom-right"
      alt="img"
      />
    
    <header className="header">
        IMAGINE A PLACE...
    </header>

    <p className="paragraph">
      ...where you can belong to a school club, a gaming group, or a 
      worldwide art community. Where just you and a handful of 
      friends can spend time together. A place that makes it easy to
      talk every day and hang out more often.
    </p>

    <button className="button1"> 
      Download for Mac 
    </button>

    <button className="button2">
      Open Discord in your Browser
    </button>
    </div>
    
  );
}



export default App;