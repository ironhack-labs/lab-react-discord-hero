import HeroImage from "../assets/discord-background.png";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <h1 className="title poppins-black">IMAGINE A PLACE...</h1>
        <p className="main-text roboto-regular">
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
        </p>
        <button className="btn btn1 roboto-regular">Download for Mac</button>
        <button className="btn btn2 roboto-regular">Open Discord in your browser</button>
      </div>
      <img className="background-picture" src={HeroImage} alt="discord-picture" />
    </div>
  );
}

export default Hero;
