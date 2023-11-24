import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import sunIcon from "./img/sun.png";
import moonIcon from "./img/Moon.png";

import Col from "react-bootstrap/Col";

import CV from "./components/Cv";

const useStyles = makeStyles({
  darkModeToggle: {
    position: "absolute",
    top: 20,
    right: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
    borderRadius: 5,
    cursor: "pointer",
    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const classes = useStyles();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#212121" : "#D5E0FF", // Cambia i colori di sfondo qui
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Contacts />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
