import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import {DLT} from "./redux/actions/action"; 

const Header = () => {


  const [price, setPrice]= useState(0);
  //console.log(price); 

  const getData= useSelector((state)=>state.cartreducer.carts);
 
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) =>{
     dispatch(DLT(id))
  };

  const total = () =>{
    let price=0;
    getData.map((ele,k)=>{
      price=ele.price+price
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/"className="text-decoration-none text-light mx-3">Home</NavLink>
            <NavLink to="/store" className="text-decoration-none text-light mx-3">Store</NavLink>
            <NavLink to="/About" className="text-decoration-none text-light mx-3">About</NavLink>
            
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
            Cart
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
        {getData.length ?
        <div className="card_details" style={{width:"24rem", padding:"10"}}>
           <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                getData.map((e)=>{
                  return (
                    <>
                      <tr>
                        <td>
                          <img src={e.imgUrl} style={{width:"5rem", height:"5rem" }}  alt=" images not found" />
                        </td>
                        <td>
                          <p>Rs.{e.price.toFixed(2)}</p>
                          <p>Quantity : {e.quantity}</p>
                          <p style={{color:"red", fonSize:20, cursor:"pointer"}} >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td className="mt-5" style={{color:"red", fonSize:20, cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                        <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
              <p className="text-center">Total: Rs.{price}</p>
            </tbody>
           </Table>
        </div> :
        <div className="card-details d-flex justify-content-center align-items-center">
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 1,
                right: 30,
                fontSize: 15,
                cursor: "pointer",
                 
              }}
              onClick={handleClose}
              ></i>
            <p style={{ fontSize: 18 }}>Your Cart Is Empty</p>
          </div>
        }
           
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
