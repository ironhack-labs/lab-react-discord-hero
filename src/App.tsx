import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <img
        className="background-pict"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
        alt="discord main pict"
      />
    </>
  );
}

export default App;
