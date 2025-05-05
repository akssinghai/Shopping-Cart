import React, { useState } from "react";
import "./ProductList.css";
import CheckoutPage from "./CheckoutPage";

const ProductList = ({ cart, setCart, toggleCartPage }) => {
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);

  const removeFromCart = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return null; 
      }
      return item;
    }).filter(item => item !== null); 
    setCart(updatedCart);
  };
  const toggleCheckoutPage = () => {
    setShowCheckoutPage(!showCheckoutPage);
  };


  return (
    <div className="container">
      {showCheckoutPage ? (
        <CheckoutPage toggleCheckoutPage={toggleCheckoutPage} />
      ) : (
      <>
        <h1 className="header">Cart Items</h1>
      
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>
                {item.name} - ${item.price} (Quantity: {item.quantity || 1})
              </span>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
                className="checkout-btn"
                onClick={toggleCheckoutPage}
              >
                Proceed to Checkout
              </button>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
      <button className="back-btn" onClick={() => toggleCartPage()}>
        Back to Shopping
      </button>
     
    </>
      )}
    </div>
  );
};

export default ProductList;