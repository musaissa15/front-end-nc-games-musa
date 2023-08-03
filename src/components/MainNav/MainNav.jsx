
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from 'react'
import {UserContext} from '../../Context/UserContext'



export const MainNav = () => {
	const currentUser = useContext(UserContext);
	
	return (
		<div>
			<Navbar>
				<Container className="nav-links">
					<Navbar.Brand className="nav-brand">NC-GAMES</Navbar.Brand>
					<Nav>
						<div>
							<Nav.Link href="/" className="pages">
								Home
							</Nav.Link>
							<Nav.Link href="/reviews" className="pages">
								Reviews
							</Nav.Link>
							<Nav.Link href="/users" className="pages">
								Users
							</Nav.Link>
							<img
									src={currentUser.user.avatar_url}
									alt="user image"
									className='logged-img'
								/>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
