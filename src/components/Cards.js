import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemList from "./ItemList";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";

const Cards = () => {
  const [items, setItems] = useState(ItemList);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">The Generics</h2>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {items.map((element, id) => {
          return (
            <>
              <div>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgUrl}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Price: Rs. {element.price.toFixed(2)}</Card.Text>
                    <div className="button-div d-flex justify-content-center">
                      <Button
                        variant="primary"
                        className="col-lg-12"
                        onClick={() => send(element)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
