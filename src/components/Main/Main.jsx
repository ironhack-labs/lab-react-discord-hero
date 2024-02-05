// ? styles
import Button from "../Button/Button";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Imagine a place ...</h1>
      <p className="main__text">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>

      <Button>Download for Mac</Button>

      <Button isDark>Open Discord in your browser</Button>
    </main>
  );
}
