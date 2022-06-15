import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/" className="nav-home">Home</Link>
        <Link to="/reviews" className="nav-reviews">Reviews</Link>
      </nav>
    </div>
  );
};

//fetch categories
//hydrate nav
//get buttons ready
