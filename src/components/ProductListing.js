
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getProductsByCategory } from '../data/products';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const productsByCategory = getProductsByCategory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="product-listing">
      <div className="container">
        <h1 className="page-title">Our Beautiful Houseplants</h1>
        
        {Object.entries(productsByCategory).map(([categoryName, products]) => (
          <div key={categoryName} className="category">
            <h2 className="category-title">{categoryName}</h2>
            <div className="product-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                      disabled={isProductInCart(product.id)}
                    >
                      {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
