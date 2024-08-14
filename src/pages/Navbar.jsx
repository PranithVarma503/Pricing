import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        position: "relative",
        zIndex: 10, // Ensures the navbar is on top of the SVG
      }}
    >
      <Link to="/" className="logo">
        <img src="/logo.png" alt="CloudPano Logo" style={{ height: "40px" }} />
      </Link>
      <a
        href="https://app.cloudpano.com/login"
        style={{
          backgroundColor: "#ff5c97",
          color: "white",
          padding: "8px 16px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Login
      </a>
    </div>
  );
};

export default Navbar;
