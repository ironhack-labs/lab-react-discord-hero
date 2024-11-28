import Navegacion from "./componentes/Navegacion.jsx";

import Texto from "./componentes/Texto.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="fondo">
        <Navegacion />
        <Texto />

        <div id= "contenedor">

          <div>

        <div id="botonA">
          <button id="bA">Download for Mac</button>
        </div>

        <div id="botonB">
          <button id="bB">Open discord in your browser</button>
        </div>

        </div>

       
          <img
            id="imagen"
            src="/src/assets/discord-background.png"
            alt="imagen"
          />
          </div>
        
      </div>
    </div>
  );
}

export default App;
