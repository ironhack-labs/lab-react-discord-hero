import Button from "./Button";
import image from "../assets/discord-background.png";
function Main() {
  return (
    <>
      <main>
        <h1 className="title">Imagine a place...</h1>
        <p>
          ... where you can belong to a school club, a gaming group, or a
          worlwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often
        </p>
        <Button color="white">Download For Mac</Button>
        <Button color="black">Open Discord in your browser</Button>
      </main>
      <div className="bg-image">
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default Main;
