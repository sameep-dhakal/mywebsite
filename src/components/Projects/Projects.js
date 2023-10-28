import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pf from "../../Assets/Projects/processreport.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={pf}
              isBlog={false}
              title="Process Feedback"
              description="Process Feedback is a tool for visualizing the journey of a writing task. Summarizing the journey with interactive and insightful data visualizations, it helps us gain a deeper understanding of our writing and coding process"
              demoLink="https://www.processfeedback.org/"
            />
          </Col>
     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
