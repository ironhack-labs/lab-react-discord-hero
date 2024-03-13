// src/App.jsx

import "./App.css";
import { MyButton } from "./components/MyButton";
import { Navbar } from "./components/Navbar";
// import img from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <body>
        <Navbar />
        <div className="text-block">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            Where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div>
          <MyButton
            text="Download for Mac"
            color="black"
            backgroundColor="white"
            width="10.5%"
          />
          <MyButton text="Open Discord in your browser" width="17%" />
        </div>
      </body>
    </div>
  );
}

export default App;
