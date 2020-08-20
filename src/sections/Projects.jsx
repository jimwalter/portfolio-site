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
          <h5 className="features">Key Features</h5>
          <ul>
            <li>Page Routing using React Router</li>
            <li>UI/UX animations using GSAP library</li>
            <li>Deployed on AWS S3</li>
            <li>Responsive Design</li>
            <li>Cross Browser Compatibility</li>
          </ul>
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
          <h5 className="features">Key Features</h5>
          <ul>
            <li>Populated MongoDB and PostgreSQL databases with 10M vehicle records</li>
            <li>Created and connected relavent APIs using Node.js/Express for inherited front end</li>
            <li>
              Tuned DB performance with indexing and Redis caching
              <ul>
                <li>400% improvement for Postgres</li>
                <li>150% improvement for MongoDB</li>
              </ul>
            </li>

            <li>Stress tested database using Artillery.io</li>
            <li>Achieved 1,000 RPS on local Postgres instance</li>
            <li>Containerized and deployed with Docker and AWS</li>
          </ul>
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
          <h5 className="features">Key Features</h5>
          <ul>
            <li>Data integration with Yelp Fusion API</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <a className="project-img" href={proj[2].address} target="_blank" rel="noopener noreferrer">
          <img src={nea_1} alt="img3" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
