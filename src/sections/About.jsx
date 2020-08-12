import React from "react";
import "./About.css";
import headshot from "../assets/images/headshot_jw.JPG";

function About() {
  return (
    <div id="about" className="section">
      <h2 className="headline">About</h2>
      <img src={headshot} alt="Jim Walter headshot" />
      <p>Here's some text</p>
    </div>
  );
}

export default About;
