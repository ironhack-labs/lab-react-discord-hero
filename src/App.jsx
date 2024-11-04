// src/App.jsx
import './App.css';
import Background from './components/Background/Background';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';


function App() {
  return (
    <div className="App">

      <NavBar />
      <Section />
      <Background />


    </div>
  );
}

export default App;