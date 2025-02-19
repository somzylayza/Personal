import React, { useState } from "react";
import "../pages/home.css";

const products = [
  { id: 1, name: "Men's Blue Loafers", price: 129.99, image: "./Image1.jpg" },
  { id: 2, name: "Men's Grey Loafers", price: 139.99, image: "./Image2.jpg" },
  { id: 3, name: "Men's Red Loafers", price: 149.99, image: "./Image3.jpg" },
  { id: 4, name: "Men's Red Loafers", price: 209.99, image: "./item-1.jpg" },
  { id: 5, name: "Men's Red Loafers", price: 150.99, image: "./item-2.jpg" },
  { id: 6, name: "Men's Red Loafers", price: 305.99, image: "./item-3.jpg" },
  { id: 7, name: "Men's Red Loafers", price: 299.99, image: "./item-4.jpg" },
  { id: 8, name: "Men's Red Loafers", price: 199.99, image: "./item-5.jpg" },
  { id: 9, name: "Men's Red Loafers", price: 170.99, image: "./item-6.jpg" },
  { id: 10, name: "Men's Red Loafers", price: 180.99, image: "./item-7.jpg" },
  { id: 11, name: "Men's Red Loafers", price: 270.99, image: "./item-8.jpg" },
  { id: 12, name: "Men's Red Loafers", price: 265.99, image: "./item-9.jpg" },
  { id: 13, name: "Men's Red Loafers", price: 298.99, image: "./item-10.jpg" },
  { id: 14, name: "Men's Red Loafers", price: 196.99, image: "./item-11.jpg" },
  { id: 16, name: "Men's Red Loafers", price: 200.99, image: "./item-13.jpg" },
  { id: 18, name: "Men's Red Loafers", price: 120.99, image: "./item-15.jpg" },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>MEN'S SHOES COLLECTION</h1>
          <p>New trending shoes</p>
          <button className="shop-now-btn">Shop Collection</button>
        </div>
      </div>

      {/* Product Section */}
      <div className="featured-products">
        <h2>Best Sellers</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
          <div className="Brands">
            <img src="./brand-1.jpg" style={{width: "20%", height:"20%"}}/>
            <img src="./brand-2.jpg"  style={{width: "20%", height:"20%"}}/>
            <img src="./brand-3.jpg"  style={{width: "20%", height:"20%"}}/>
            <img src="./brand-4.jpg" style={{width: "20%", height:"20%"}}/>
            <img src="./brand-5.jpg"  style={{width: "20%", height:"20%"}}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
