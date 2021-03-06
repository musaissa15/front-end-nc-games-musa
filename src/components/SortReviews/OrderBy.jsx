import React from "react";

const OrderBy = ({ setOrderByValue, setSearchTerm, sortByValue }) => {
	const handleAscClick = (e) => {
		setSearchTerm({ sort_by: sortByValue, order: e.target.value });
		setOrderByValue(e.target.value);
	};

	const handleDescClick = (e) => {
		setSearchTerm({ sort_by: sortByValue, order: e.target.value });
		setOrderByValue(e.target.value);
	};

	return (
		<>
			<button onClick={handleAscClick} value="asc" className="order-btn">
				Ascending
			</button>
			<button onClick={handleDescClick} value="desc" className="order-btn">
				Descending
			</button>
		</>
	);
};

export default OrderBy;
