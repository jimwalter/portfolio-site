import React from "react";
import "./Projects.css";
import image from "../assets/images/headshot_jw.JPG";

function Projects() {
  return (
    <div id="projects" className="section">
      <h2 className="headline">Projects</h2>
      <div className="project left">
        <div className="leader">
          <h3 className="title">Project One</h3>
          <p className="description">This is the description of project 1</p>
        </div>
        <img className="project-img" src={image} alt="img1" />
      </div>
      <div className="project right">
        <div className="leader">
          <h3 className="title">Project Two</h3>
          <p className="description">This is the description of project 2</p>
        </div>
        <img className="project-img" src={image} alt="img2" />
      </div>
      <div className="project left ">
        <div className="leader">
          <h3 className="title">Project Three</h3>
          <p className="description">This is the description of project 3</p>
        </div>
        <img className="project-img" src={image} alt="img3" />
      </div>
      <div className="project right">
        <div className="leader">
          <h3 className="title">Project Four</h3>
          <p className="description">This is the description of project 4</p>
        </div>
        <img className="project-img" src={image} alt="img4" />
      </div>
    </div>
  );
}

export default Projects;
