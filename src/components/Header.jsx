import { useState } from 'react';
import './header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Footwear</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women-collection">Women</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search-btn">🔍</button>
        </div>
        <a href="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">[0]</span>
        </a>
        <div className="profile-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span className="profile-icon">👤</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
