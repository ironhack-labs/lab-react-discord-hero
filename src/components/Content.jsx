import sideImage from "../assets/discord-background.png"

function Content() {
  return (
    <div className="contentContainer">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ... where you can belong to a school club, a gaming group, or a
        worldwide art community. Where just you and a handful of friends can
        spend time together. A place that makes it easy to talk every day and
        hang out more often
      </p>
<div className="discord-buttons">
      <button>Download for Mac</button>
      <button>Open Discord in your Browser</button>
      </div>
      <div className="dscImage">
          <img src={sideImage} alt="Image" />
      </div>
    </div>
  );
}
export default Content;
