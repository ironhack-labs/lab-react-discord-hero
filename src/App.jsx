import "./App.css";
import Header from "./components/Header.jsx";
import TextSection from "./components/TextSection.jsx";
import Buttons from "./components/Buttons.jsx";
import backgroundImage from "./assets/discordBackground.png";

const ImageStyles = {
  position: "absolute",
  height: "180px",
  right: "0px",
  bottom: "0px"
};

const AppStyles = {
  width: "700px",
  height: "auto",
  position: "relative"
}


function App() {
  return (
    <div className="App" style={AppStyles}>
      <Header />
      <TextSection />

        <span><Buttons /></span>
        <img
          src={backgroundImage}
          alt="Discord Background Image"
          style={ImageStyles}
        />
    </div>
  );
}

export default App;
