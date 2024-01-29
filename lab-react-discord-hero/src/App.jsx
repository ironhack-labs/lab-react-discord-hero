import "./App.css";
import Navbar from "./Navbar/Navbar"; 
import Heading1 from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph"
import CTAs from "./Buttons/Buttons";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading1 />
      <Paragraph />
      <CTAs/>
    </div>
  );
}

export default App;
