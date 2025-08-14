import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="relative w-full font-sans text-white bg-primary">
			<div className="max-w-285 mx-auto">
				<Header />
				<Main />
			</div>
		</div>
	);
}

export default App;
