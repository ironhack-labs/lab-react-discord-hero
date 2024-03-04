import "./App.css";
import logo from "./assets/Discord.png";
import menu from "./assets/Menu.png";
import people from "./assets/People.png";

function App() {
	return (
		<div className="App">
			<header>
				<img className="logo" src={logo} alt="logo" />
				<img className="menu" src={menu} alt="Menu" />
			</header>
			<div className="information">
				<h1 className="tittle">Imagine a Place...</h1>
				<p>
					...where you can belong to a school, a gaming group, or a worldwide
					art community. Where jsut you and a handfull of friends can spend time
					together. A place that makes it easy for you to talk every day or just
					hang out more often.
				</p>
			</div>
			<div className="link">
				<div className="butons">
					<button>Download for mac</button>
					<button className="dark">Open Discord in your browser</button>
				</div>
				<img className="people" src={people} alt="People" />
			</div>
		</div>
	);
}

export default App;
