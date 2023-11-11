import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pf from "../../Assets/Projects/processreport.png";
import summarizer from "../../Assets/Projects/summarizer.png";
import MainLayout from "../layout/mainLayout/mainLayout"

function Projects() {
  return (
    <MainLayout>
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
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={summarizer}
              isBlog={false}
              title="Text Summarizer"
              description="Text Summarizer is an intelligent tool condenses lengthy paragraphs into a concise summary, capturing the most critical information and main ideas."
              demoLink=" "
            />
          </Col>
     
        </Row>
      </Container>
    </Container>
    </MainLayout>
  );
}

export default Projects;
