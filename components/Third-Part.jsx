import "./Third-Part.css";

function ThirdPart() {
  return (
    <div id="third-part-container">
      <div id="btn-container">
        <button id="btn-mac">Download for Mac</button>
        <button id="btn-discord">Open Discord in your browser</button>
      </div>
      <div id="img-container">
        <img
          id="third-image"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
          alt="image-students"
        />
      </div>
    </div>
  );
}

export default ThirdPart;
