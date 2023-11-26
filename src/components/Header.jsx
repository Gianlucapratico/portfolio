// Header.js
import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = ({ isDarkMode }) => {
  return (
    <header className={isDarkMode ? "dark-mode" : ""}>
      <h1>Gianluca Praticò</h1>
      <div>
        <Row>
          <Col xs={12} md={6}>
            <img
              src={`${process.env.PUBLIC_URL}./assets/GianlucaPraticò.jpg`}
              alt="Pic"
              style={{
                width: "240px",
                height: "200px",
                borderRadius: "30%",
                marginBottom: "20px",
              }}
            />

            <h2 className="animated-header">
              <svg
                className="nome"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 650 60"
              >
                <text
                  x="50%"
                  y="50%"
                  alignmentBaseline="middle"
                  textAnchor="middle"
                >
                  Junior Full Stack Developer
                </text>
              </svg>
            </h2>
          </Col>

          <>
            <Col xs={12} md={12}>
              <Navbar expand="md">
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#myskills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col xs={12} md={6}>
              <Navbar expand="md">
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#certificates">Certificates</Nav.Link>
                    <Nav.Link href="#cv">CV</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </>
        </Row>
      </div>
    </header>
  );
};

export default Header;
