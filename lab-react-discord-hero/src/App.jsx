// src/App.jsx
import './App.css';
import Header from "./assets/components/Header.jsx"
import ButtonDownloadMac from './assets/components/ButtonDownloadMac.jsx';
import ButtonOpenBrowser from './assets/components/ButtonOpenBrowser.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Imagine a</h1> 
      <h1>place...</h1>
      <p>
      ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
      </p>
        <div className='buttons'>
          <ButtonDownloadMac/>
          <ButtonOpenBrowser/>
        </div>
        <div className='discord-background'>
          <img src='/src/assets/images/discord-background.png' alt='discord-background'/>
        </div>
    </div>
  );
}

export default App;