import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myLogo from "./assets/logo.png";
import githubLogo from "./assets/github-mark.svg";
import "./App.css";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="app">
      <h1>Studio Ghibli Memory Card Game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <Game />
      <div className="footer">
        <a href="https://github.com/Michael-Mine" target="_blank">
          <img src={githubLogo} className="githubLogo" alt="GitHub logo" />
        </a>
        <a href="https://mrmine.net/" target="_blank">
          <img src={myLogo} className="myLogo" alt="Mr Mine logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
