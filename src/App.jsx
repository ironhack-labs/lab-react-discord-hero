import './App.css';
import bckgImage from "./assets/discord-background.png"
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return(
    <div className="App">
      <Header />
      <Main />
      <img src={bckgImage} className="background-img" alt="discord image" />
    </div>
  );
}

export default App;
