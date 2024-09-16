import './App.css'
import Nav from './components/nav';
import Content from './components/content'
import bgImg from "./assets/discord-background.png"



function App() {

  return (
    <div className="App">
      <Nav />
      <Content />
      <img id= "background" src={bgImg} alt="menu"/>
    </div>
  );
}

export default App
