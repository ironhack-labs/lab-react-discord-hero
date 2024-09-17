import Navbar from "./components/Nav";
import Button from "./components/Button";
import Header from "./components/header";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header
        title={"IMAGINE A PLACE..."}
        subtitle={
          "...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
      />
      <Button id={"button1"} text={"Download for Mac"} />
      <Button text={"Open discord in you browser"} />
      <Image id={"bottom-img"} />
    </div>
  );
}

export default App;
