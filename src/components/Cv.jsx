// CV.js
import React from "react";
import { saveAs } from "file-saver";

const CV = () => {
  const downloadCV = () => {
    // Imposta il percorso del tuo file CV
    const cvFilePath = `${process.env.PUBLIC_URL}./assets/CV Praticò Gianluca.pdf`;

    // Esegui il download del file
    saveAs(cvFilePath, "CV Praticò Gianluca.pdf");
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "25px" }}>
      <h2 className="cv">Download my CV:</h2>

      <button onClick={downloadCV}>
        <img
          className="cv"
          src="./assets/cv.jpg"
          alt="CV"
          style={{ borderRadius: "50%" }}
        />
      </button>
    </div>
  );
};

export default CV;
