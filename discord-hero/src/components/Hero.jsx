import Education from "../assets/discord-background.png";

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        Imagine a <br />
        Place...
      </h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a <br />
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.
      </p>
      <div id="button-container">
        <button id="button-download"> Download for Mac</button>
        <button id="button-open"> Open Discord in your browser</button>
      </div>
      <img src={Education} alt="education_image" />
    </div>
  );
}

export default Hero;
