import backgroundImage from "./assets/discord-background.png";
import React from "react";

export default function Body() {
    return (
        <>
            <div id="body-container">
                <h1 id="title">IMAGINE A PLACE...</h1>
                <p id="body-paragraph">
                    ...where you can belong to a school clubm a gaming group, or a worldwide art community.
                     Where just you and a handful of friends can spend time together.
                     A place that makes it easy to talk every day and hang out more often.
                </p>
                <button id="discord-download-button">Download for Mac</button>
                <button id="discord-open-button">Open Discord in your browser</button>
            </div>
            <img src={backgroundImage} alt="background image" id="body-background-image"></img>
        </>
    )
}