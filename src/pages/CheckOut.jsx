import React from 'react';
import './checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-item">
          <img src="product-image-url.jpg" alt="Product" />
          <div className="order-details">
            <p>Product Name</p>
            <p>$199.99</p>
          </div>
        </div>
        <div className="total">
          <p>Total: $199.99</p>
        </div>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;