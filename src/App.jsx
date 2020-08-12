import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import headshot from "./headshot_jw.JPG";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <img src={headshot} alt="Jim Walter headshot" />
        <p>Here's some text</p>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
