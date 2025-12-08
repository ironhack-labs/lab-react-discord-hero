import "./App.css";
import hero from "./assets/hero.jpg";
import discord from "./assets/discord.jpg";
import hamburger from "./assets/hamburger.jpg";

function App() {
  return (
    <>
      <div className="header">
        <img src={discord} alt="discord" />
        <img src={hamburger} alt="hamburger" />
      </div>

      <div className="hero">
        <h1 className="title">IMAGINE A PLACE...</h1>
        <p className="paragraph">
          ...where you can belong to a school club, a gaming group, or a
          wordwide art community. Where just you and a handfull of friends can
          spend time together. A place tha makes it easy to talk every day and
          hang out more often.
        </p>
        <button className="mac">Download for Mac</button>
        <button className="disc">Open Discord in your browser</button>
      </div>
      <img src={hero} alt="hero" className="hero-img" />
    </>
  );
}

export default App;
