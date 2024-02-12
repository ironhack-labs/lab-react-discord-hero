import pnjDiscord from "../assets/personajes-discord.png";

function Body() {
  const divStyle = {}

  return (
    <div style={divStyle}>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <button>Donwload for Mac</button>
      <button>Oopen Discord in your browser</button>
      <img src={pnjDiscord} width="400px" alt="menu-icon" />
    </div>
  );
}

export default Body;