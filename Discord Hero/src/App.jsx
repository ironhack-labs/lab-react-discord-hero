// src/App.jsx
import './App.css';
import logo_img from './assets/discord-logo-white.png';
import menu_img from './assets/menu-icon.png';
import background_img from './assets/discord-background.png'


function App() {
  return (
    <div className="App">
      <img src={logo_img} alt="discord-logo" className='logo_img'/>
      <img src={menu_img} alt="discord-logo" className='menu_img'/>
      <img src={background_img} alt="discord-bg" className='bg_img'/>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <div className='mac'>Download For Mac</div>
      <div className='open'>Open Discord in you browser</div>
    </div>
  );
}

export default App;