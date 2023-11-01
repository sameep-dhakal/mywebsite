import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import MainLayout from "../layout/mainLayout/mainLayout"
import {compress, decompress} from 'huffy';
import jsonData from '../../code_4minutes3000characters.json'; // <-- Importing the JSON data

function Home() {


// Convert the JSON object to a string
const jsonString = JSON.stringify(jsonData);

// Encode the string to create a buffer
const buffertimestart = performance.now();
const buffer = new TextEncoder().encode(jsonString);
const buffertimeend = performance.now();
console.log("buffer string", buffer);
console.log("buffer time", buffertimestart-buffertimeend);


// Compress and decompress the buffer
// Measure time taken for compression
const compressTimeStart = performance.now();
const compressed = compress(buffer);
const compressTimeEnd = performance.now();
console.log("compressed is", compressed);
console.log("Compression time (ms):", compressTimeEnd - compressTimeStart);

// Measure time taken for decompression
const decompressTimeStart = performance.now();
const decompressed = decompress(compressed);
const decompressTimeEnd = performance.now();
console.log("decompressed is", decompressed);
console.log("Decompression time (ms):", decompressTimeEnd - decompressTimeStart);


// Calculate and log the compression ratio
console.log('Compression ratio:', compressed.length / buffer.length);

  return (
    <MainLayout>
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sameep Dhakal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
