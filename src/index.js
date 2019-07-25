import React from "react";
import ReactDOM from "react-dom";
import Player from "./endava-player";
import logo from "./assets/Endava_Logo_RGB.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img class="logo" src={logo} alt="logo" />
      <h1>Green-Comm</h1>
      <h2>Endava's comm player</h2>
      <Player />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
