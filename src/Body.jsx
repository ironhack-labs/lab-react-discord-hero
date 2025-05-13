import Botones from "./Botones";
import "./Body.css"

function Body(props) {
  return (
    <div>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <Botones text="Download for Mac" bg="white" textColor="black"/>
      <Botones text="Open Discord in your browser" bg="black" textColor="white"/>

      <img src="./public/discord-background.png" id="logoBack"></img>
    </div>
  );
}

export default Body;
