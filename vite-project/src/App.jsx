import './App.css';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Button1 from './components/Button/Button1';
import Button2 from './components/Button/Button2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Body />

      <Button1 />

      <br></br>

      <Button2 />

      <Footer />
    </div>
  );
}

export default App;
