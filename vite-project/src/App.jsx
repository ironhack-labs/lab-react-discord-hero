
import './App.css';
import Background from "./assets/discord-background.png";
import Menu from "./assets/menu-icon.png";
import Logo from "./assets/discord-logo-white.png";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {

  return (
      <div className="App">
        <nav>
        <img className= "Logo" src={Logo} alt="Discord logo"/>
        <img className="Menu-icon" src={Menu} alt="Menu icon"/>
        </nav>
        <Header />
        <Main />
        <img className='Background' src={Background} alt="Discord buddies drawing"/>
      </div>
    )
}

export default App

