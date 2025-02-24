import backgroundImg from "./assets/discord-background.png";

function Landing() {
  return (
    <section id="section-landing">
      <h1>IMAGINE A PLACE...</h1>
      <p id="text">
        ...where you can belong to a school club, a gaming group, or a worldwid
        eart community. Where just you and a handful of friends can spend time
        together. A place that makes irt easy to talk every day and hang out
        more often.
      </p>
      <div id="div-buttons">
        <button id="mac-button">Download for Mac</button>
        <button id="browser-button">Open Discord in your browser</button>
      </div>
      <img id="backgr-img" src={backgroundImg} alt="" />
    </section>
  );
}

export default Landing;
