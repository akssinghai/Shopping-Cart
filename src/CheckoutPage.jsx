import React, { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = ({ toggleCheckoutPage }) => {
  const [email, setEmail] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Checkout Successful!\nEmail: ${email}\nPayment Details: ${paymentDetails}`);
    toggleCheckoutPage(); // Go back to the previous page
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleCheckout} className="checkout-form">
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Details:</label>
          <input
            type="text"
            id="payment"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            required
            placeholder="Enter payment details"
          />
        </div>
        <button type="submit" className="checkout-btn">
          Confirm Payment
        </button>
        <button
          type="button"
          className="back-btn"
          onClick={toggleCheckoutPage}
        >
          Back to Cart
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;