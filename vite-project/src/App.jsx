// src/App.jsx
import "./App.css";
import Navbar from "./Components/Navbar";
import Headline from "./Components/Headline";
import Paragraph from "./Components/Paragraph";
import LightButton from "./Components/LightButton";
import DarkButton from "./Components/DarkButton";
import Image from "./Components/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <Paragraph />
      <LightButton />
      <DarkButton />
      <Image />
    </div>
  );
}

export default App;
