import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./blogCards"; // Import the BlogCards component
import Particle from "../Particle";
import autoencoder from "../../Assets/Blogs/autoencoder.png";
import MainLayout from "../layout/mainLayout/mainLayout";

function Blogs() {
    return (
        <MainLayout>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        My <strong className="purple">Blogs </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        I write blogs about the articles I read. You can find them here.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={15} className="project-card">
                            {/* Replace ProjectCard with BlogCard */}
                            <BlogCard
                                title="Review on Paper : A Deep Convolutional Autoencoder for
                            Automatic Motion Artifact Removal in
                            Electrodermal Activity"
                                imgPath={autoencoder}
                                isBlog={false}
                                description={`
                                There are 3 main intuitions that you may take from the paper.

                                Aim: Develop a robust and data-driven automatic motion artifacts (MA) removal technique from electrodermal activity (EDA) signal also known as galvanic skin response that is generated due to the activation of sweat glands in the body in reaction to some kind of emotional activity.                            
                                
                                Method: Paper Proposed a deep convolutional autoencoder (DCAE) approach, trained on 4 different types of datasets including Gaussian white noise (GWN) and realistic MA data recorded in the lab.                            
                                
                                Results: DCAE model outperformed three previous methods i.e. wavelet method, low pass filtering method, and exponential smoothing method, showing significantly higher signal-to-noise-power-ratio improvement (SNRimp) and lower mean squared error (MSE) on MA-corrupted data. The reconstructed EDAs had a mean correlation value of 0.78 with reference clean data from the motionless hand, indicating higher effectiveness in removing MAs compared to other methods with only a correlation value of 0.68 for raw MA-corrupted data.                            
                              `}
                                blogLink="https://pub.aimind.so/review-on-paper-a-deep-convolutional-autoencoder-for-automatic-motion-artifact-removal-in-b99e421e795a?gi=d5cdf12d60bc"
                            />
                        </Col>
                        {/* Add more BlogCards if needed */}
                        {/* <Col md={4} className="project-card">
              <BlogCard
                imgPath={summarizer}
                isBlog={false}
                title="Text Summarizer"
                description="Text Summarizer is an intelligent tool condenses lengthy paragraphs into a concise summary, capturing the most critical information and main ideas."
                blogLink=" "
              />
            </Col> */}
                    </Row>
                </Container>
            </Container>
        </MainLayout>
    );
}

export default Blogs;
