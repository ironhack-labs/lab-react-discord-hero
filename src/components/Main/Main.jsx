import "./Main.css";
import background from "../../assets/discord-background.png";

export default function Main() {
  return (
    <div id="main-div">
      <h1>
        IMAGINE A
        <br />
        PLACE...
      </h1>

      <p>
        ...where you can belong to a school club, a gaming group, or a
        <br />
        worldwide art community. Where just you and a handful of
        <br />
        friends can spend time together. A place that makes it easy to
        <br />
        talk every day and hang out more often.
      </p>

      <div id={"buttons-img"}>
        <div id="buttons-div">
          <button id="button-download">Download for Mac</button>
          <button id="button-open-browser">Open Discord in your browser</button>
        </div>
        <div>
          <img src={background} alt="Discord Logo" id={"image-main"} />
        </div>
      </div>
    </div>
  );
}
