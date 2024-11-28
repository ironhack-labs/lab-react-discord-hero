// components/MainContent.js
import Button from "./Button";
import "/src/css/main-content.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together.
      </p>
      <div className="buttons">
        <Button text="Download for Mac" />
        <Button text="Open Discord in your browser" />
      </div>
      <div className="illustration">
        <img
          src="/src/assets/images/discord-background.png"
          alt="Community Illustration"
        />
      </div>
    </main>
  );
};

export default MainContent;
