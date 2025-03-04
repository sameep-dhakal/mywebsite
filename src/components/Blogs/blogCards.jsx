import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoMdOpen } from "react-icons/io";
import "./blogs.css";

function BlogCards(props) {
    return (
        <Card className="blog-card-view">
            <Card.Body>
                <Card.Title className="card-title-custom" >{props.title}</Card.Title>

                {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}

                  {/* Conference and Author Details */}
                  <Card.Subtitle className="card-subtitle-custom" >
                  <span>{props.subtitle1}</span>
                  </Card.Subtitle>

                    <Card.Subtitle className="card-subtitle-custom" >
                    {props.subtitle2}
                    </Card.Subtitle>
               
                <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }} >
                    {props.description}
                </Card.Text>
                <Button
                    variant="primary"
                    href={props.blogLink}
                    target="_blank"
                >
                    <IoMdOpen /> &nbsp;
                    {"Read Full Article"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCards;
