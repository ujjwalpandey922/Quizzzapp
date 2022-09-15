import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        Intuative Quiz Zone
      </Link>
      <hr
        style={{
          border: "1px solid grey",
          width: "100%",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default Header;
