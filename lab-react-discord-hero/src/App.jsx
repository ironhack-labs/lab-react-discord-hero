// src/App.jsx
import "./App.css";
import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";

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
        <Button />
        <Button />
      </body>
    </div>
  );
}

export default App;
