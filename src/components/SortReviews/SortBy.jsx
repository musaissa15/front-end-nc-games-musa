import React from "react";

const SortBy = ({ sortByValue, setSortByValue, setSearchTerm }) => {
	const handleChange = (e) => {
		setSearchTerm({ sort_by: e.target.value });
		setSortByValue(e.target.value);
	};

	return (
		<>
			<label>
				sort by:
				<select
					className="dropdown"
					onChange={handleChange}
					value={sortByValue}
				>
					<option value="votes">Votes</option>
					<option value="created_at">Date</option>
					<option value="owner">Owner</option>
					<option value="title">Title</option>
				</select>
			</label>
		</>
	);
};

export default SortBy;
