import React from "react";
import "./Experience.css";
import data from "../json_experience.json";
import arrow from "../assets/images/arrow.png";
import unl from "../assets/images/unl_eng.jpg";
import carbon from "../assets/images/carbon.jpg";
import plc from "../assets/images/plc.jpg";
import galv from "../assets/images/galvanize.png";

import resume from "../assets/jim_walter_resume.pdf";
import download_icon from "../assets/icons/download.png";

function Experience() {
  return (
    <div className="experience section">
      <h2 className="headline">Experience</h2>
      <div className="experience-body">
        <div className="experience-leader">
          {data.body.map((info) => (
            <p key={info.key}>{info.copy}</p>
          ))}
        </div>
        <div className="experience-img">
          <img src={unl} alt="University of Nebraska Engineering Logo" />
          <img className="arrow" src={arrow} alt="downward pointing arrow" />
          <img src={carbon} alt="woven carbon fiber pattern" />
          <img className="arrow" src={arrow} alt="downward pointing arrow" />
          <img src={plc} alt="small PLC module" />
          <img className="arrow" src={arrow} alt="downward pointing arrow" />
          <img src={galv} alt="Galvanize orange logo" />
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
