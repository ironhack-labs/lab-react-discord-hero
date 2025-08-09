// src/App.jsx
import './App.css';
import Header from './components/header';
import Button from './components/button';


function App() {
  return (
    <div>
      <Header logo= "./discord-logo-white.png" menu= "./menu-icon.png"/>
      
      <h1 id="heroText">IMAGINE A PLACE...</h1>
      <p id="heroP">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <img src="./discord-background.png" alt="discord-background-image" id="backgroundImg"/>
      <div id="buttons">
      <Button id="button1" text="Download for Mac"  />
      <Button id="button2" text="Open Discord in your browser" />
      </div>
    </div>
  );
}

export default App;