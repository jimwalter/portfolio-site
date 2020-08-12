import React from "react";
import "./App.css";
import headshot from "./headshot_jw.JPG";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <body>
        <img src={headshot} alt="" />
        <p>Here's some text</p>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
