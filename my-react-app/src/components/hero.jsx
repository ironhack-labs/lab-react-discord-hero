import Buttons from "./buttons";
function Hero(){
    return (
      <div className="hero">
        <h1><span>Imagine a</span><span>place...</span></h1>
        <p>
          ...where you can belong to a school club, a gaming group or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <Buttons />
      </div>
    );
}

export default Hero;