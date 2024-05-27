import React from "react";
import Background from "../assets/discord-background.png"

const Buttons = () => {
  return (
    <div className="footer">
      <div className="buttons">
        <button className="buttonWhite">Download for Mac</button>
        <button className="buttonBlack">Open Discord in your Browser</button>
      </div>
      <img id="discordBackground" src={Background} alt="background picture" />
    </div>
  );
};

export default Buttons;
