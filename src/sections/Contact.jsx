import React from "react";
import "./Contact.css";
import emailLogo from "../assets/icons/gmail_icon.png";
import LinkedInLogo from "../assets/icons/linked_icon.png";
import githubLogo from "../assets/icons/github_icon.png";

function Contact() {
  return (
    <div className="contact section">
      <h2 className="headline">Contact</h2>
      <div className="contacts">
        <div className="contact-item">
          <a href="mailto: jimwalter13090@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="contact-link">
              <img src={emailLogo} alt="email icon"></img>
              <p>Send Email</p>
            </div>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/jimwalter01/" target="_blank" rel="noopener noreferrer">
            <div className="contact-link">
              <img src={LinkedInLogo} alt="LinkedIn logo" />
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/jimwalter" target="_blank" rel="noopener noreferrer">
            <div className="contact-link">
              <img src={githubLogo} alt="LinkedIn logo"></img>
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
