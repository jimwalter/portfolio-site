import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navigation">
      <div>
        <p className="nav-logo">JW</p>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Nav;
