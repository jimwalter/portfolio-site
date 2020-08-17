import React from "react";
import "./About.css";
import headshot from "../assets/images/headshot_jw.JPG";

function About() {
  return (
    <div className="section">
      <h2 className="headline">About</h2>
      <div className="about-title">
        <h3>Hi! I'm Jim</h3>
        <img className="headshot" src={headshot} alt="Jim Walter headshot" />
      </div>
      <div className="about-body">
        <p>
          I’m a full stack software engineer with a passion for creating solutions to complex problems and working on
          ambitious teams. Before coding, I developed a unique perspective from six years of working as a manufacturing
          engineer where I strived to find the best way to make things.
        </p>
        <p>
          I have always been a curious person - I love digging into a new topic and expanding my knowledge. Over the
          last few years I have made it a habit to learn something new everyday. It is through this curiosity that I
          found software. For me, very few things can match the satisfaction of finding a solution to a challenging
          problem.
        </p>
        <p>
          When I’m not coding, I try to enjoy all of Colorado's unique activities as much as I can. You can find me
          playing volleyball in Wash Park, taking in a ball game at Coors Field, hitting the slopes in Summit County or
          trying a new restaurant or brewery in RiNo.
        </p>
        <p>
          If you’re looking to add an experienced, creative problem solver to your development team, please reach out!
          You can email me through my <a href="#contact">Contact Section</a> or message me directly on LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default About;
