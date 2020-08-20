import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navigation">
      <div>
        <a href="#home">
          <p className="nav-logo">JW</p>
        </a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Nav;
