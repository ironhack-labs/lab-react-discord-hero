import './App.css'
import Navbar from '../src/components/Navbar/Navbar'
import Hero from '../src/components/Hero/Hero'
import Background from './components/background/background';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Background />
    </div>
  );
}

export default App;