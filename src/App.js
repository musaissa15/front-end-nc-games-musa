import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Reviews } from "./components/AllReviews/AllReviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import SingleReview from "./components/SingleReview/SingleReview.jsx";
import Users from "./components/Users/Users";
import "./components/Nav/Nav.css";
import "./components/ReviewsByCategories/ReviewsByCategories.css";
import "./components/AllReviews/AllReviews.css";
import "./components/Header/Header.css";
import "./components/Categories/CategoriesNav.css";
import "./components/SingleReview/SingleReview.css";
import "./components/Comments/Comments.css";
import "./components/Users/Users.css";

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
<Nav />
			<Routes  >
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/" element={<Home />} />
				<Route path="/reviews/:review_id" element={<SingleReview />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</div>
	);
}

export default App;
