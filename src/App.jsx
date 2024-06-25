
import "./App.css"

function App() {
  return (
    <div className="App">
      <ul className="NavBar"> 
        <li> <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png" className='logo react'/></li>
      <li><a> <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png" className='logo'/></a></li> </ul>
      <h1>IMAGINE A <br></br>PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a <br></br>worldwide art community.
        Where just you and a handful of <br></br> friends can spend time together. A place that makes it easy
        to  <br></br>talk every day and hang out more often.
      </p>
      <ul className="buttons">
        <li><button className="white">Download for Mac</button></li>
        <li> <button>Open Discord in your browser</button></li> </ul>
      <li><img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png' /></li>
      
      
    </div>
  );
}

export default App;