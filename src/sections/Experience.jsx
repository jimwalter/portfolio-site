import React from "react";
import "./Experience.css";
import data from "../json_experience.json";

import resume from "../assets/jim_walter_resume.pdf";
import download_icon from "../assets/icons/download.png";

function Experience() {
  return (
    <div className="experience section">
      <h2 className="headline">Experience</h2>
      <div className="experience-body">
        <div className="experience-leader">
          {data.body.map((text) => (
            <p key={text.key}>{text.copy}</p>
          ))}
        </div>
        <a href={resume} className="download" download="jim_walter_resume">
          <p className="subexp">Click to download my resume</p>
          <img src={download_icon} alt="download from cloud icon" />
        </a>
      </div>
    </div>
  );
}

export default Experience;
