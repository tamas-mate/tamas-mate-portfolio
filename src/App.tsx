import "./App.css";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import Footer from "./components/ui/Footer";

function App() {
	return (
		<div className="relative w-full font-sans text-white bg-primary">
			<div className="max-w-260 mx-auto">
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
