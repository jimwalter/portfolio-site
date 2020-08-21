import React from "react";
import "./Experience.css";
import resume from "../assets/jim_walter_resume.pdf";
import download_icon from "../assets/icons/download.png";
function Experience() {
  return (
    <div className="experience section">
      <h2 className="headline">Experience</h2>
      <div className="experience-body">
        <div className="experience-leader">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima perferendis placeat possimus dignissimos,
            facere illo eos, excepturi distinctio aperiam molestiae amet quos vel voluptatibus.
          </p>
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
