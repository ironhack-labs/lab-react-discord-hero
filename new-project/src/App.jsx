import "./App.css";
import Heading from "./components/heading";
import Menu from "./components/menu";
import Title from "./components/title";
import Paragraph from "./components/paragraph";
import Background from "./components/background-img";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <Heading />
      <Menu />
      <Title />
      <Paragraph />
      <Background />
      <Button text="Download for Mac" />
      <Button text="Open Discord in your browser" />
    </div>
  );
}

export default App;
