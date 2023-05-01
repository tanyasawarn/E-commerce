import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">

<div className="links">
        

        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <ShoppingCart size={32} className="cart" />
        </Link>
      </div>
       
    </div>
  );
};

export default Navbar;
