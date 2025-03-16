// import React from "react";
import Button from "./Button";
// import background from '../assets/discord-background.png';

function HeroSection(){
return (
<section>
    <div>
        <h1 className="hero-heading">Imagine a place...</h1>
        <p className="hero-subheading">…where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often</p>
        <Button text="Download Now" />
        <Button text="Open Discord in your browser" />
    </div>
</section>
);
}

export default HeroSection;