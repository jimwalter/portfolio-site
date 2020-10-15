import React from "react";
import "./Header.css";
import trees from "../assets/videos/trees.mp4";
import poster from "../assets/videos/poster.png";

function Header() {
  return (
    <header id="home" className="header">
      <div className="fullscreen-video-wrap">
        <video src={trees} poster={poster} loop autoPlay muted preload="true"></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="logo">JIM WALTER</h1>
        <p className="sub">{"Software & Sales Engineer"}</p>
      </div>
    </header>
  );
}

export default Header;
