import "./App.css";
import bgImage from "./assets/discord-background.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	return (
		<div
			className="app"
			style={{backgroundImage:"url(" + bgImage + ")"}}
		>
			<Navbar />
			<main>
				<Hero />
			</main>
		</div>
	);
}

export default App;
