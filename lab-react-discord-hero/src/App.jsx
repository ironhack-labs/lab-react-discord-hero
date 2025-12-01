// src/App.jsx
import Navbar from './components/navbar/navbar.jsx'
import logo from './assets/images/discord-logo-white.png';
import menu from './assets/images/menu-icon.png';

import MainContent from './components/main-content/main-content.jsx'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar logo={logo} menu={menu}></Navbar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
