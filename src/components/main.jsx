import "./main.css";
import backgroundImg from "../assets/discord-background.png";

function Main() {
  return (
    <article>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a world
        wide art community. Where just you and a handful of friends can spend
        time together. A place that makes it easy to talk every day and hang out
        more often.
      </p>
      <button id="download">Download for Mac</button>
      <button id="open-browser">Open Discord in your browser</button>
      <img src={backgroundImg} alt="background-img" id="background-img" />
    </article>
  );
}

export default Main;
