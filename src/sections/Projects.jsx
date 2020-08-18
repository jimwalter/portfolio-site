import React from "react";
import "./Projects.css";

import giide_1 from "../assets/images/giide_1.png";
import sdc_gif from "../assets/images/sdc_1.gif";
import nea_1 from "../assets/images/NEA_1.png";
import nea_2 from "../assets/images/NEA_2.png";
import nea_3 from "../assets/images/NEA_3.png";

function Projects() {
  return (
    <div className="projects section">
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
        <a className="project-img" href="https://www.giide.fm/" target="_blank" rel="noopener noreferrer">
          <img src={giide_1} alt="img1" />
        </a>
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
        <a
          className="project-img"
          href="https://github.com/SDC-ghrden03/similar-vehicles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sdc_gif} alt="img2" />
        </a>
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
        <a
          className="project-img"
          href="https://neighborly-eats.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nea_1} alt="img3" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
