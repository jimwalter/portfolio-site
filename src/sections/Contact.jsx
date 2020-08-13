import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="section">
      <h2 className="headline">Contact</h2>
      <div className="contact-info">
        <img src="" alt="email logo" />
        <h4>email</h4>
        <p>jimwalter13090@gmail.com</p>
      </div>
      <div className="contact-info">
        <img src="../assets/images/socials/linked_icon.png" alt="LinkedIn logo" />
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/jimwalter01/">https://www.linkedin.com/in/jimwalter01/</a>
      </div>
      <div className="contact-info">
        <img src="../assets/images/socials/linked_icon.png" alt="GitHub logo" />
        <h4>GitHub</h4>
        <a href="https://github.com/jimwalter">https://github.com/jimwalter</a>
      </div>
    </div>
  );
}

export default Contact;
