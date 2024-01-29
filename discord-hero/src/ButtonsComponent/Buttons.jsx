import "./Buttons.css";
import discord_background_img from "../assets/discord_background_img.png";
export default function Buttons() {
	return (
		<div className="wrapper">
			<div className="download">
				<div className="mac">
					<p>Download for Mac</p>
				</div>
				<div className="browser">
					<p>Open Discord in your browser</p>
				</div>
			</div>
			<div className="party-image">
				<img src={discord_background_img} alt="" />
			</div>
		</div>
	);
}
