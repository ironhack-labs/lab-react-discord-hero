import React from "react";
import backImage from "../assets/discord-background.png";

const Mainsection = () => {
  return (
    <div>
      <h1>
        IMAGINE A <br />
        PLACE...
      </h1>
      <p className="description">
        ...where you can belong to a school club, a gaming group, or a <br />
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.
      </p>
      <div class="button1">Download for Mac</div>
      <div class="button2">Open Discord in your browser</div>
      <div>
        <img src={backImage} alt="" class="discordback" />
      </div>
    </div>
  );
};
export default Mainsection;
