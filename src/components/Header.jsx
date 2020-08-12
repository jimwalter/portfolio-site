import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="logo">Jim Walter</h1>
      <p className="sub">Software Engineer, Maker, Problem Solver</p>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
