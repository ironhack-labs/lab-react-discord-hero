import './App.css';
import logo from './assets/discord-logo-white.png'; // logo de Discord, lo uso arriba a la izquierda
import background from './assets/discord-background.png'; // imagen de fondo, va abajo a la derecha
import menuIcon from './assets/menu-icon.png'; // icono de menú hamburguesa, va arriba a la derecha

// Estructura principal del hero section
function App() {
  return (
    <div className="hero">
      {/* Cabecera con logo a la izquierda y menú a la derecha */}
      <header className="hero-header">
        {/* Logo de Discord */}
        <img src={logo} alt="Discord Logo" className="logo" />
        {/* Icono de menú hamburguesa */}
        <img src={menuIcon} alt="Menu Icon" className="menu" />
      </header>
      {/* Contenido principal: título, texto y botones */}
      <section className="hero-content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <div className="hero-buttons">
          {/* Botón blanco */}
          <button className="btn btn-white">Download for Mac</button>
          {/* Botón oscuro */}
          <button className="btn btn-dark">Open Discord in your browser</button>
        </div>
      </section>
      {/* Imagen de fondo, la coloco abajo a la derecha */}
      <img src={background} alt="Discord Background" className="hero-bg" />
    </div>
  );
}

export default App
