import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ backgroundColor: "lavender" }}>
    
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>The Generics</h2>
      <Container>
        <Row>
          <Col md={6}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "28px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Get Our Album <br></br>
                  <i class="fa-solid fa-play"></i>
                </Card.Title>
                <Card.Text style={{ fontSize: "18px" }}>
                  Click the button below to download our latest album!
                </Card.Text>
                <Button
                  variant="info"
                  style={{ fontSize: "18px", marginTop: "20px" }}
                >
                  Download Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Upcoming Tour Dates
            </h2>
            <ul className="ul">
              <ListGroup>
                <li className="li">
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 1, 2023:</strong> New York, NY
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
                <li>
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 3, 2023:</strong> Boston, MA
                     
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
                <li>
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 5, 2023:</strong> Philadelphia, PA
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
                <li>
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 5, 2023:</strong> Philadelphia, PA
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
                <li>
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 7, 2023:</strong> Washington, DC
                
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
                <li>
                  <ListGroup.Item
                    action
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <strong>June 9, 2023:</strong> Atlanta, GA
                  
                  </ListGroup.Item>
                  <Button variant="primary">Buy Ticket</Button>
                </li>
              </ListGroup>
            </ul>
          </Col>
          <Col md={6}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Buy Tickets
            </h2>
            <p style={{ fontSize: "18px" }}>
              Select a tour date above to buy tickets.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
