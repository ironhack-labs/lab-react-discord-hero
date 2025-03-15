import { ButtonDark } from "./ButtonDark";
import { ButtonLight } from "./ButtonLight";

export function Content() {
  return (
  <>
    <div className="text-container">
      <h1>Imagine a place...</h1>
      <p>…where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
    </div>
    <div className="button-container">
      <ButtonLight />
      <ButtonDark />
    </div>
  </>
  );
}
