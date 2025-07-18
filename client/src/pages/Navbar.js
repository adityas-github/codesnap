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
          alignContent: "center",
          color: "black",
        }}
      >
        <h2>CodeSnap</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ marginRight: "1rem", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/add"
            style={{ marginRight: "1rem", textDecoration: "none" }}
          >
            Add Snippet
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
