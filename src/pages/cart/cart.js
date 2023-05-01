import Products from "../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () =>{

    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return(
        <div className="cart">
           <div>
            <h1>Your Cart Items</h1>
           </div>
           <div className="cartItems">
           {Products.filter(product => cartItems[product.id] !== 0 ).map((product)=>{
                  return <CartItem data={product} />;
            })}
           </div>
           <div className="checkout">
               <p>SubTotal: Rs.{totalAmount}</p>
               <button>Continue Shopping</button>
           </div>
        </div>
    );
};

export default Cart;