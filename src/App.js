import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import sunIcon from "./img/sun.png";
import moonIcon from "./img/Moon.png";

import Col from "react-bootstrap/Col";

import CV from "./components/Cv";
import { Container } from "react-bootstrap";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container className={isDarkMode ? "dark-mode" : ""}>
      <main>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={isDarkMode ? moonIcon : sunIcon}
            alt={isDarkMode ? "Moon" : "Sun"}
            style={{
              height: 54,
              background: "transparent",
              position: "absolute",

              right: 10,
              cursor: "pointer",
            }}
            onClick={toggleDarkMode}
          />
        </Col>
        <Header isDarkMode={isDarkMode} />
        <AboutMe />
        <MySkills />
        <Projects />
        <CV />
        <Contacts isDarkMode={isDarkMode} />
      </main>
    </Container>
  );
}

export default App;
