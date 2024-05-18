import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import homeLogo from "../../Assets/home-main.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { ImHipster2 } from "react-icons/im";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section items-center justify-center"
      id="about"
    >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My <span className="purple"> Experiences </span>
            </h1>
            <h2 className="home-about-body text-center">
              Software Developer at
              <span className="company-name" data-hover-content="june,2023-Now">
                <a
                  href="https://www.processfeedback.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Process Feedback.
                </a>
              </span>
              <br />
              Instructor at
              <span
                className="company-name"
                data-hover-content="November,2022-Now"
              >
                <a
                  href="https://www.processfeedback.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advanced College of Engineering and Management.
                </a>
              </span>
              <br />
              Software Engineer at
              <span
                className="company-name"
                data-hover-content="May,2022-July,2022"
              >
                <a
                  href="https://bpeyefoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BP Eye Foundation.
                </a>
              </span>
              <br />
              Data Science Fellow at
              <span
                className="company-name"
                data-hover-content="March,2022-April,2022"
              >
                <a
                  href="https://www.deerhold.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deerhold.
                </a>
              </span>
            </h2>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=" https://github.com/sameep-dhakal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/dhakalsameep"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sameep-dhakal-082155154/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sameeps_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
