// src/App.jsx
import '/src/App.css';
import NavBar from '/src/Navbar.jsx';
import Buttons from '/src/Buttons.jsx';
import Content from '/src/Content.jsx';


const App = () => {
  return (
    <div className="hero-section">
      <NavBar />
      <Content />
      <Buttons />
      </div>
  );
};

export default App;
