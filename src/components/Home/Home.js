import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import MainLayout from "../layout/mainLayout/mainLayout"

function Home() {
  return (
    <MainLayout>
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello and Namaste!{" "}
                <span className="greeting" role="img" aria-labelledby="namaste">
                  🙏
                  </span>
              </h1>

              <h1 className="heading-name">
                It's Me
                <strong className="main-name"> Sameep Dhakal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, zIndex: 1 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid rounded-circle"
                style={{ height: "400px", width: "400px", objectFit: "cover" ,border:'2px solid'}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    </MainLayout>
  );
}

export default Home;
