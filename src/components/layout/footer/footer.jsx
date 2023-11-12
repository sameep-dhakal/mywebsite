import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import './footer.css'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer"> {/* Use a <div> instead of <Container> */}
            <div className="footer-icons">
                <ul className="social-icons">
                    <li className="social-icons">
                        <a href="https://github.com/sameep-dhakal " target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.facebook.com/dhakalsameep " target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.linkedin.com/in/sameep-dhakal-082155154/ " target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.instagram.com/sameeps_/" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </div>
            <h3>Designed and Developed by Sameep Dhakal</h3>
            <h3>Copyright © {year} SD</h3>
        </div>
    );
}

export default Footer;

