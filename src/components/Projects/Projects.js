import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pf from "../../Assets/Projects/processreport.png";
import summarizer from "../../Assets/Projects/summarizer.png";
import eyewear from "../../Assets/Projects/virtualtryon.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import messianalysis from "../../Assets/Projects/messianalysis.png";

import MainLayout from "../layout/mainLayout/mainLayout";

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
                description="Text Summarizer is an intelligent tool that condenses lengthy paragraphs into a concise summary, capturing the most critical information and main ideas."
                // demoLink=""
                ghLink=" https://github.com/sameep-dhakal/text-summarizer"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eyewear}
                isBlog={false}
                title="Virtual Eyewear Tryon"
                description="Virtual eyewear tryon captures your image and places the elected the eye products on your face so that you know how the eywear looks on your face. Basically like a Snapchat filter."
                // demoLink=" "
                ghLink="https://github.com/sameep-dhakal/virtual_glasses_tryon"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={messianalysis}
                isBlog={false}
                title="Football Data Analytics"
                description="Football Data analysis is the data analytics project thet helps to visualize different kinds 
              of the statistics of the footballer. For now I have analyzed data for one player Lionel Messi."
                // demoLink=" "
                ghLink="https://github.com/sameep-dhakal/football-data-analytics"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ecommerce}
                isBlog={false}
                title="Ecommerce Products classification"
                description="Ecommerce Products classification reads the image and classifies the images according to the classes they are predefined
              This is the basic implementation of the multiple classification using CNN and beginner friendly."
                // demoLink=" "
                ghLink="https://github.com/sameep-dhakal/ecommerce_products_classification"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </MainLayout>
  );
}

export default Projects;
