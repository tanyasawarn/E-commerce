import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagename from "../Home/image/background.jpg";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${imagename})`, height: "100vh" }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget risus sed ligula pretium tincidunt. In hac habitasse platea
              dictumst. Sed iaculis tortor eget quam blandit, eget auctor nisi
              venenatis. Aliquam erat volutpat.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={imagename}
              alt="background"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
