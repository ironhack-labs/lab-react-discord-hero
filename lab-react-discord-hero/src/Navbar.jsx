import "/src/Navbar.css";
export default function NavComponent() {
	return (
		<div className="navBar">
			<div className="discord-logo">
				<img src="/src/assets/discord-logo-white.png" alt="Discord_Logo" />
			</div>
			<div className="menu">
				<img src="/src/assets/menu-icon.png" alt="Discord_menu" />
			</div>
		</div>
	);
}