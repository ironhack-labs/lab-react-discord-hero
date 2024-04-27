import "./App.css";
import Navbar from "./Navbar.jsx";
import Image from "./Image.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Content />
      </div>
      <br />
      <div className="imgDiscord">
        <Image />
      </div>
    </>
  );
}

export default App;
