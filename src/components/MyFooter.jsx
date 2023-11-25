import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import "../App.css";

const MyFooter = ({ isDarkMode }) => {
  const iconStyle = {
    marginRight: isDarkMode ? "1rem" : "0.5rem",
    color: isDarkMode ? "#fff" : "#2f1c6b",
    fontSize: "54px", // Imposta la dimensione desiderata
  };

  useEffect(() => {
    // Qui puoi eseguire eventuali azioni quando cambia lo stato della dark mode
    console.log("Dark mode is now:", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`my-footer ${isDarkMode ? "dark-mode" : ""}`}>
      <a
        href="https://github.com/Gianlucapratico"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="github" />
      </a>
      <a
        href="https://www.facebook.com/luca.pratico1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook width={"54px"} height={"54px"} />
      </a>
      <a
        href="https://www.linkedin.com/in/gianluca-pratic%C3%B2/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default MyFooter;
