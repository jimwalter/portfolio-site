import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navigation">
      <nav>
        <a href="#home" onClick={() => window.scrollTo(0, 0)}>
          Home
        </a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Nav;
