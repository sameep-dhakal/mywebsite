import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './footer.css'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer"> {/* Use a <div> instead of <Container> */}
            <div className="footer-icons">
                <ul className="social-icons">
                    <li className="social-icons">
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noopener noreferrer">
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

