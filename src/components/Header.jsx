import React from "react";
import "./Header.css";
import grass from "../assets/videos/trees.mp4";

function Header() {
  return (
    <header id="home" className="header">
      <div className="fullscreen-video-wrap">
        <video src={grass} loop autoPlay muted preload="true"></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="logo">JIM WALTER</h1>
        <p className="sub">Software Engineer // Maker // Problem Solver</p>
      </div>
    </header>
  );
}

export default Header;
