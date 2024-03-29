import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { getUsers } from "../../utils/Api";

export default function Users() {
	const [allUsers, setAllUsers] = useState([]);
	const loggedInUser = useContext(UserContext);

	useEffect(() => {
		getUsers().then((usersFromApi) => {
			setAllUsers(usersFromApi);
		});
	}, []);

	return (
		<div className="all-users-container">
			<ul>
				
					{allUsers.map((user) => {
						return (
							<li key={user.username}>
								<div className="user-container">
									<h4 className="user-username">{user.username}</h4>
									<img
										src={user.avatar_url}
										alt={user.username}
										className="user-img"
									/>
									<button
										className="user-button"
										onClick={() => {
											loggedInUser.setUser(user);
										}}
									>
										Login as {user.name}
									</button>
								</div>
							</li>
						);
					})}
				
			</ul>
		</div>
	);
}
