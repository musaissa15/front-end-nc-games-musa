import React, { useEffect, useState } from "react";
import { getUsers } from "../../utils/Api";
import { Nav } from "../Nav/Nav";
export default function Users() {
  const [theUsers, setTheUsers] = useState([]);
  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setTheUsers(usersFromApi);
    });
  }, []);
  return (
		<div>
	
			<ul>
				{theUsers.map((theUser) => {
					return (
						<li key={theUser.username}>
							<h4>{theUser.username}</h4>
							<img
								src={theUser.avatar_url}
								alt={theUser.username}
								className="user-img"
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
