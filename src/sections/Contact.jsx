import React from "react";
import "./Contact.css";
import emailLogo from "../assets/images/gmail_icon.png";
import LinkedInLogo from "../assets/images/linked_icon.png";
import githubLogo from "../assets/images/github_icon.png";

function Contact() {
  return (
    <div className="contact section">
      <h2 className="headline">Contact</h2>
      <div className="contact-item">
        <a href="mailto: jimwalter13090@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-info">
          <img src={emailLogo} alt="email icon"></img>
          <p>Send Email</p>
        </a>
      </div>
      <div className="contact-item">
        <a
          href="https://www.linkedin.com/in/jimwalter01/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info"
        >
          <img src={LinkedInLogo} alt="LinkedIn logo" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="contact-item">
        <a href="https://github.com/jimwalter" target="_blank" rel="noopener noreferrer" className="contact-info">
          <img src={githubLogo} alt="LinkedIn logo"></img>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
