import "./ContainerHero.css";

function ContainerHero() {
  return (
    
    <div className="container-hero">
      <h1>IMAGINE A PLACE... </h1>
      <p>
        ...Where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div>
        <button className="mac-btn">Download for Mac</button>
        <button className="discord-btn">Open Discord in your browser</button>
      </div>
    </div>
  );
}

export default ContainerHero;
