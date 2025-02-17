import React from 'react';
import './cartpage.css';

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img src="https://preview.colorlib.com/#footwear/images/product-1.jpg" alt="Product" />
          <div className="cart-item-info">
            <p>Product Name</p>
            <p>$199.99</p>
            <button className="remove-item-btn">Remove</button>
          </div>
        </div>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;