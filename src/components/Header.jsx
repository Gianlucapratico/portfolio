// Header.js
import React from "react";

const Header = ({ isDarkMode }) => {
  return (
    <header className={isDarkMode ? "dark-mode" : ""}>
      <h1 className="animated-header">
        <svg
          className="nome"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 60"
        >
          <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">
            Gianluca Praticò
          </text>
        </svg>
      </h1>

      <img
        src={`${process.env.PUBLIC_URL}./assets/GianlucaPraticò.jpg`}
        alt="Pic"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />

      <h2>Junior Full Stack Developer</h2>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
