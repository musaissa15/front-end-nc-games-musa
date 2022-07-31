import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export const MainNav = () => {
 
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container className="container">
					<Navbar.Brand href="/" className="nav-font">
						NC-GAMES
					</Navbar.Brand>
					<Nav >
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/reviews">Reviews</Nav.Link>
						<Nav.Link href="/users">Users</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
