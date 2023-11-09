import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sameep Dhakal </span>
            from <span className="purple"> Kathmandu Nepal.</span>
            <br /> I am a Computer Engineering graduate from Tribhuvan university
         
            <br />
            Apart from coding, some other hobbies include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Shape with commitment; revolutionize with innovation."
          </p>
          <footer className="blockquote-footer">Sameep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
