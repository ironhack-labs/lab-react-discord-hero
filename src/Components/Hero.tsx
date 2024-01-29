import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="title-container">
        <h1>Imagine a place... </h1>
      </div>
      <div className="text-container">
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="button-container">
      <ButtonLight text="Download for Mac" />
      <ButtonDark text="Open Discord in your browser" />
      </div>
    </>
  );
};

export default Hero;
