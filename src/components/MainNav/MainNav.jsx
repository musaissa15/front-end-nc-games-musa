// import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";



export const MainNav = () => {
 
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
						</div>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
