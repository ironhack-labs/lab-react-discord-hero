import "./App.css";
import Background from "./components/Background";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content />
      <Background />
      <Footer />
    </div>
  );
}

export default App;