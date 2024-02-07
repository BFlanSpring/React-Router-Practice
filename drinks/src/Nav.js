import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="NavContainer">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/blargh">Broken Link</Link></li>
      <li><Link to="/snacks">Snacks</Link></li>
      <li><Link to="/drinks">Drinks</Link></li>
    </ul>
    </div>
  );
}

export default Nav;