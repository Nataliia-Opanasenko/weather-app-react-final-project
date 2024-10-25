import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://nataliia-opanasenko-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Nataliia Opanasenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Nataliia-Opanasenko/weather-app-react-final-project"
            target="_blank_"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
