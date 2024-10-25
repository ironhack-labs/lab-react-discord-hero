import mainPageImage from "./assets/discord-background.png";

function Body() {
  return (
    <>
      <div id="body-container">
        <h1>
          IMAGINE A <br />
          PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button id="first-buttom">Download for Mac</button>
        <button id="second-buttom">Open Discord in your browser</button>
      </div>
      <img src={mainPageImage} alt="Main Image" id="body-background-image" />
    </>
  );
}

export default Body;
