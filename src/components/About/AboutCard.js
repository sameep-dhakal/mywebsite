import React from "react";
import Card from "react-bootstrap/Card";
import { FaMusic, FaPlane, FaFutbol } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { ImPointRight } from "react-icons/im";
import madridLogo from "../../Assets/madrid.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-center">
          <p style={{ textAlign: "center" }}>
            I am from <span className="purple"> Land of Himalayas <strong> Nepal</strong> </span>🇳🇵
            <br /> I am a Computer Engineering graduate from Tribhuvan University, Nepal.
            <br />
            Apart from coding, I am:
          </p>
          <ul className="about-activity-list">
      <li className="about-activity">
         <GiSoccerBall /> Passionate about playing Football 
         <ul style={{ listStyle: "none" }}>
                    <li>  And I love <strong>Real Madrid <img src={madridLogo} alt="Real Madrid Logo" className="madrid-logo" /></strong>  </li>  
        </ul>
               
      </li>
      <li className="about-activity">
         <FaMusic /> Exploring different genres
      </li>
      <li className="about-activity">
        <FaPlane /> Always ready for an adventure
      </li>
    </ul>

          <p style={{ color: "#05aaaa" }}>
          "Shape with commitment; revolutionize with innovation."
          </p>
          <footer className="blockquote-footer">Sameep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
