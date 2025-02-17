import React from 'react';
import './productdetails.css';

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src="https://preview.colorlib.com/#footwear/images/product-1.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h1>Product Name</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="price">$199.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;