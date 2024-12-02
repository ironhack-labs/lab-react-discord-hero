import discordBackground from "../assets/discord-background.png"

function MainSection() {
  return (
    <section className="main-section">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div className="btn-section">
        <button id="for-mac-btn">Download for Mac</button>
        <button id="browser-btn">Open Discord in your browser</button>
      </div>
      <img id="background-img" src={discordBackground} />
    </section>
  );
}

export default MainSection;
