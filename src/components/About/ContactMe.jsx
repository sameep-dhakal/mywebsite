import React from "react";
import { Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
    return (
        <Card className="contact-card" style={{ zIndex: 1, backgroundColor: "transparent" }}>
            <Card.Body>
                <h1 className="project-heading">
                    Contact <strong className="purple">Me</strong>
                </h1>
                <div className="contact-info">
                    <p>
                        <FaEnvelope /> Email:{" "}
                        <a href="mailto:sameep.dhakal721108@gmail.com">sameep.dhakal721108@gmail.com</a>
                    </p>
                    <p>
                        <FaPhone /> Phone:{" "}
                        <a href="tel:+9779865346534">+9779865346534</a>,{" "}
                        <a href="tel:+9779817299111">+9779817299111</a>
                    </p>
                    <p>
                        <FaMapMarkerAlt /> Address: Bharatpur-7, Krishnapur, Chitwan, Nepal
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ContactMe;
