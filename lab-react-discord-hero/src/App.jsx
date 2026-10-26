import './App.css';
import Navigation from './components/Navigation';
import HeroText from './components/HeroText';
import HeroButtons from './components/HeroButtons';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <div className="App">

      <Navigation />
      <HeroText />
      <HeroButtons />
      <HeroImage />

      </div>
  );
}

export default App;