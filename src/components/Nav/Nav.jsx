import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/" className="nav-home">
          Home
        </Link>
        <Link to="/reviews" className="nav-reviews">
          Reviews
        </Link>
        <Link to="/users" className="nav-users">Users</Link>
      </nav>
    </div>
  );
};
