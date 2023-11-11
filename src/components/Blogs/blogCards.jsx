import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoMdOpen } from "react-icons/io";

function BlogCards(props) {
    return (
        <Card className="blog-card-view">
            <Card.Body>
                <Card.Title style={{ color: "#05aaaa" }} >{props.title}</Card.Title>
                {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
                <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }} >
                    {props.description}
                </Card.Text>
                <Button
                    variant="primary"
                    href={props.blogLink}
                    target="_blank"
                >
                    <IoMdOpen /> &nbsp;
                    {"Read More"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCards;
