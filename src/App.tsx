import Navbar from "./components/Navbar/Navbar.tsx";
import Text from "./components/Text/Text.tsx";
import Button from "./components/Button/Button.tsx";

import "./App.css";

import image from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Text />
        <Button />
        <img src={image} alt="image" className="image" />
      </div>
    </div>
  );
}

export default App;
