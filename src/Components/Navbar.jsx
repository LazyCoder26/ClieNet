import React from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="😉">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-links">
            <li className="nav-link">work</li>
            <li className="nav-link">team</li>
            <li className="nav-link">process</li>
          </ul>
        </div>
        <div className="contact">
          <p className="btn">let's talk</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
