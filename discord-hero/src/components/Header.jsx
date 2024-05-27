import React from "react";
import discordBackground from "../assets/discord-background.png"

function Header() {
  return (
    <>
    <div className="landing-page">
    <div className="header">
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
      <button id="download-btn">Download for Mac</button>
      <button id="open-btn">Open Discord in your browser</button>
    </div>
    <div className="background">
      <img src={discordBackground} alt="discordBackground"/>
    </div>
    </div>
    </>
  );
}

export default Header;
