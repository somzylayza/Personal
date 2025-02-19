import React, { useEffect, useState } from "react";
import "../styles/shoppingcart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from API
  useEffect(() => {
    fetch("https://hometrendy.com/api/cart") // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, []);

  // Remove item from cart
  const handleRemoveItem = (id) => {
    fetch(`https://hometrendy.com/api/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error removing item:", error));
  };

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && <button className="checkout-btn">Proceed to Checkout</button>}
    </div>
  );
};

export default ShoppingCart;
