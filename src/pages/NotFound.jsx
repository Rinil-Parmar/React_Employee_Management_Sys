import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "24px", marginBottom: "40px" }}>Page Not Found</p>
      <Link to="/" style={{ fontSize: "18px", color: "blue" }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
