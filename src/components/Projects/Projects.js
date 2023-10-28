import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nurse from "../../Assets/Projects/nurse.png";

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
              imgPath={nurse}
              isBlog={false}
              title="Australian Nurse careers"
              description="The 'Aussie Nurse Careers' website is a comprehensive platform tailored for nursing professionals in Australia. This digital platform is designed to be a one-stop-shop for all nursing career-related needs, guiding nurses through various stages of their professional journey."
              ghLink="https://github.com/JatinKarnwal/aussie-nurse-careers"
              demoLink="https://aussienursecareers-git-main-jkarnwal20-gmailcom.vercel.app/"
            />
          </Col>

       

       

         

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
