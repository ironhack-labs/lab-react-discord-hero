import React from 'react';
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <>
    <div className='header'>
      <img src={discordLogo} alt="discordLogo" />
      <img src={menuIcon} alt="menuIcon" />
    </div>
    <div>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a <br />worldwide art community. Where just you and a handful of<br /> friends can spend time together. A place that makes it easy to<br /> talk every day and hang out more often.
      </p>
      <img src={discordBackground} alt="discordBackground" />
    </div>

    </>
  );
}

export default App;
