import React from "react";

import "./Projects.css";
import projects from "../json_projects.json";

import giide_1 from "../assets/screenshots/giide_1.png";
import sdc_gif from "../assets/screenshots/sdc_1.gif";
import nea_1 from "../assets/screenshots/NEA_1.png";

function Projects() {
  var proj = projects.data;
  return (
    <div className="projects section">
      <h2 className="headline">Projects</h2>
      <div className="project left">
        <div className="leader">
          <a href={proj[0].address} target="_blank" rel="noopener noreferrer">
            <h3 className="title">{proj[0].title}</h3>
          </a>
          <p className="description">{proj[0].p1}</p>
          <div className="features">
            <h5>Key Features</h5>
            <p>&#8212; Page Routing using React Router</p>
            <p>&#8212; UI/UX animations using GSAP library</p>
            <p>&#8212; Deployed on AWS S3</p>
            <p>&#8212; Responsive Design</p>
            <p>&#8212; Cross Browser Compatibility</p>
          </div>
        </div>
        <a className="project-img" href={proj[0].address} target="_blank" rel="noopener noreferrer">
          <img src={giide_1} alt="screenshot of Giide.fm website" />
        </a>
      </div>
      <div className="project right">
        <div className="leader">
          <a href={proj[1].address} target="_blank" rel="noopener noreferrer">
            <h3 className="title">{proj[1].title}</h3>
          </a>
          <p className="description">{proj[1].p1}</p>
          <div className="features">
            <h5 className="features">Key Features</h5>
            <p>&#8212; Populated MongoDB &amp; PostgreSQL databases with 10M vehicle records</p>
            <p>&#8212; Created relavent APIs using Node/Express for inherited front end</p>
            <p>&#8212; Tuned DB performance with indexing &amp; Redis caching</p>
            <p className="psub">(400% improvement for Postgres, 150% improvement for MongoDB)</p>
            <p>&#8212; Stress tested using Artillery.io</p>
            <p>&#8212; Achieved 1,000 RPS on locally</p>
            <p>&#8212; Deployed with Docker &amp; AWS</p>
          </div>
        </div>
        <a className="project-img" href={proj[1].address} target="_blank" rel="noopener noreferrer">
          <img src={sdc_gif} alt="img2" />
        </a>
      </div>
      <div className="project left ">
        <div className="leader">
          <a href={proj[2].address} target="_blank" rel="noopener noreferrer">
            <h3 className="title">{proj[2].title}</h3>
          </a>
          <p className="description">{proj[2].p1}</p>
          <div className="features">
            <h5 className="features">Key Features</h5>
            <p>&#8212; Data integration with Yelp Fusion API</p>
            <p>&#8212; </p>
            <p>&#8212; </p>
            <p>&#8212; </p>
            <p>&#8212; </p>
          </div>
        </div>
        <a className="project-img" href={proj[2].address} target="_blank" rel="noopener noreferrer">
          <img src={nea_1} alt="img3" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
