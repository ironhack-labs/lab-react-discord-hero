// src/App.jsx
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Mainsection } from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainsection />
    </div>
  );
}

export default App;