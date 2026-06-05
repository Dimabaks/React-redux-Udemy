import "./App.css";
import PetInfo from "./components/PethInfo";

function App() {
	return (
		<div className="App">
			<PetInfo animal="cat" age="3" hasPet />
			<PetInfo animal="dog" age="5" />
		</div>
	);
}

export default App;
