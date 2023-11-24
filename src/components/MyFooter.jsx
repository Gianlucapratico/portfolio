import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import "../App.css";

const MyFooter = ({ isDarkMode }) => {
  const iconStyle = {
    marginRight: isDarkMode ? "1rem" : "0.5rem",
    color: isDarkMode ? "#fff" : "#2f1c6b",
    fontSize: "3rem", // Imposta la dimensione desiderata
  };

  const linkStyle = {
    textDecoration: "none",
    color: isDarkMode ? "#fff" : "#000",
  };

  useEffect(() => {
    // Qui puoi eseguire eventuali azioni quando cambia lo stato della dark mode
    console.log("Dark mode is now:", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`my-footer ${isDarkMode ? "dark-mode" : ""}`}>
      <a
        href="https://github.com/Vallerga"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        <AiFillGithub style={iconStyle} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100004782134748"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        <BsFacebook style={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/antonio-vallerga-2612a468/"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        <BsLinkedin style={iconStyle} />
      </a>
    </div>
  );
};

export default MyFooter;
