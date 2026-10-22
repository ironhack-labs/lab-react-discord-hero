import "./DiscordBanner.css";

function DiscordBanner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-title">IMAGINE A PLACE...</h1>

        <p className="banner-text">
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
        </p>

        <div className="banner-buttons">
          <button className="btn primary">Download for Mac</button>
          <button className="btn secondary">Open Discord in your browser</button>
        </div>
      </div>

      <div className="banner-right">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
          alt="Discord Characters"
          className="banner-image"
        />
      </div>
    </div>
  );
}

export default DiscordBanner;
