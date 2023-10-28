import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sabin Thapa </span>
            from <span className="purple"> Kathmandu Nepal.</span>
            <br /> I am a final year student pursuing an (write about your course here)
         
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Craft with purpose; innovate with heart."{" "}
          </p>
          <footer className="blockquote-footer">Sabin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
