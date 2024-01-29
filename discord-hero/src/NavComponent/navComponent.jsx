// import discord_logo_icon from "../assets/discord_logo_icon";
import discord_logo_icon from "../assets/discord_logo_icon.png";
import discord_burger_menu from "../assets/discord_burger_menu.png";
import "./navComponent.css";
export default function NavComponent() {
	return (
		<div className="navBar">
			<div className="icons discord-logo">
				<img src={discord_logo_icon} alt="Discord_Logo" />
			</div>
			<div className="icons menu">
				<img src={discord_burger_menu} alt="Discord_menu" />
			</div>
		</div>
	);
}
