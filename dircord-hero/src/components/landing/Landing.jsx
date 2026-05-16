import Button from "../button/button";
import landingPicture from "/src/assets/images/discord-background.png";

function LandingPage() {
  return (
    <div className="landing">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.{" "}
      </p>
      <div>
        <Button color="white" text="Download for Mac" />
        <Button color="black" text="Open Discord in your browser" />
      </div>
      <img src={landingPicture} alt="background Picture" />
    </div>
  );
}

export default LandingPage;
