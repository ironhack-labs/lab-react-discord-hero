import React from "react";
import herobanner from "../assets/DiscordBackground.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        IMAGINE A <br />
        PLACE...
      </h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <button>Download for Mac</button>
      <button className="btn-neg">Open Discord in your browser</button>
      <img className="herobanner" src={herobanner} alt="banner" />
    </div>
  );
};

export default Hero;
