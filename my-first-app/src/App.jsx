import './App.css';

import Button from './components/Button';
import NavBar from './components/NavBar';
import Text from './components/Text';

function App() {

  return (
    <div className="App"> {/* Aqui va ir todo el contenido de la app  */}
      <NavBar />
      <Text />
      <Button />
    </div>
  )
}

export default App;
