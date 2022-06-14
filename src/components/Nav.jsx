import { Link } from "react-router-dom";
import React from "react";

export const Nav = () => {
	return (
		<div>
			<nav className="nav-ba">
				<Link to="/">Home</Link>
				<Link to="/reviews">Reviews</Link>
			</nav>
		</div>
	);
};
