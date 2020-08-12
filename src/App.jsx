import React from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./sections/Projects.jsx";
import Resume from "./sections/Resume.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="body">
        <Projects />
        <Resume />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
