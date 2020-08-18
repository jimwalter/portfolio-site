import React from "react";
import "./Header.css";
import headshot from "../assets/images/headshot_jw.JPG";

function Header() {
  return (
    <header id="home" className="header">
      <div className="header-content">
        <h1 className="logo">JIM WALTER</h1>
        <p className="sub">Software Engineer // Maker // Problem Solver</p>
      </div>
      <img className="me" src={headshot} alt="Jim Walter headshot" />
    </header>
  );
}

export default Header;
