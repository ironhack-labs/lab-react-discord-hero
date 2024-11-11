import React from "react";
import Button from "./Button";
import people from "../assets/discord-background.png";

const MainSection = () => {
  return (
    <main className="main">
      <h1>
        IMAGINE A <br></br>
        PLACE...
      </h1>
      <p className="description">
        ...where you can belong to a school club, a gaming group, <br></br>or a
        worldwide art community. Where just you and a handful of <br></br>
        friends can spend time together. A place that makes it easy to<br></br>{" "}
        talk every day and hang out more often.
      </p>
      <div className="buttons">
        <Button text="Download for Mac" variant="primary" />
        <Button text="Open Discord in your browser" variant="secondary" />
      </div>
      <img src={people} alt="Characters" className="characters" />
    </main>
  );
};
export default MainSection;
