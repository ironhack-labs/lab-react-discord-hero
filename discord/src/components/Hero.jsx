import "./Hero.css";
import Button from "./Button";

function Hero() {
	return (
		<article className="hero">
			<h1>Imagine a place...</h1>
			<p>
				...where you can belong to a school club, a gaming group, or a worldwide
				art community. Where just you and a handful of friends can spend time
				together. A place that makes it easy to talk every day and hang out more
				often.
			</p>
			<div className="buttons">
				<Button url="https://www.apple.com" text="Download for Mac" setClass="button" />
				<Button
					url="https://www.google.com"
					text="Open Discord in your browser"
					setClass="button dark"
				/>
			</div>
		</article>
	);
}

export default Hero;
