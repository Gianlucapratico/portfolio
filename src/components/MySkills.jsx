import React from "react";
import "../App.css";

const MySkills = () => {
  const skills = [
    { name: "Spring", icon: "./assets/spring.png" },
    { name: "VsCode", icon: "./assets/vscode.jpg" },
    { name: "React", icon: "./assets/react.png" },
    { name: "Sass", icon: "./assets/sass.png" },
    { name: "Java", icon: "./assets/java.jpg" },
    { name: "JavaScript", icon: "./assets/js.png" },
    { name: "Bootstrap", icon: "./assets/bootstrap.png" },
    { name: "TypeScript", icon: "./assets/typescript.png" },
    { name: "Eclipse", icon: "./assets/eclipse.png" },
    { name: "PostgreSQL", icon: "./assets/Postgresql.png" },
    { name: "MySQL", icon: "./assets/mysql.png" },
    { name: "CSS3", icon: "./assets/CSS3.png" },
    { name: "HTML5", icon: "./assets/HTML5.png" },
  ];

  // Calcola l'indice a metà dell'array
  const middleIndex = Math.ceil(skills.length / 2);

  // Separa le icone in due gruppi
  const topSkills = skills.slice(0, middleIndex);
  const bottomSkills = skills.slice(middleIndex);

  return (
    <div>
      <h2 className="Skills">My Skills</h2>
      <div className="skills-container">
        {/* Prima metà */}
        <div className="skills-group">
          {topSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Seconda metà */}
        <div className="skills-group">
          {bottomSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
