import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Plantify
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <button 
                  className="cart-icon" 
                  onClick={handleCartClick}
                  aria-label="Shopping cart"
                >
                  🛒
                  {totalQuantity > 0 && (
                    <span className="cart-count">{totalQuantity}</span>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
