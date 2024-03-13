// src/App.jsx
import './App.css';
import background from './images/discord-background.png'
import menu from './images/menu-icon.png'
import logo from './images/discord-logo-white.png'
const App = () => {
  return (
    <div className='App'>
      <div className='body'>
        <div className='navBar'>
        <img className='logo' src={logo} alt='logo-discord'/>
          <img className='menu' src={menu} alt='menu-logo'/>
          </div>
          <h2>Create a Server</h2>
          <p>Start by making a new server. You can invite your friends and grow your community together.</p>
        </div>
        <div className="App-users">
          
          <h2>Join a Server</h2>
          <p>Join a server and start connecting with people who share your interests. You can also join servers created by your friends.</p>
        </div>
    </div>
   
  )}

export default App;