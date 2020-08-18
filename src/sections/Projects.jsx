import React from "react";
import "./Projects.css";

import img1 from "../assets/images/exp/img1.jpg";
import img2 from "../assets/images/exp/img2.jpg";
import img3 from "../assets/images/exp/img3.jpg";

function Projects() {
  return (
    <div className="section">
      <h2 className="headline">Projects</h2>
      <div className="project left">
        <div className="leader">
          <a href="https://www.giide.fm/" target="_blank" rel="noopener noreferrer">
            <h3 className="title">Giide.fm Website</h3>
          </a>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi corrupti magnam unde veniam
            cupiditate eos, ducimus, laborum atque molestias possimus sapiente repudiandae hic recusandae accusantium,
            rerum praesentium ex non!
          </p>
        </div>
        <img className="project-img" src={img1} alt="img1" />
      </div>
      <div className="project right">
        <div className="leader">
          <a href="https://github.com/SDC-ghrden03/similar-vehicles" target="_blank" rel="noopener noreferrer">
            <h3 className="title">Used Car Similar Vehicle Service</h3>
          </a>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum, vero, atque enim ex incidunt recusandae
            nihil et, at nesciunt nostrum corporis aut dolores dolorem quod minus blanditiis eum quam?
          </p>
        </div>
        <img className="project-img" src={img2} alt="img2" />
      </div>
      <div className="project left ">
        <div className="leader">
          <a href="https://neighborly-eats.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <h3 className="title">Neighborly Eats App</h3>
          </a>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati vitae inventore, cumque officiis
            placeat ad alias assumenda repudiandae ea omnis delectus aspernatur impedit maiores, voluptatibus non
            necessitatibus mollitia laboriosam?
          </p>
        </div>
        <img className="project-img" src={img3} alt="img3" />
      </div>
    </div>
  );
}

export default Projects;
