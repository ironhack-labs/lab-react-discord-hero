import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="nav-bar">
        <img
          className="dicsord-logo"
          src="./src/assets/discord-logo-white.png"
          alt="white discord logo"
        />
        <img
          className="menu-icon"
          src="./src/assets/menu-icon.png"
          alt="menu icon"
        />
      </div>

      <div className="content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <button className="button-one">Download for Mac</button>
        <button className="button-two">Open Dicsord in you browser</button>

        <img
          className="people-image"
          src="./src/assets/discord-background.png"
          alt="blue background"
        />
      </div>
    </div>
  );
}

export default App;
