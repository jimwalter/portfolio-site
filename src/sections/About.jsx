import React from "react";

import "./About.css";
import data from "../json_about.json";

import headshot from "../assets/images/headshot_jw.JPG";

function About() {
  return (
    <div className="about section">
      <h2 className="headline">About</h2>
      <div className="about-title">
        <h3 className="title">Hi, I'm Jim!</h3>
        <img className="headshot" src={headshot} alt="Jim Walter headshot" />
      </div>
      <div className="about-body">
        {data.body.map((text) => (
          <p key={text.key}>{text.copy}</p>
        ))}
      </div>
    </div>
  );
}

export default About;
