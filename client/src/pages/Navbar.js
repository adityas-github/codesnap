import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#007bff", padding: "1rem", color: "white" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <h2>CodeSnap</h2>
        <div>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/add">Add Snippet</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
