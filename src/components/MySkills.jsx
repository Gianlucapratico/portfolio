import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";

const MySkills = () => {
  const skills = [
    { name: "Spring", icon: "./assets/spring.png" },
    { name: "VsCode", icon: "./assets/vscode.jpg" },
    { name: "React", icon: "./assets/react.png" },
    { name: "Sass", icon: "./assets/sass.png" },
    { name: "Java", icon: "./assets/java.jpg" },
    { name: "JavaScript", icon: "./assets/js.png" },
    { name: "Bootstrap", icon: "/assets/bootstrap.png" },
    { name: "TypeScript", icon: "/assets/typescript.png" },
    { name: "Eclipse", icon: "./assets/eclipse.png" },
    { name: "PostgreSQL", icon: "./assets/Postgresql.png" },
    { name: "MySQL", icon: "./assets/mysql.png" },
    { name: "CSS3", icon: "./assets/CSS3.png" },
    { name: "HTML5", icon: "./assets/HTML5.png" },
  ];

  return (
    <Container fluid>
      <h2 className="Skills">My Skills</h2>
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={6}
        className="skills-container"
        gap={2}
      >
        {skills.map((skill, index) => (
          <Col key={index}>
            <div className="skill-item">
              <Image src={skill.icon} alt={skill.name} fluid />
              <p>{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MySkills;
