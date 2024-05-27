import banner from "../assets/discord-background.png"
const Banner = () => {
  return (
    <div className="banner">
      <h1> Imagine a Place ...</h1>
      { <h3> ... where you can belong to a school  club, a gaming group , or a 
        <br></br>
         worldwide art community. where just you and a handfull off 
         <br></br>
         friends can spend time together. a place that makes it easy to 
         <br></br>
         talk everyday and hang out more often  </h3> }
      <button id="mac">Download for mac</button>
      <button id= "browser"> open Discord in your Browser</button>
      <img src={banner} alt="banner" id="bn"/>
    </div>
  );
};
export default Banner;