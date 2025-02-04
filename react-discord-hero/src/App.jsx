// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text'
import Buttons from './components/Buttons'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Text />
      <Buttons/>
      <Footer/>
    </div>
  );
}

export default App;