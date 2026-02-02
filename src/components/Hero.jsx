import Header from "./Header.jsx";
import backgroundImg from "../assets/discord-background.png";

function Hero() {
  return (
    <section className="hero">
      <Header />

      <div className="hero-content">
        <h1 className="hero-title">IMAGINE A PLACE...</h1>

        <p className="hero-text">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="buttons">
          <button className="btn white">Download for Mac</button>
          <button className="btn dark">Open Discord in your browser</button>
        </div>
      </div>

      <img className="illustration" src={backgroundImg} alt="Discord illustration" />
    </section>
  );
}

export default Hero;
