import React, { useContext} from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) =>{

    const {id,name,price,imgUrl} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

   return (
    <div className="cartItem">
      <img src={imgUrl} alt="nothing found"/>
      <div className="description">
        <p>
            <b>{name}</b>
        </p>
        <p>Rs.{price}</p>
        <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input value={cartItems[id]} />
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
   )
};

export default CartItem;