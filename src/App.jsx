import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent />
      <BackgroundImage />
      <FooterComponent />
    </div>
  );
}

export default App;
