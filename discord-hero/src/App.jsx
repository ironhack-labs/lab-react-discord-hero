import "./App.css";
import Buttons from "./ButtonsComponent/Buttons";
import Content from "./ContentComponent/Content";
import NavComponent from "./NavComponent/navComponent";
function App() {
	return (
		<div className="card">
			<NavComponent />
			<Content />
			<Buttons />
		</div>
	);
}

export default App;
