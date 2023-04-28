 import React, { useState, useEffect} from "react";
 import { Container, Row, Col } from "react-bootstrap";
 import ItemList from "../ItemList";
 
 const Store=()=>{

    return (
        <Container>
            <h2>Products Available</h2>
            <Row>
        {itemList.map((item) => (
          <Col md={4} key={item.id}>
            <img src={item.imgUrl} alt={item.title} style={{ maxWidth: "100%" }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </Col>
        ))}
      </Row>
        </Container>
    )
};

export default Store;