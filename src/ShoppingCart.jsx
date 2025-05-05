import React, { useState } from "react";
import ProductList from "./ProductList";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  const products = [
    { id: 1, name: "Apple MacBook", price: 1000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Pen", price: 300 },
    { id: 4, name: "Paper", price: 40 },
    { id: 5, name: "Cake", price: 500 },
    { id: 6, name: "Washing Machine", price: 60000 },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const toggleCartPage = () => {
    setShowCartPage(!showCartPage);
  };

  return (
    <div className="container">
      {showCartPage ? (
        <ProductList cart={cart} setCart={setCart} toggleCartPage={toggleCartPage} />
      ) : (
        <>
          <h1 className="header">Shopping Cart</h1>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <span>{product.name} -{product.price}</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="cart-section">
            <button className="cart-icon-btn" onClick={toggleCartPage}>
              🛒 {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;