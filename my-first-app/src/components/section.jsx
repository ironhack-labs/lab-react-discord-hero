import "../components/section.css"

import imageDiscord from "../../images/discord-background.png"

import ButtonDiscord from "./button";

function SectionDiscord() {
    return (
        <>
            <h1>IMAGINE A PLACE...</h1>
            <p>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <ButtonDiscord name="Download for Mac" />
            <ButtonDiscord name="Open Discord in your browser" />
            <img className="discord-background" src={imageDiscord} alt="background image" />
        </>
    );
}

export default SectionDiscord;