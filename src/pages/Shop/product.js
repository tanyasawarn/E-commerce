import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Product = (props) => {
  const { id, name, price, imgUrl } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
 
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowDetails(true);
    navigate(`/product/${id}`);
  };


  return (
    <div className="product">
      <img src={imgUrl} alt="nothing" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Rs. {price}</p>
      </div>
      <button className="addToCartBttn" 
     onClick={() => {
          addToCart(id);
        }}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
      {showDetails && props.data.reviews && <ProductDetails imgUrl={imgUrl} reviews={props.data.reviews} />}

      {!showDetails && (
        <button className="showDetailsBttn" onClick={handleClick}>
          Show Details
        </button>
      )}
    </div>
  );
};

export default Product;
