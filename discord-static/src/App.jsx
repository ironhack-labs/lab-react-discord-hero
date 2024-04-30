import './App.css';

function App() {
  return (
   <div className='App'>
      <div className='navbar'>
        <img className='navbar-discord-logo' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"></img>
        <img className='navbar-hamburguer' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"></img>
      </div>
      <div className='main-container'>
        <h1>IMAGINE A <br/>PLACE...</h1>
        <div>
          ...where you can belong to a school club, a gaming group, or a <br/>
          worldwhide art community. Where just you and a handful of <br/>
          friends can spend time together. A place that makes it easy to <br/>
          talk every day and hang out more often.
        </div>
        <button className='btn-download-mac'>
          Download for Mac
        </button>
        <button className='btn-open-browser'>
          Open Discord in your browser
        </button>
      </div>
      <img className='background-img' src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png'></img>
   </div>
  );
}

export default App
