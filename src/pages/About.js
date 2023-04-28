import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagename from "./image/aboutimage.jpg";
const About = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={imagename} alt="about" style={{ maxWidth: "100%" }} />
        </Col>
        <Col md={6}>
          <h2>About Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            risus sed ligula pretium tincidunt. In hac habitasse platea
            dictumst. Sed iaculis tortor eget quam blandit, eget auctor nisi
            venenatis. Aliquam erat volutpat.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
