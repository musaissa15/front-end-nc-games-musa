import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Reviews } from "./components/AllReviews/AllReviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import "./components/Nav/Nav.css";
import "./components/ReviewsByCategories/ReviewsByCategories.css";
import "./components/AllReviews/AllReviews.css";
import "./components/Header/Header.css";
import "./components/Categories/CategoriesNav.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Nav />

			<Routes>
				<Route Route path="/reviews" element={<Reviews />} />
				<Route Route path="/" element={<Home />} />
				<Route Route path="/reviews/:category" element={<Reviews />} />
			</Routes>
		</div>
	);
}

export default App;
