import React from "react";
import footer from "../assets/Discord Background.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        IMAGINE A <br />
        PLACE...
      </h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a <br />{" "}
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.
      </p>
      <button>Download for Mac</button>
      <button className="button2">Open Discord in your browser</button>
      <img className="footer" src={footer} alt="footer" />
    </div>
  );
};

export default Hero;
