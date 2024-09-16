import Encabezado from "./components/Encabezado.jsx";
import Description from "./components/Description.jsx"
import Imagen from "./components/Imagen.jsx";
import Botones from "./components/Botones.jsx";

import './App.css';

function App(){
  return(
    <div className="App">
      <Encabezado/>
      <Description/>
      <Imagen/>
      <Botones/>


    </div>
  );
}

export default App;