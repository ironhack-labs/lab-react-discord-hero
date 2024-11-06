import hamburgerIcon from "../assets/menu-icon.png";

function Hamburger() {
	return (
		<a className="hamburger">
			<img src={hamburgerIcon} alt="Menu Icon"/>
		</a>
	);
}

export default Hamburger;
