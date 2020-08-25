import React from "react";
import "./Experience.css";

import data from "../json_experience.json";
import resume from "../assets/jim_walter_resume.pdf";

import arrow from "../assets/images/arrow.png";
import unl from "../assets/images/unl_eng.jpg";
import plc from "../assets/images/plc.jpg";
import galv from "../assets/images/galvanize.png";
import giide from "../assets/images/giide.png";
import download_icon from "../assets/icons/download.png";

import js from "../assets/icons/skills/js.jpeg";
import aws from "../assets/icons/skills/aws.jpeg";
import mongodb from "../assets/icons/skills/mongodb.png";
import mySQL from "../assets/icons/skills/mySQL.png";
import nodejs from "../assets/icons/skills/nodejs.png";
import postgreSQL from "../assets/icons/skills/postgreSQL.png";
import reactrouter from "../assets/icons/skills/react-router-logo.png";
import reactjs from "../assets/icons/skills/reactjs.jpeg";
import redis from "../assets/icons/skills/redis.png";
import git from "../assets/icons/skills/git.png";
import enzyme from "../assets/icons/skills/enzyme.png";
import jest from "../assets/icons/skills/jest.jpeg";
import htmlcss from "../assets/icons/skills/htmlcss.jpeg";

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
          <img src={plc} alt="small PLC module" />
          <img className="arrow" src={arrow} alt="downward pointing arrow" />
          <img src={galv} alt="Galvanize orange logo" />
          <img className="arrow" src={arrow} alt="downward pointing arrow" />
          <img src={giide} alt="Giide dots logo" />
        </div>
        <a href={resume} className="download" download="jim_walter_resume">
          <p className="subexp">Click to download my resume</p>
          <img src={download_icon} alt="download from cloud icon" />
        </a>
      </div>
      <h2 className="tools">I have experience using...</h2>
      <div className="exp-grid">
        <div className="exp-item">
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="exp-item">
          <img src={reactjs} alt="" />
          <p>React.js</p>
        </div>
        <div className="exp-item">
          <img src={aws} alt="" />
          <p>AWS</p>
        </div>
        <div className="exp-item">
          <img src={git} alt="" />
          <p>Git</p>
        </div>
        <div className="exp-item">
          <img src={nodejs} alt="" />
          <p>Node.js</p>
        </div>
        <div className="exp-item">
          <img src={reactrouter} alt="yikes" />
          <p>React Router</p>
        </div>
        <div className="exp-item">
          <img src={mySQL} alt="" />
          <p>MySQL</p>
        </div>
        <div className="exp-item">
          <img src={postgreSQL} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="exp-item">
          <img src={mongodb} alt="" />
          <p>MongoDB</p>
        </div>
        <div className="exp-item">
          <img src={redis} alt="" />
          <p>Redis</p>
        </div>
        <div className="exp-item">
          <img src={enzyme} alt="" />
          <p>Enzyme</p>
        </div>
        <div className="exp-item">
          <img src={jest} alt="" />
          <p>Jest</p>
        </div>
        <div className="exp-item">
          <img src={htmlcss} alt="" />
          <p>HTML &amp; CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
