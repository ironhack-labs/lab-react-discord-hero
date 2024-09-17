// src/App.jsx
import './App.css';
import Buttons from '../components/Buttons';
import NavBar from '../components/NavBar';
import Text from '../components/Text';


function App() {
 
  return (
    <div className="App">

  <div>
    <NavBar/>
  </div>

  <div>
    <Text/>
  </div>

    <div>
      <Buttons/>
    </div>




    </div>
  );
}

export default App;