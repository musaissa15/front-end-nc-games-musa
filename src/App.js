import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Routes>
				<Route Route path="/reviews" element={<Reviews />} />
				<Route Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
