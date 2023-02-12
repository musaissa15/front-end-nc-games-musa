import "./App.css";
import { Home } from "./components/Home/Home";
import { Reviews } from "./components/AllReviews/AllReviews";
import { Route, Routes } from "react-router-dom";
import SingleReview from "./components/SingleReview/SingleReview.jsx";
import Users from "./components/Users/Users";
import "./components/ReviewsByCategories/ReviewsByCategories.css";
import "./components/AllReviews/AllReviews.css";
import "./components/Categories/CategoriesNav.css";
import "./components/SingleReview/SingleReview.css";
import "./components/Comments/Comments.css";
import "./components/Users/Users.css";
import "./components/Home/Home.css";
import "./components/PostComments/PostComments.css";
import "./components/MainNav/MainNav.css";
import "./components/SortReviews/SortReviews.css";
import "./components/DeleteComments/DeleteComments.css";
import "./components/SortReviews/OrderBy.css";
import { MainNav } from "./components/MainNav/MainNav";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";

function App() {
	const [user, setUser] = useState({
		name: "guest",
		username: "guest",
		avatar_url:
			"https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg",
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className="App">
				<header className="App-header"></header>
				<MainNav />
				<Routes>
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/" element={<Home />} />
					<Route path="/reviews/:review_id" element={<SingleReview />} />
					<Route path="/users" element={<Users />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;
