import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h2>The Generics</h2>
      <Container>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title >Get Our Album <br></br>
                <i class="fa-solid fa-play"></i>
                </Card.Title>
                <Card.Text>
                  Click the button below to download our latest album!
                </Card.Text>
                <Button variant="primary">Download Album</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <h2>Upcoming Tour Dates</h2>
            <ListGroup>
              <ListGroup.Item action>
                <strong>June 1, 2023:</strong> New York, NY
              </ListGroup.Item>
              <ListGroup.Item action>
                <strong>June 3, 2023:</strong> Boston, MA
              </ListGroup.Item>
              <ListGroup.Item action>
                <strong>June 5, 2023:</strong> Philadelphia, PA
              </ListGroup.Item>
              <ListGroup.Item action>
                <strong>June 7, 2023:</strong> Washington, DC
              </ListGroup.Item>
              <ListGroup.Item action>
                <strong>June 9, 2023:</strong> Atlanta, GA
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <h2>Buy Tickets</h2>
            <p>Select a tour date above to buy tickets.</p>
            <Button variant="primary">Buy Tickets</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

