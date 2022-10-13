import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <Link to="/">
          <FiHome />
          Home
        </Link>
        <Link to="/add">
          <FiPlusCircle />
          Add
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
