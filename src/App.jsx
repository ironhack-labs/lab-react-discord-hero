// src/App.jsx
import "./App.css";
import discord from "./assets/discord.png";
import tracos from "./assets/tracos.png";
import people from "./assets/people.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img alt="discord" src={discord} />
        <img alt="tracos" src={tracos} />
      </nav>
      <section>
        <h1>
          IMAGINE A <br /> PLACE...
        </h1>
        <p>
          ... where you can belong to a schoo club, a gamimg group, or a{" "}
          <br></br>
          worldwide art community. Where just you and a handful of <br></br>
          friends can spend time together. A place that makes it easy to{" "}
          <br></br>
          talk every day and hang out more
        </p>
      </section>
      <button>Download for Mac</button>
      <button className="discordBtn">Open Discord in your browser</button>
      <section className="people">
        <img alt="people" src={people} />
      </section>
    </div>
  );
}

export default App;
