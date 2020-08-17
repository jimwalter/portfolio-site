import React from "react";
import "./Footer.css";
import jim from "../assets/images/exp/DSC00650.JPG";
import light from "../assets/images/exp/light3.jpg";
import img1 from "../assets/images/exp/img1.jpg";
import img2 from "../assets/images/exp/img2.jpg";
import img3 from "../assets/images/exp/img3.jpg";

function Footer() {
  return (
    <div className="foot">
      <p>This is the footer</p>

      {/* <img src={jim} alt="" /> */}
      <img src={light} alt="" />
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  );
}

export default Footer;

// footer .test2 {
//   background-image: url("../assets/images/exp/pexels-led-supermarket-577514.jpg");
//   width: 20%;
// footer .test3 {
//   background-image: url("../assets/images/exp/mitchell-V6KsRZviGUU-unsplash\ \(1\).jpg");
