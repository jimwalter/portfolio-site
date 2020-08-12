import React from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Projects />
        <Resume />
        <About />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;
